---
title: Run a function only once using closure
meta:
  title: Run a function only once using closure
  description: Let's write a function that remembers its invocation history
date: 09-05-2023
---

Let's have a look at the below code snippet and see what's going on

```js
const printToConsole = (function IIFE() {
  let count = 0;
  return function track() {
    if (count <= 0) {
      console.log("Hello World");
      count++;
    } else {
      console.log("Goodbye World");
    }
  };
})();

printToConsole(); // "Hello World"

printToConsole(); // "Goodbye World"
```

- We define a function `printToConsole` which has an IFFE (Immediately invoked function definition) assigned to it.
- Inside the IFFE we have our private variable count which we set to 0.
- Then we return a `track` function which prints the console logs.

The `printToConsole` function evaluates to this 'track' function which has closure over the count variable.

Closure is the ability to remember the state of a function even when the function (`printToConsole`) is done running.
Without closure the count variable would have been gone and we would get an error.
