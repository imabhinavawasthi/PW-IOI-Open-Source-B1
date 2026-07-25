# JavaScript Promises

## Introduction

JavaScript is **single-threaded**, meaning it executes one operation at a time. However, many tasks such as fetching data from an API, reading files, or waiting for user interactions take time to complete. Instead of blocking the execution of the program, JavaScript performs these operations asynchronously.

A **Promise** is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

Think of a Promise as a placeholder for a value that will be available in the future.

---

## Why Do We Need Promises?

Before Promises were introduced, asynchronous operations were handled using **callbacks**.

### Callback Example

```javascript
fetchUser(function(user) {
    fetchOrders(user.id, function(orders) {
        fetchPayment(orders[0].id, function(payment) {
            console.log(payment);
        });
    });
});
```

This creates deeply nested callbacks, commonly known as **Callback Hell** or the **Pyramid of Doom**.

Problems with callbacks include:

- Difficult to read
- Difficult to maintain
- Hard to handle errors
- Nested and messy code

Promises solve these issues by providing a cleaner and more structured approach.

---

# What is a Promise?

A Promise is an object that represents the future result of an asynchronous operation.

It can be in one of three states:

```
Pending
   |
   +-------> Fulfilled (Resolved)
   |
   +-------> Rejected
```

### Pending

The operation has started but has not completed yet.

### Fulfilled (Resolved)

The operation completed successfully.

### Rejected

The operation failed due to some error.

Once a Promise is either fulfilled or rejected, its state becomes **immutable** and cannot change again.

---

# Creating a Promise

A Promise is created using the `Promise` constructor.

```javascript
const promise = new Promise((resolve, reject) => {

});
```

The constructor receives a function called the **executor function**, which has two parameters:

- `resolve`
- `reject`

- `resolve()` is called when the operation succeeds.
- `reject()` is called when the operation fails.

---

## Example

```javascript
const promise = new Promise((resolve, reject) => {

    const success = true;

    if (success) {
        resolve("Data fetched successfully");
    } else {
        reject("Something went wrong");
    }

});
```

---

# Consuming a Promise

A Promise can be consumed using:

- `.then()`
- `.catch()`
- `.finally()`

---

## then()

Executed when the Promise is resolved.

```javascript
promise.then((result) => {
    console.log(result);
});
```

Output

```
Data fetched successfully
```

---

## catch()

Executed if the Promise is rejected.

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

## finally()

Executed regardless of whether the Promise succeeds or fails.

```javascript
promise
    .finally(() => {
        console.log("Request completed");
    });
```

---

# Complete Example

```javascript
const promise = new Promise((resolve, reject) => {

    const age = 20;

    if (age >= 18)
        resolve("Eligible");
    else
        reject("Not Eligible");

});

promise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Verification Completed");
    });
```

Output

```
Eligible
Verification Completed
```

---

# Promise Chaining

One of the biggest advantages of Promises is chaining.

Instead of nesting callbacks, multiple asynchronous operations can be written sequentially.

```javascript
fetchUser()
    .then(user => fetchOrders(user.id))
    .then(orders => fetchPayment(orders[0].id))
    .then(payment => console.log(payment))
    .catch(error => console.log(error));
```

Each `.then()` returns a new Promise, allowing continuous chaining.

---

# Returning Values from then()

If a value is returned inside `.then()`, it is passed to the next `.then()`.

```javascript
Promise.resolve(5)
    .then(num => {
        return num * 2;
    })
    .then(result => {
        console.log(result);
    });
```

Output

```
10
```

---

# Returning Another Promise

A `.then()` can also return another Promise.

```javascript
Promise.resolve(10)
    .then(num => {

        return new Promise((resolve) => {
            resolve(num + 5);
        });

    })
    .then(result => {
        console.log(result);
    });
```

Output

```
15
```

JavaScript automatically waits for the returned Promise before executing the next `.then()`.

---

# Error Handling

