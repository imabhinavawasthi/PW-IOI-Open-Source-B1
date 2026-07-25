# The `async` Keyword in JavaScript

The `async` keyword is placed before a function to make it **asynchronous**. Its primary job is to guarantee that the function **always returns a Promise**.

Even if you return a plain string, number, or object, JavaScript automatically wraps that value inside a **resolved Promise**.

---

## Core Mechanics

- **Automatic Promise Wrapping:** Any value returned by an `async` function is automatically wrapped inside a `Promise`.
- **Unlocks `await`:** The `await` keyword can only be used inside an `async` function.

---

## 1. Automatic Promise Wrapping

Without `async`, a function returns a normal value.

With `async`, the same value is wrapped inside a `Promise`.

```javascript
// Standard Function
function regularFunction() {
  return "Hello!";
}

console.log(regularFunction());
// Output: "Hello!"
```

```javascript
// Asynchronous Function
async function asyncFunction() {
  return "Hello!";
}

console.log(asyncFunction());
// Output: Promise { <fulfilled>: "Hello!" }
```

To access the returned value, consume the Promise using `.then()`:

```javascript
asyncFunction().then(message => console.log(message));

// Output:
// Hello!
```

---

## 2. `async` Enables `await`

The `async` keyword tells the JavaScript engine that the function may pause execution using `await`.

```javascript
async function fetchUserData() {
  // Wait until the network request completes
  const response = await fetch("https://example.com");

  // Wait until the JSON is parsed
  const data = await response.json();

  // Returned value is automatically wrapped in a Promise
  return data;
}
```

### Flow

1. Function starts executing.
2. `await fetch(...)` pauses execution until the request completes.
3. `await response.json()` pauses again until JSON parsing finishes.
4. The function returns `data`, which is automatically wrapped in a Promise.

---

## 3. `async` with Arrow Functions

The `async` keyword works with arrow functions as well.

```javascript
const getScoreAsync = async () => {
  return 100;
};

getScoreAsync().then(score => console.log(score));

// Output:
// 100
```

---

# Key Points

- `async` makes a function return a **Promise**.
- Returned values are **automatically wrapped** in a resolved Promise.
- `await` can only be used inside an `async` function.
- `async` works with:
  - Function declarations
  - Function expressions
  - Arrow functions

---

# Summary

| Feature | Description |
|---------|-------------|
| `async` | Makes a function asynchronous |
| Return Value | Always returns a `Promise` |
| `await` | Can only be used inside an `async` function |
| Automatic Wrapping | Normal return values become resolved Promises |
| Compatible With | Regular functions, function expressions, and arrow functions |