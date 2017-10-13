---
slug: lets-define-undefined
title: Let's Define "undefined"
date: '2017-10-13T12:00:00.000Z'
draft: true
---

Did you know that there's a difference in JavaScript between object properties that have not been defined, and object properties that are defined as undefined?

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

```
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

If you answered yes to either of the above questions, then... surprise! Nothing is logged for `obj1`, but a line *is* logged for `obj2`:

```
obj2.my_prop: undefined
```

So why does this happen? When you set a property on an object, JavaScript sees that property as an *enumerable* property, which means that it can be looped through by a `for...in` loop. We can check this with the following code:

```
const obj1 = {}
console.log(obj1.propertyIsEnumerable('my_prop'))
// => false

const obj2 = {}
obj2.my_prop = undefined

console.log(obj2.propertyIsEnumerable('my_prop'))
// => true
```

## When this might matter

If you don't know about this behavior, it probably won't cause you too many problems. On *most* days, anyway. I didn't know about this until recently, when I encountered a bug in which my [firebase](https://firebase.google.com/) validations were failing.

My database has a `recordings` entity, and each `recording` can have a `year` field, which is not required but must be an integer if it's there. It turned out that I was destructuring a `year` value from an object representing my form's input values, and then including it in the object I was sending to firebase.

```
// pseudocode
const {year} = formValues
const recordingId = ...
updateFirebaseRecording(recordingId, {year})
```

When the year input was blank, the destructured `year` variable was set to `undefined`, and so Firebase included `year: undefined` in the data it sent to the server. Thus causing my validation to fail.
