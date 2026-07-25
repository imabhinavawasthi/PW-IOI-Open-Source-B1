# JavaScript Promises

## What is a Promise?

A Promise is a JavaScript object that represents the eventual completion (success) or failure of an asynchronous operation and its resulting value.

Instead of waiting for a task to finish, JavaScript continues executing other code. Once the asynchronous task is complete, the Promise either resolves with a value or rejects with an error.

---

## Why Do We Need Promises?

Promises help us:

- Handle asynchronous operations efficiently.
- Avoid deeply nested callbacks (Callback Hell).
- Write cleaner and more readable code.
- Improve error handling using `.catch()`.
- Chain multiple asynchronous operations using `.then()`.

---

## Promise States

A Promise has three possible states:

### 1. Pending
- Initial state.
- The operation is still in progress.

### 2. Fulfilled (Resolved)
- The operation completed successfully.
- The Promise returns a value.

### 3. Rejected
- The operation failed.
- The Promise returns an error.

---

## Syntax

```javascript
const promise = new Promise((resolve, reject) => {
    // asynchronous task

    if (success) {
        resolve("Operation Successful");
    } else {
        reject("Operation Failed");
    }
});
```

---

## Consuming a Promise

```javascript
promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
```

---

## Promise Methods

### then()

Used to execute code when the Promise is fulfilled.

```javascript
promise.then((result) => {
    console.log(result);
});
```

---

### catch()

Used to handle errors when the Promise is rejected.

```javascript
promise.catch((error) => {
    console.log(error);
});
```

---

### finally()

Executes after the Promise is settled, whether fulfilled or rejected.

```javascript
promise.finally(() => {
    console.log("Execution Completed");
});
```

---

## Promise Chaining

Promises can be chained using multiple `.then()` methods.

```javascript
fetchData()
    .then(result => process(result))
    .then(data => display(data))
    .catch(error => console.log(error));
```

---

## Advantages of Promises

- Better readability.
- Easier error handling.
- Avoid Callback Hell.
- Supports chaining.
- Makes asynchronous code easier to maintain.

---

## Real-Life Example

Imagine ordering food online.

- You place an order → Pending
- Food is delivered → Fulfilled
- Restaurant cancels the order → Rejected

This is exactly how a Promise works in JavaScript.

---

## Summary

A Promise is an object that represents the future result of an asynchronous operation. It can be Pending, Fulfilled, or Rejected. Promises make asynchronous JavaScript code cleaner, easier to read, and easier to maintain by using `.then()`, `.catch()`, and `.finally()`.