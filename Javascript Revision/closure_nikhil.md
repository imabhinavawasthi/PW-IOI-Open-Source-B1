# Closures in JavaScript

## What is a Closure?
A closure is a function that remembers and can access variables from its outer (parent) function even after that outer function has finished executing.

In simple words, a closure gives a function access to its lexical environment.

## Why are Closures Useful?
Closures are used for:
- data hiding
- creating private variables
- maintaining state between function calls
- callbacks and event handlers

## Basic Example
```javascript
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const increment = outer();
increment(); // 1
increment(); // 2
increment(); // 3
```

### Explanation
- The inner function is returned from outer.
- Even after outer finishes running, inner still remembers the value of count.
- This happens because of closure.

## Important Concept: Lexical Scope
JavaScript uses lexical scoping, which means a function can access variables from the environment where it was created.

```javascript
function greet() {
  let message = "Hello";

  function sayHello() {
    console.log(message);
  }

  return sayHello;
}

const result = greet();
result(); // Hello
```

## Real-Life Analogy
Think of a closure like a backpack that carries some information with it. Even when the original room is closed, the backpack still keeps the needed data.

## Common Use Cases
### 1. Private Variables
```javascript
function counter() {
  let count = 0;

  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    }
  };
}

const c = counter();
console.log(c.increment()); // 1
console.log(c.increment()); // 2
```

### 2. Event Handlers
```javascript
function attachButton() {
  let clicks = 0;

  document.getElementById("btn").addEventListener("click", function () {
    clicks++;
    console.log("Clicked " + clicks + " times");
  });
}
```

## Key Points to Remember
- A closure is created when a function is defined inside another function.
- The inner function remembers variables from the outer function.
- Closures help preserve state.
- Every time the outer function runs, a new closure is created.

## Interview-Style Summary
A closure in JavaScript is a function bundled together with references to its surrounding state. It allows the function to access variables from its parent scope even after the parent function has exited.

## Short Quiz
1. What is a closure?
2. Why does the inner function remember outer variables?
3. Name one real-world use of closures.

## Conclusion
Closures are one of the most important concepts in JavaScript. They help in writing cleaner code, preserving data, and creating functions with memory of previous states.
