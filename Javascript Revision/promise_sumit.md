# JavaScript Promises

## What is a Promise?

A **Promise** is a JavaScript object that represents the **eventual completion (success)** or **failure** of an asynchronous operation.

Promises make asynchronous code easier to read and maintain than nested callbacks.

**Examples of asynchronous operations:**
- API requests
- Database queries
- Reading files
- Timers (`setTimeout`)
- Image loading

---

# Why Use Promises?

Before Promises, JavaScript relied on callbacks, which often led to **Callback Hell**.

### Callback Example

```javascript
login(function(user) {
    getProfile(user, function(profile) {
        getPosts(profile, function(posts) {
            console.log(posts);
        });
    });
});
```

### Promise Example

```javascript
login()
    .then(getProfile)
    .then(getPosts)
    .then(console.log)
    .catch(console.error);
```

Promises make code:
- More readable
- Easier to debug
- Better for error handling

---

# Promise States

A Promise has **three states**.

## 1. Pending

The initial state.

```javascript
const promise = new Promise(() => {});
```

---

## 2. Fulfilled

The operation completed successfully.

```javascript
resolve("Success");
```

---

## 3. Rejected

The operation failed.

```javascript
reject("Error");
```

---

# Creating a Promise

```javascript
const promise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Data Loaded");
    } else {
        reject("Failed");
    }
});
```

---

# Consuming a Promise

## then()

Runs when the Promise is fulfilled.

```javascript
promise.then(result => {
    console.log(result);
});
```

---

## catch()

Runs when the Promise is rejected.

```javascript
promise
    .then(result => console.log(result))
    .catch(error => console.log(error));
```

---

## finally()

Runs whether the Promise succeeds or fails.

```javascript
promise
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        console.log("Finished");
    });
```

---

# Promise Chaining

Each `.then()` returns a new Promise.

```javascript
Promise.resolve(5)
    .then(num => num * 2)
    .then(num => num + 5)
    .then(console.log);
```

**Output**

```
15
```

---

# Error Handling

Errors automatically move to the nearest `.catch()`.

```javascript
Promise.resolve()
    .then(() => {
        throw new Error("Something went wrong");
    })
    .catch(error => {
        console.log(error.message);
    });
```

---

# Promise Methods

## Promise.resolve()

Returns a resolved Promise.

```javascript
Promise.resolve("Hello")
    .then(console.log);
```

---

## Promise.reject()

Returns a rejected Promise.

```javascript
Promise.reject("Failed")
    .catch(console.error);
```

---

## Promise.all()

Waits for all Promises.

```javascript
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
    .then(console.log);
```

**Output**

```
[1, 2, 3]
```

If one Promise fails, the whole Promise rejects.

---

## Promise.allSettled()

Waits for every Promise.

```javascript
Promise.allSettled([
    Promise.resolve("A"),
    Promise.reject("B")
]).then(console.log);
```

---

## Promise.race()

Returns the first settled Promise.

```javascript
Promise.race([
    fetch(url1),
    fetch(url2)
]).then(console.log);
```

---

## Promise.any()

Returns the first fulfilled Promise.

```javascript
Promise.any([
    Promise.reject("Error"),
    Promise.resolve("Success")
]).then(console.log);
```

---

# async/await

`async/await` is built on top of Promises.

```javascript
async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
}

getData();
```

---

# Handling Errors with async/await

```javascript
async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
```

---

# Event Loop & Promises

Promise callbacks are executed in the **Microtask Queue**.

```javascript
console.log("Start");

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");
```

**Output**

```
Start
End
Promise
```

---

# Promise vs setTimeout

```javascript
console.log(1);

setTimeout(() => console.log(2), 0);

Promise.resolve().then(() => console.log(3));

console.log(4);
```

**Output**

```
1
4
3
2
```

**Reason:**
1. Synchronous code runs first.
2. Promise callbacks (Microtasks).
3. Timers (`setTimeout`) (Macrotasks).

---

# Real-World Example

```javascript
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

---

# Delay Function

```javascript
function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

delay(2000).then(() => {
    console.log("2 seconds completed");
});
```

---

# Callback vs Promise

## Callback

```javascript
loadData(function(data) {
    console.log(data);
});
```

## Promise

```javascript
loadData()
    .then(console.log)
    .catch(console.error);
```

Promises are easier to read and maintain.

---

# Best Practices

- Always handle errors using `.catch()`.
- Return Promises from `.then()`.
- Prefer `async/await` for readability.
- Use `Promise.all()` for parallel tasks.
- Avoid deeply nested `.then()` calls.

---

# Common Mistakes

## Forgetting return

❌ Wrong

```javascript
.then(() => {
    fetch(url);
})
```

✅ Correct

```javascript
.then(() => {
    return fetch(url);
})
```

---

## Missing catch()

❌ Wrong

```javascript
fetch(url)
    .then(console.log);
```

✅ Correct

```javascript
fetch(url)
    .then(console.log)
    .catch(console.error);
```

---

# Interview Questions

### What is a Promise?

A Promise is an object representing the eventual completion or failure of an asynchronous operation.

### What are the three Promise states?

- Pending
- Fulfilled
- Rejected

### Can a Promise change its state twice?

No. Once settled, its state is permanent.

### Difference between Promise.all() and Promise.allSettled()

| Promise.all() | Promise.allSettled() |
|---------------|----------------------|
| Rejects if one Promise fails | Waits for all Promises |
| Returns fulfilled values | Returns status of each Promise |

### Difference between Promise.race() and Promise.any()

| Promise.race() | Promise.any() |
|----------------|---------------|
| First settled Promise | First fulfilled Promise |

---

# Summary

- Promise represents an asynchronous operation.
- Three states: Pending, Fulfilled, Rejected.
- `.then()` handles success.
- `.catch()` handles errors.
- `.finally()` always runs.
- `Promise.all()` waits for all Promises.
- `Promise.race()` returns the first settled Promise.
- `Promise.any()` returns the first successful Promise.
- `Promise.allSettled()` waits for every Promise.
- `async/await` provides cleaner asynchronous code.
- Promise callbacks run in the **Microtask Queue**.

---

# Quick Cheat Sheet

| Method | Purpose |
|---------|---------|
| `new Promise()` | Create a Promise |
| `.then()` | Handle success |
| `.catch()` | Handle errors |
| `.finally()` | Always execute |
| `Promise.resolve()` | Create resolved Promise |
| `Promise.reject()` | Create rejected Promise |
| `Promise.all()` | Wait for all Promises |
| `Promise.allSettled()` | Wait for all results |
| `Promise.race()` | First settled Promise |
| `Promise.any()` | First fulfilled Promise |
| `async` | Declare async function |
| `await` | Wait for a Promise |