# Closures in JavaScript

## What is a Closure?

A closure is a function that remembers the variables from its outer scope even after the outer function has finished executing.

## Why are Closures Used?

- Data hiding
- Maintaining state
- Callbacks
- Event handlers

## Syntax

```javascript
function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

const counter = outer();
counter(); // 1
counter(); // 2
```

## Advantages

- Provides data privacy.
- Helps maintain state.
- Makes code more modular and reusable.

## Disadvantages

- Uses additional memory.
- Can lead to memory leaks if not handled properly.

## Conclusion

Closures are one of the most powerful features of JavaScript. They allow a function to access variables from its outer scope even after the outer function has finished execution.