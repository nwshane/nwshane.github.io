---
slug: squashing-gatsby-webpack-d3-bug
title: Squashing a Gatsby+Webpack+d3 bug
date: '2017-09-26T12:00:00.000Z'
---

I was in the midst of rebuilding my site a couple weeks ago with [Gatsby JS](https://www.gatsbyjs.org/), a React-based static site generator, when I decided I wanted to add an interactive component to my personal website. You know, something fun to spice it up a little bit.

This is a perfect chance to learn [d3](https://d3js.org/), I thought! So I went off and read all about d3, and when I felt I was ready, I opened my application and typed:

```javascript
import * as d3 from 'd3'
```

at the top of the React component that would contain my game (this being the standard way to import d3). I then added some d3 code, just to make sure that d3 was working. With that done, I switched to the terminal to check that gatsby’s develop script had completed its build properly, and this is what I saw...

```
ERROR  Failed to compile with 2 errors

These dependencies were not found:

* child_process in ./~/xmlhttprequest/lib/XMLHttpRequest.js
* fs in ./~/xmlhttprequest/lib/XMLHttpRequest.js

To install them, you can run: npm install --save child_process fs
```

“Huh? That’s weird! This error seems totally unrelated to d3!” I thought.

## The Journey: Part One

They say that the journey of one thousand miles begins with a single step. Well, this debugging journey began with a big *Sigh*, and I resigned myself to the fact that nothing is ever easy in JavaScript (okay okay, I know, I'm exaggerating a little bit).

The first thing I noticed about the error was that it mentioned failing to compile due to missing dependencies. Maybe it had something to do with webpack? I switched to my editor, commented out everything new except the `import * as d3 from 'd3'` statement, returned to the terminal, and—same error message. I then commented out the import statement, and the error disappeared.

Reading on in the error message, I saw that both of the missing dependencies had been specified by the module `xmlhttprequest`. I opened my editor to that module, and there they were:

```
var spawn = require("child_process").spawn;
var fs = require("fs");
```

Now I had the error isolated. Well... sort of. I had traced it to a single line of my own code, which eventually led to a module failing to import node modules. But there was a whole lot going on under the hood that I didn’t understand. My confusion could be summarized with these two questions:

1. Why does importing d3 (a frontend data viz library) cause webpack to import the `xmlhttprequest` module, which is used for making http requests on the server?
2. Why would webpack fail to import `child_process` and `fs`, both of which are built-in node libraries?

All I wanted to do was play around a bit with d3 and start making this game! At a loss, I decided to make a separate, smaller application with no framework to see if I could get d3 working with webpack. A little while later, I had a small app with a tiny webpack config, and—what do you know—importing d3 worked just fine. This gave rise to a third question:

Why does importing d3 break in my Gatsby app, but work fine in my small, custom webpack config app?

At this point, I laid the bug to rest for a while, both so that I could get some practice with d3 in this little app and to let my unconscious mind (hopefully) solve the problem for me.

The next day, I paired with another person at the [Recurse Center](https://www.recurse.com/) (where I'm currently studying), but neither of us were able to make any real progress on this bug. When I saw that I wasn't the only one confused, I went big: I posted on the chat app Zulip to get help from the RC community, and I created an [issue](https://github.com/gatsbyjs/gatsby/issues/2107) in Gatsby’s repo.

## The Journey: Part Two

The next time I took a look at this bug was a few days later, when I met up with [Harold Treen](https://haroldtreen.com/), a fellow Recurser and JavaScript enthusiast.

Just as a reminder, this is the error message I was getting:

```
ERROR  Failed to compile with 2 errors

These dependencies were not found:

* child_process in ./~/xmlhttprequest/lib/XMLHttpRequest.js
* fs in ./~/xmlhttprequest/lib/XMLHttpRequest.js

To install them, you can run: npm install --save child_process fs
```

Almost immediately, Harold and I noticed that we could make this error go away by replacing the import all of d3 statement with statements importing parts of specific libraries:

```js
// Replace this...
import * as d3 from 'd3'

// With this:
import {forceSimulation} from 'd3'
import {selectAll} from 'd3'
```

We also figured out [another way](https://github.com/josephsavona/valuable/issues/9#issuecomment-65000999) to patch the problem. Webpack lets you override the return value for node modules; you can make `require('fs')` and `require('child_process')` return empty objects like this:

```js
node: {
  fs: "empty",
  child_process: "empty"
}
```

Of these two fixes, I especially liked the first one, because it would also reduce bundle size. So we were done, right? Problem solved? Well, we still didn't know *why* this error was occurring with the `import *` statement, and both Harold and I were curious enough that we decided to continue digging.

After all, the original questions that had so vexed me earlier were still unanswered:

1. Why does importing d3, a frontend data viz library, cause webpack to import xmlhttprequest, used for making http requests?
2. How is it possible that built-in node libraries like `child_process` and `fs` can fail to be imported?
3. Why does importing d3 break in my Gatsby app, but work fine in my small, custom webpack config app?

To begin answering the first question, Harold had the idea of searching for xmlhttprequest in package-lock.json. Sure enough, `xmlhttprequest` was being required by `d3-request`, and `d3-request` was being required by `d3`.


```json
# package-lock.json
{
  "d3-request": {
      "requires": {
        "xmlhttprequest": "1.8.0"
      }
    },
  "d3": {
    "requires": {
      "d3-request": "1.0.6",
    }
  }
}
```

But why would a part of d3 specify a dependency that depends on node? Reading d3-request’s documentation closely, we realized that d3-request can be used both on the server and in the browser. (Its purpose is to make it easy to load different formats of data, such as CSV.)

In the npm module system, a module is able to provide different entry points to its code via its package.json file. Taking a look at d3-request’s package.json revealed no less than five different entry points into the module:

```json
{
  "main": "build/d3-request.node.js",
  "unpkg": "build/d3-request.js",
  "jsdelivr": "build/d3-request.js",
  "module": "index",
  "jsnext:main": "index.js",
}
```

Notice anything about those entry points? The `main` property is set to the node build! Now we were onto something: if webpack was loading the `main` entry point of the module, then that would cause the following import chain:

```js
// import * as d3 from 'd3'
// => d3-request
// => xmlhttprequest
// => fs and child_process
```

At around this time, one of us noticed something else of interest: Gatsby was using version 1 of webpack! I jumped over to my custom webpack config app and checked the version of webpack, which was version 3. We changed the version to 1, migrated webpack’s config to the version 1 syntax, checked the build step—and it broke!

## Resolution

Stick with me, dear reader. We're almost there, I promise!

To recap, we had learned two critical pieces of information:

1. `d3-request` provides a node-based build via package.json’s `main` attribute, as well as a few other builds
2. webpack version 1 failed with the `import * as d3` statement, whereas webpack version 3 worked

With these two things in mind, Harold and I opened the webpack documentation. After some searching, we learned that webpack uses an array of package.json property names to decide how to import a module: it tries the first name in the array, then the second, then the third, etc. The main difference between the versions is the name they give to this array.

**webpack v1 default**:

[`resolve.packageMains`](https://webpack.github.io/docs/configuration.html#resolve-packagemains): `["webpack", "browser", "web", "browserify", ["jam", "main"], "main"]`

**webpack v3 default (for `target: web`)**:

[`resolve.mainFields`](https://webpack.js.org/configuration/resolve/#resolve-mainfields): `["browser", "module", "main"]`

Of the properties specified by webpack v1, `main` is the only one that appears in d3-request’s package.json; thus, webpack v1 was loading the `main` build (for node). However, d3-request's package.json also has a `module` property, which webpack v3 includes before `main`, meaning that webpack v3 was loading the `module` build.

Webpack v3’s docs for [`resolve.mainFields`](https://webpack.js.org/configuration/resolve/#resolve-mainfields) also include a link to webpack’s [`target`](https://webpack.js.org/concepts/targets/) configuration, which is what makes webpack choose the environment to emulate when building its bundle. By [hooking into Gatsby’s webpack config](https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/add-custom-webpack-config.md) and logging it to the console, we were able to see that `target` was set to `'web'`, which explained why fs and child_process could not be imported.

## Summary

So, to get back to where we started...

1. Why does importing d3 cause webpack to import node modules?

Because d3-request provides a node build, and that’s the one webpack v1 loaded.

2. Why was webpack failing to import node libraries?

Webpack’s target was set to “web,” so it resolved dependencies in a browser-like environment without access to node modules.

3. Why was the Gatsby webpack build breaking and my custom webpack build working?

Because Gatsby uses webpack version 1, which was importing d3-request’s node build into a web environment. My custom webpack build worked because it used version 3, which loaded d3-request’s browser build.

As an aside, Harold found this d3-request [issue](https://github.com/d3/d3-request/issues/24) and [commit](https://github.com/d3/d3-request/commit/d635b894fee995930f7419189255da8e66062710) from September 2, 2017, which seems to have triggered this problem.

## Notes for Future Self

We solved the bug! Hurray! But before you celebrate, let's remember that it's important to learn from your bugs so that you'll have more tools at your disposal to squash the next one. Focus on process, not product! There are a few takeaways I’d like to remember from this debugging adventure, namely:

- **Take breaks and get help**: I spent a lot of time thinking about how this bug shouldn't be possible, and feeling frustrated because I didn't know how to debug it. If you don't have a clear mind, it'll be 1000x harder to debug—so take a break, and if you still don't have a clue, then ask for help.
- **Don’t sit there, do something**: Instead of trying to brainstorm reasons the bug could exist, use all the tools at your disposal to get more information. Get into the weeds, change things around, and see what happens.
- **webpack isn’t magic**: And no other libraries are magic, either. I let this webpack error intimidate me, because I didn't actually understand what webpack does—and plus, its configuration was hidden away by Gatsby, which made it feel even more like black magic. But webpack is just code, and code can always be debugged.
- **reproduce bugs with the _same version_**: This one’s obvious in retrospect, but clearly I should have checked Gatsby’s webpack version before trying to reproduce the bug in a separate application.

I feel like I learned a lot from this experience, and I hope this story gave you something to think about as well. Thanks to Harold for helping me out of this mess, and thanks to the makers of gatsby, webpack, and d3 for all their open source work.

Now go squash some bugs!

*
