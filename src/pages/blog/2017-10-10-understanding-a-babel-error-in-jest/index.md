---
slug: understanding-babel-error-in-jest
title: Understanding a Babel Error in Jest
date: '2017-10-10T12:00:00.000Z'
draft: true
---

I decided I wanted to write some jest tests yesterday, and had more trouble setting up an initial test than I expected. I ran into an interesting babel-related error, and so I thought I'd share with you the process I went through to set up the app and debug the error.

## Getting to the Error

(If you'd like, you can skip this section and reproduce the error by cloning the [repository](https://github.com/nwshane/jest-babel-error).)

Let's start out by creating a simple sum function.

```javascript
// index.js
export const sum = (a, b) => (a + b)
```

Simple enough. Now we want to test our sum function, because that's what responsible devs do.

```javascript
// spec.js
import sum from './index'

describe('sum', () => {
  test('correctly adds 1 and 1', () => {
    expect(sum(1, 1)).toEqual(2)
  })
})
```

(If you saw the error we're making already, then good for you! If not, then that's fine—I didn't see it either, so I had to debug it.)

Two more steps until we can run our tests. First, we need to create a `package.json` file containing our `test` script, which will run jest. Run `npm init`, and answer the `test command` prompt with `jest`.

Finally, we install jest with `npm i jest`.

Hurray! We now run the test script with `npm t` (a shortcut for `npm test`, or `npm run test`), and...

```
Test suite failed to run

SyntaxError: Unexpected token import

at ScriptTransformer._transformAndBuildScript (node_modules/jest-runtime/build/script_transformer.js:305:17)
          at Generator.next (<anonymous>)
          at Promise (<anonymous>)
```

Dang! It looks like jest doesn't understand the ES6 import syntax. That's okay, we just need to install `babel`, which jest will use to transform the import syntax into something it understands.

Jest's documentation on [configuring babel](https://facebook.github.io/jest/docs/en/getting-started.html#using-babel) has a number of steps with sidenotes. Long story short, jest comes with a the babel-jest library installed, so all we have to do to make jest understand our `import` syntax is the following:

1. Add a `.babelrc` file to our project:

```json
{
  "presets": ["es2015"]
}
```

2. Install the es2015 preset: `npm i babel-preset-es2015`

With that done, babel should be good to go.

## Debugging our babel-transpiled code

Running our tests again (`npm t`), we get a more cryptic error this time:

```
FAIL  ./spec.js
 sum
   ✕ correctly adds 1 and 1 (4ms)

 ● sum › correctly adds 1 and 1

   TypeError: (0 , _index2.default) is not a function

     at Object.<anonymous> (spec.js:5:32)
         at Promise (<anonymous>)
         at <anonymous>
```

Hey, at least our test suite is running now!

If you don't have a lot of experience with babel, then this error will seem a bit strange. Where in the world did `_index2.default` come from? Who cares if it's not a function—I didn't write anything like that in my code!

Hold on a moment! Let's try to remember what babel is doing. Babel is a transpiler, so it's transforming your code into something that jest can understand. Does that mean it might be transforming variable names as well, and outputting things like `_index2.default`?

In order to answer that question, let's consult a handy section of the jest docs, called "[Tests are Failing and You Don't Know Why](https://facebook.github.io/jest/docs/en/troubleshooting.html#tests-are-failing-and-you-don-t-know-why)". The docs recommend we use a debugger, which seems like a great idea for getting more info!

Let's add a `debugger` line into our code, to tell our future debugger to stop at that line:

```javascript
import sum from './index'

describe('sum', () => {
  test('correctly adds 1 and 1', () => {
    debugger
    expect(sum(1, 1)).toEqual(2)
  })
})
```

Next, let's run our tests as recommended by the docs:

```
node --inspect-brk node_modules/.bin/jest --runInBand
```

This gives us the following output:

```
Debugger listening on ws://127.0.0.1:9229/cedc923a-cc9f-4531-a947-9c1ef7226bc8
For help see https://nodejs.org/en/docs/inspector
```

Looking at the above link, we can see a bunch of different options for debugging our code. Let's use Chrome, since most of us will have it installed already.

1. Navigate to `chrome://inspect/` in Chrome.
2. In the `Remote Target` section, you should see the script `node_modules/.bin/jest`. Click the `inspect` link below it.

TODO insert screenshot here

3. Cool! Looks like a debugger! `--inspect-brk` pauses code execution at the first line of the script, so we've stopped at the first line of the jest script file. To get to our debugger line, let's press the play button.

After a little wait, our `spec.js` file will open and you'll see our sum test containing the `debugger` line.

`_index2.default` is still no where in sight, but that's because we're still looking at our code before it was transpiled by babel. We're looking at the "Source Map" of our code—that is, the original code that we wrote—and we can verify this in a couple places:

TODO insert screenshot here

Generally, it's much nicer to look at the Source Map of some code than its transpiled version, which is why Chrome shows it to us. However, we're interested to see whether our transpiled code contains `_index2.default`, so we need to go beyond the source map.

First, let's look in the Scope section of the debugging window. Scope contains all the variables that are accessible where we paused our code with `debugger`, and notably it shows us variables in the *transpiled* code, which is what we want. Taking a look around, we open up "Closure" and—there's `_index2`. Open that up, and we see a `sum` property, but no `default` property.

But where is `_index2` coming from? And where is `_index2.default` being called? Clearly we need to see the actual transpiled code, not just its representation in the debugger. We can access the transpiled files in the Sources file tree, as seen here:

TODO insert screenshot here

We then "pretty-print" the transpiled code to improve its readability...

TODO insert screenshot here

And we see the transpiled code in all its glory:

```
({
    "Object.<anonymous>": function(module, exports, require, __dirname, __filename, global, jest) {
        'use strict';
        var _index = require('./index');
        var _index2 = _interopRequireDefault(_index);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        describe('sum', function() {
            test('correctly adds 1 and 1', function() {
                debugger ;expect((0,
                _index2.default)(1, 1)).toEqual(2);
            });
        });
        //# sourceMappingURL=...
    }
});
```

Without getting too much into the details of babel's output, we can now see that `_index2` refers to an object containing the default import, and that `_index2.default` is used in our test in the place of `sum`.

So wait, what was our original error again?

```
FAIL  ./spec.js
 sum
   ✕ correctly adds 1 and 1 (4ms)

 ● sum › correctly adds 1 and 1

   TypeError: (0 , _index2.default) is not a function

     at Object.<anonymous> (spec.js:5:32)
         at Promise (<anonymous>)
         at <anonymous>
```

`_index2.default` is not a function, which makes sense, since looking at the Scope showed us that `_index2` refers to an object containing a `sum` property and no `default` property. We seem to be accessing the `sum` function in the wrong way, so let's check out how we're importing and exporting the function:

```javascript
// index.js
export const sum = (a, b) => (a + b)

// spec.js
import sum from './index'
```

Aha! We're exporting sum as a named variable and importing it as the default export. To fix this error, we can either change the named export into a default export or change the default import into a named import. Let's do the former:

```javascript
// index.js
export default (a, b) => (a + b)

// spec.js
import sum from './index'
```

Now we run `npm t` once again, and we get...

```
PASS  ./spec.js
 sum
   ✓ correctly adds 1 and 1 (5ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.602s
Ran all test suites.
```

*Passing tests = pure bliss*. Plus, we can feel extra happy, because we debugged the error and understand where it's coming from.

Don't be afraid of your errors! If you see an error, and you think you understand it but you're not sure, then trying to fix it immediately might just confuse you more. It can be better to dig in with your debugger, and hopefully you now have the tools to do so.
