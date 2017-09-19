---
slug: squashing-gatsby-webpack-d3-bug
title: Squashing a Gatsby+Webpack+d3 bug
date: '2017-09-19T12:00:00.000Z'
---
I was in the midst of rebuilding my site last week with Gatsby JS, a React-based static site generator, when I decided I wanted to add an interactive component to my personal website. You know, something fun to spice it up a little bit.

This is a perfect chance to learn d3, I thought! So I went off and read all about d3, and when I felt I was ready, I opened my application and typed:

```
import * as d3 from ‘d3’
```

at the top of the React component that would contain my game (this is the standard way to import d3). I then added a couple of d3 statements to my component’s componentDidMount method, just to make sure that d3 was working. With that done, I switched to the terminal to check that `gatsby`’s develop script had completed its build properly, and I saw...

```
 WAIT  Compiling...

 ERROR  Failed to compile with 2 errors

These dependencies were not found:

* child_process in ./~/xmlhttprequest/lib/XMLHttpRequest.js
* fs in ./~/xmlhttprequest/lib/XMLHttpRequest.js

To install them, you can run: npm install --save child_process fs
```

“Huh? That’s weird! This error seems totally unrelated to d3!” I thought.

The Debugging Journey: Part One

The first thing I noticed about the error was that it mentioned failing to compile due to missing dependencies. Maybe it had something to do with webpack? I returned to my code, commented out everything new except the `import * as d3 from ‘d3’` statement, returned to the terminal, and—same error message. I then commented out the import statement, and the error disappeared.

Reading on in the error message, I saw that both of the missing dependencies had been specified by the module `xmlhttprequest`. I opened my editor to `node_modules/xmlhttprequest/lib/XMLHttpRequest.js`, and sure enough, there they were:

```
var spawn = require("child_process").spawn;
var fs = require("fs");
```

Now I had the error isolated. Well... sort of. I had traced it to a single line of my own code, but there was a whole lot going on under the hood that I didn’t understand. In my confusion, I came up with two specific questions:

1. Why does importing d3, a frontend data viz library, cause webpack to import the `xmlhttprequest` module, which is used for making http requests on the server?
2. How is it possible that built-in node libraries like `child_process` and `fs` can fail to be imported?

All I wanted to do was play around a bit with d3 and start making this game! At a loss, I decided to make a separate, smaller application with no framework to see if I could get d3 working with webpack. A little while later, I had a small app with a tiny webpack config, and—what do you know—`import * as d3 from ‘d3’` worked just fine. This gave rise to a third question:

Why does importing d3 break in my Gatsby app, but work fine in my small, custom webpack config app?

At this point, I laid the bug to rest for a while, both so that I could get some practice with d3 and to let my unconscious mind (hopefully) solve the problem for me.