Errors can occur in multiple ways.

## Explicit Rejection

```javascript
const promise = Promise.reject("Network Error");

promise.catch(error => {
    console.log(error);
});
```

---

## Throwing Errors

```javascript
Promise.resolve()
    .then(() => {
        throw new Error("Something went wrong");
    })
    .catch(error => {
        console.log(error.message);
    });
```

Output

```
Something went wrong
```

Any error thrown inside a `.then()` is automatically forwarded to the nearest `.catch()`.

---

# Promise.resolve()

Creates an already resolved Promise.

```javascript
const promise = Promise.resolve("Hello");

promise.then(console.log);
```

Output

```
Hello
```

---

# Promise.reject()

Creates an already rejected Promise.

```javascript
const promise = Promise.reject("Invalid Request");

promise.catch(console.log);
```

Output

```
Invalid Request
```

---

# Promise.all()

Waits for **all Promises** to complete.

If every Promise resolves, an array of results is returned.

If even one Promise rejects, the entire Promise is rejected.

```javascript
Promise.all([
    Promise.resolve(10),
    Promise.resolve(20),
    Promise.resolve(30)
])
.then(result => {
    console.log(result);
});
```

Output

```
[10, 20, 30]
```

---

# Promise.race()

Returns the result of the first Promise that settles (resolved or rejected).

```javascript
Promise.race([
    new Promise(resolve => setTimeout(() => resolve("First"), 1000)),
    new Promise(resolve => setTimeout(() => resolve("Second"), 2000))
])
.then(console.log);
```

Output

```
First
```

---

# Promise.any()

Returns the first Promise that resolves.

Rejected Promises are ignored unless every Promise rejects.

```javascript
Promise.any([
    Promise.reject("Error"),
    Promise.resolve("Success"),
    Promise.resolve("Another Success")
])
.then(console.log);
```

Output

```
Success
```

---

# Promise.allSettled()

Waits until every Promise settles, regardless of success or failure.

```javascript
Promise.allSettled([
    Promise.resolve("A"),
    Promise.reject("B")
])
.then(console.log);
```

Output

```javascript
[
    {
        status: "fulfilled",
        value: "A"
    },
    {
        status: "rejected",
        reason: "B"
    }
]
```

---

# Promises vs Callbacks

| Feature | Callbacks | Promises |
|----------|-----------|-----------|
| Readability | Poor | Excellent |
| Error Handling | Difficult | Easy |
| Chaining | No | Yes |
| Callback Hell | Yes | No |
| Built-in Utilities | No | Yes |

---

# Promises vs async/await

Promises are the foundation of asynchronous programming in JavaScript.

`async/await` is simply a cleaner syntax built on top of Promises.

Promise example:

```javascript
fetchUser()
    .then(user => fetchOrders(user.id))
    .then(console.log)
    .catch(console.error);
```

Using `async/await`:

```javascript
async function getOrders() {
    try {
        const user = await fetchUser();
        const orders = await fetchOrders(user.id);
        console.log(orders);
    } catch (error) {
        console.log(error);
    }
}
```

Internally, `await` still works with Promises.

---

# Best Practices

- Always handle errors using `.catch()` or `try...catch`.
- Return Promises from `.then()` instead of creating nested callbacks.
- Use `Promise.all()` when multiple independent asynchronous operations can run in parallel.
- Prefer `async/await` for improved readability, especially in complex asynchronous workflows.
- Avoid mixing callbacks and Promises within the same codebase whenever possible.

---

# Summary

A Promise is an object that represents the eventual result of an asynchronous operation.

It has three possible states:

- **Pending**
- **Fulfilled**
- **Rejected**

Promises provide a cleaner alternative to callbacks, support chaining, simplify error handling, and form the foundation for modern asynchronous JavaScript using `async/await`.

Mastering Promises is essential before learning advanced topics such as `async/await`, Fetch API, API integrations, and modern frameworks like React and Next.js.