---
slug: let's-define-undefined
title: Let's Define "undefined"
date: '2017-10-13T12:00:00.000Z'
---

The nature of `undefined` in JavaScript can be a bit confusing at times. In this blog post, I'm going to explore `undefined` in the context of Arrays and Objects, in order to cast a bit of light on how it works.

## `undefined` in Objects

Did you know that there's a difference in JavaScript between object properties that have not been defined, and object properties that are defined as `undefined`?

I'll explain what I mean. Take a look at the code below and see if you can figure out what it logs to the console:

```javascript
const obj1 = {}
console.log('obj1.my_prop:', obj1.my_prop)

const obj2 = {}
obj2.my_prop = undefined
console.log('obj2.my_prop:', obj2.my_prop)
```

Here's the answer:

```
obj1.my_prop: undefined
obj2.my_prop: undefined
```

Now read the below code. Does it log the same thing as above? Or perhaps nothing it all?

```javascript
const obj1 = {}

for (key in obj1) {
  console.log('obj1.' + key + ':', obj1[key])
}

const obj2 = {}
obj2.my_prop = undefined

for (key in obj2) {
  console.log('obj2.' + key + ':', obj2[key])
}
```

If you answered yes to either of the above questions, then... surprise! Nothing is logged for `obj1`, but a line *is* logged for `obj2`: `obj2.my_prop: undefined`

Why does this happen? When you set a property on an object, JavaScript sees that property as an *enumerable* property, which means that it can be looped through by a `for...in` loop. We can check this with the following code:

```javascript
const obj1 = {}
console.log(obj1.propertyIsEnumerable('my_prop'))
// => false

const obj2 = {}
obj2.my_prop = undefined

console.log(obj2.propertyIsEnumerable('my_prop'))
// => true
```

We can also see the enumerable properties of an object by logging the object itself:

```javascript
// below logs are shown as output by node

const obj1 = {}
console.log(obj1)
// {}

const obj2 = {}
obj2.my_prop = undefined
console.log(obj2)
// { my_prop: undefined }
```

## `undefined` in Arrays

Working with `undefined` in Arrays is similarly tricky. Let's start out with something easy. What does this log to the console?

```javascript
const arr1 = new Array(2)
arr1[1] = undefined

console.log(arr1[0])
console.log(arr1[1])
console.log(arr1[2])
```

This script logs `undefined` three times. In all three cases—not initialized, initialized as `undefined`, and out of range—accessing the array bucket value returns `undefined`.

What if we call `forEach` on the below arrays and log their contents? Can you figure out what this script will log?

```javascript
const arr1 = new Array(3)

arr1.forEach((val, i) => {
  console.log(`arr1 ${i}. ${val}`)
})

const arr2 = new Array(3)
arr2[1] = undefined

arr2.forEach((val, i) => {
  console.log(`arr2 ${i}. ${val}`)
})
```

This time, only a single line is logged: `arr2 1. undefined`

The reason for this behavior is that `forEach` ignores uninitialized values; this goes for other methods that iterate through an array as well, like `map` and `reduce`. However, these methods work for values that have been *initialized as undefined*, so our `arr2[1]` value does end up getting logged.

Another way to see this behavior is to log both arrays to the console:

```javascript
// below logs are shown as output by node

const arr1 = new Array(3)
console.log(arr1)
// [ <3 empty items> ]

const arr2 = new Array(3)
arr2[1] = undefined
console.log(arr2)
// [ <1 empty item>, undefined, <1 empty item> ]
```

As you can see, JavaScript distinguishes between "empty" array buckets and "undefined" array buckets, even though accessing an "empty" array bucket will return `undefined`. Craziness!

Finally, let's look at a way to create an Array that is filled with `undefined`, so that you can `map` over it, for example. Credit goes to [Brandon Benvie](https://mail.mozilla.org/pipermail/es-discuss/2012-April/022273.html) for this one.

```javascript
const arr = Array.apply(null, Array(3))

arr.forEach((val, i) => {
  console.log(`arr ${i}. ${val}`)
})
```

`Array.apply` will fill any empty buckets in the array passed as the second argument with `undefined`. The above code will log:

```
arr 0. undefined
arr 1. undefined
arr 2. undefined
```

Fun side note: It doesn't actually matter what you use as the first argument of `Array.apply`. You can replace `null` with `0`, `'hi'`, or `undefined`, and it will still return the same value.

## When these details might matter

If you don't know the specifics about how `undefined` works, it probably won't cause you too many problems. On *most* days, anyway. I didn't know about this stuff until recently, until I had to debug some failing [firebase](https://firebase.google.com/) validations.

Here's what happened. My database has a `recordings` entity, and each `recording` can have a `year` field, which is not required but must be an integer if it's there. It turned out that I was destructuring a `year` value from an object representing my form's input values, and then including it in the object I was sending to firebase.

```javascript
// pseudocode
const {year} = formValues
// ...other code
updateFirebaseRecording(recordingId, {year})
```

Can you see the problem there? When the year input was blank, the destructured `year` variable was set to `undefined`. By creating a new object with the `{year}` syntax, I was sending an object to Firebase which included `year: undefined`. Thus causing my validation to fail.

```javascript
// it turns out that this code...
const {year} = formValues
updateFirebaseRecording(recordingId, {year})

// is not the same as this:
updateFirebaseRecording(recordingId, formValues)
```

This kind of situation is what makes it worthwhile to learn the details of JavaScript.
