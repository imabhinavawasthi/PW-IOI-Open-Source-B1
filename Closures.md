# What is a Closure?

A **Closure** is a feature in JavaScript where an **inner function remembers and can access the variables of its outer function**, even after the outer function has finished executing.

In simple words:

> **A closure allows a function to "remember" the environment in which it was created.**

---

# Why Do We Need Closures?

Closures are useful because they allow us to:

- Store private data
- Remember values after a function finishes
- Avoid using global variables
- Create reusable functions
- Maintain state between function calls

---

# How Closure Works

When a function is created inside another function:

1. The inner function gets access to the outer function's variables.
2. Even if the outer function finishes execution,
3. The inner function still remembers those variables.

This remembered memory is called a **Closure**.

---

# Syntax

```javascript
function outer() {
  let variable = "Hello";

  function inner() {
    console.log(variable);
  }

  return inner;
}
```

---

# Example 1

```javascript
function outer() {
  let message = "Hello JavaScript";

  function inner() {
    console.log(message);
  }

  return inner;
}

const myFunction = outer();

myFunction();
```

### Output

```
Hello JavaScript
```

### Explanation

- `outer()` creates the variable `message`.
- `inner()` uses that variable.
- `outer()` finishes execution.
- Still, `inner()` remembers `message`.
- This is called a **Closure**.

---

# Example 2 (Counter)

```javascript
function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const increment = counter();

increment();
increment();
increment();
```

### Output

```
1
2
3
```

### Explanation

Even though `counter()` has already finished, the returned function remembers the value of `count`.

---

# Real-Life Example

Imagine a locker.

- The locker is locked.
- Only the person who has the key can access it.
- No one else can change what's inside.

Similarly:

- Outer function variables are like items inside the locker.
- Inner function is the person with the key.
- Only the inner function can access those variables.

This is how Closures provide **data privacy**.

---

# Advantages of Closures

- Data hiding (Private variables)
- Encapsulation
- Avoid global variables
- Maintain state
- Function factories
- Better memory management in many cases
- Used in callbacks and event handlers

---

# Disadvantages of Closures

- Can consume extra memory
- Incorrect use may cause memory leaks
- Harder to debug for beginners
- Too many nested closures can reduce readability

---

# Common Use Cases

- Private variables
- Counters
- Timers (`setTimeout`, `setInterval`)
- Event listeners
- Callbacks
- Function factories
- React Hooks
- Memoization

---

# Interview Questions

### Q1. What is a Closure?

A Closure is a function that remembers the variables of its outer function even after the outer function has completed execution.

---

### Q2. Why are Closures used?

Closures are used for:

- Data privacy
- Maintaining state
- Avoiding global variables
- Function factories
- Callbacks

---

### Q3. Can a Closure access global variables?

Yes.

A Closure can access:

- Its own variables
- Outer function variables
- Global variables

---

### Q4. Is every inner function a Closure?

No.

An inner function becomes a Closure only if it **uses variables from its outer function**.

---

# Key Points to Remember

- Closure = Function + Lexical Environment
- Inner function remembers outer variables.
- Variables stay alive as long as the closure exists.
- Mostly used for data privacy and maintaining state.

---

# Summary

A **Closure** is one of the most powerful features of JavaScript. It allows an inner function to access and remember variables from its outer function even after the outer function has finished executing. Closures are widely used for private variables, counters, callbacks, event handling, and many real-world JavaScript applications.