The next day, I paired with another person at the [Recurse Center](https://www.recurse.com/), but neither of us were able to make any real progress on this bug. When I saw that another person didn’t understand this bug either, I went big: I posted on Zulip to get help from the RC community, and created an issue in Gatsby’s repo.

The Journey - Part Two

The next time I took a look at this bug was a few days later, when I met up with Harold Treen, an RC alum and JavaScript extraordinaire. Without him, it’s possible I’d probably still be stuck in bug land.

Just as a reminder, this is the error message I was getting:

```
 WAIT  Compiling...

 ERROR  Failed to compile with 2 errors

These dependencies were not found:

* child_process in ./~/xmlhttprequest/lib/XMLHttpRequest.js
* fs in ./~/xmlhttprequest/lib/XMLHttpRequest.js

To install them, you can run: npm install --save child_process fs
```

Almost immediately, Harold and I noticed that we could make this error go away by replacing the import all of d3 statement...

import * as d3 from ‘d3’

...with statements importing parts of specific libraries. For example:

```
import {forceSimulation} from ‘d3’
import {selectAll} from ‘d3’
```

We also figured out [another way](https://github.com/josephsavona/valuable/issues/9#issuecomment-65000999) to patch the problem. Webpack lets you override the return value for node modules; you can make `require(‘fs’)` and `require(‘child_process’)` return empty objects like this:

```
node: {
  fs: "empty",
  child_process: "empty"
}
```

Of these two fixes, I especially liked the first one, because it would also reduce bundle size—and I think that’s what I’ll be going with in the future. So we were done, right? Problem solved? Well, both Harold and I were curious enough about the origin of this error that we decided to continue digging.

After all, the original questions that had so vexed me earlier were still unanswered:

1. Why does importing d3, a frontend data viz library, cause webpack to import xmlhttprequest, used for making http requests?
2. How is it possible that built-in node libraries like `child_process` and `fs` can fail to be imported?
3. Why does importing d3 break in my Gatsby app, but work fine in my small, custom webpack config app?

To begin answering the first question, Harold had the idea of searching for xmlhttprequest in package-lock.json. Sure enough, `xmlhttprequest` was being required by `d3-request`, and `d3-request` was being required by `d3`.


```
# package-lock.json
{
  ...
  "d3-request": {
      ...
      "requires": {
        ...
        "xmlhttprequest": "1.8.0"
      }
    },
  ...,
  {
    “d3”: {
      "requires": {
        ...
        "d3-request": "1.0.6",
        ...
      }
    }
  }
}
```

But why would a part of d3 specify a dependency that depends on node? Reading d3-request’s documentation closely, we realized that d3-request is meant to be used both on the server and in the browser. A module is able to provide different entry points into itself via the package.json, and taking a look at `d3-request`’s package.json revealed no less than five different entry points into the module:

```
{
  ...
  "main": "build/d3-request.node.js",
  "unpkg": "build/d3-request.js",
  "jsdelivr": "build/d3-request.js",
  "module": "index",
  "jsnext:main": "index.js",
  ...
}
```

Notice anything about those entry points? The `main` property is set to the node build! Now we were onto something: if webpack defaulted to importing the `main` entry point of a module, then that would cause the following import chain:

```
import * as d3 from ‘d3’
=> d3-request
=> xmlhttprequest
=> fs and child_process
```

At around this time, one of us noticed something else of interest: Gatsby was using version 1 of webpack! I jumped over to my custom webpack config app, and checked the version of webpack, which was version 3. We changed the version to 1, migrated webpack’s config to the version 1 syntax, and checked the build step: and it broke!

Resolution

Almost there, I promise! To recap, we had learned two critical pieces of information:

1. `d3-request` provides a node-based build via package.json’s ‘main’ attribute, as well as a few other builds
2. webpack version 1 failed with the import * as d3 statement, whereas webpack version 3 worked

With these two things in mind, Harold and I tracked down the methods by which these two versions of webpack choose between module builds. Both versions of webpack by default specify an array of package.json property names, which webpack uses to choose

- webpack v1 [`resolve.packageMains`](https://webpack.github.io/docs/configuration.html#resolve-packagemains) default: `["webpack", "browser", "web", "browserify", ["jam", "main"], "main"]`
` webpack v3 [`resolve.mainFields`](https://webpack.js.org/configuration/resolve/#resolve-mainfields) default (for `target: web`): `["browser", "module", "main"]`

Of the properties specified by webpack v1, `main` is the only one that appears in d3-request’s package.json; thus, webpack v1 was loading the `main` build (for node). And, as you might have already seen, the webpack v3 properties include `module` before `main`, meaning that webpack v3 was loading `module` build.

Conveniently, webpack v3’s docs for [`resolve.mainFields`](https://webpack.js.org/configuration/resolve/#resolve-mainfields) include a link to webpack’s [`target`](https://webpack.js.org/concepts/targets/) property. This is what makes webpack choose the environment to emulate when building its bundle. By [hooking into Gatsby’s webpack config](https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/add-custom-webpack-config.md) and logging it to the console, we were able to see that `target` was set to `‘web’`, which explained why node modules were breaking.

Summary

So, to get back to where we started...

1. Why does importing d3 cause webpack to import node modules?

Because d3-request provides a node build, and that’s the one webpack v1 loaded.

2. Why was webpack failing to import node libraries?

Webpack’s target was set to “web,” so it resolved dependencies in a browser-like environment without access to node modules.

3. Why was the Gatsby webpack build breaking and my custom webpack build working?

Because Gatsby uses webpack version 1, which was importing d3-request’s node build into a web environment. My custom webpack build worked because it used version 3, which loaded d3-request’s browser build.

Notes for Future Self

Thanks to the people behind gatsby, webpack, and d3, for making these awesome libraries and for providing me with some occasional debugging practice. Oh, and thanks for Harold Treen for helping me get out of this mess.

There are a few takeaways I’d like to remember from debugging this guy, namely:

- **Don’t sit there, do something**:  Get into the weeds, change things around, and see what happens. Instead of spending time thinking of why the bug could be wrong, try to get more information.
- **webpack isn’t magic**: And no other libraries are magic, either. Even after working with webpack for a while, seeing that webpack error was intimidating because of my lack of knowledge about webpack. But webpack is just code, and code can be debugged.
- **reproduce bugs with the _same version_**: This one’s obvious in retrospect, but clearly I should have checked Gatsby’s webpack version before trying to reproduce the bug in a separate application.
