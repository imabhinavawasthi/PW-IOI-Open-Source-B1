# JavaScript Promises

## What is a Promise?

A **Promise** is a JavaScript object that represents the **eventual completion (success)** or **failure** of an asynchronous operation and its resulting value.

Think of it as a **placeholder for a value that will be available in the future**.

### Real-Life Example

Imagine you order food online.

- **Pending** → Your order is being prepared.
- **Fulfilled** → Your food has been delivered.
- **Rejected** → The restaurant cancels your order.

A Promise works exactly like this.

---

# Why Do We Need Promises?

Before Promises, developers used **callbacks**, which often led to **Callback Hell**.

### Callback Example

```javascript
getUser(function(user) {
    getOrders(user, function(orders) {
        getPayment(orders, function(payment) {
            console.log(payment);
        });
    });
});
```

Problems:

- Hard to read
- Difficult to debug
- Deep nesting
- Poor error handling

Promises solve these problems.

---

# Promise Syntax

```javascript
const promise = new Promise((resolve, reject) => {

});
```

The Promise constructor accepts a function with two parameters:

- `resolve()` → Called when the operation succeeds.
- `reject()` → Called when the operation fails.

---

# Promise States

Every Promise has one of three states.

## 1. Pending

The operation is still running.

```
Pending
```

---

## 2. Fulfilled

The operation completed successfully.

```
Pending → Fulfilled
```

---

## 3. Rejected

The operation failed.

```
Pending → Rejected
```

---

# Creating a Promise

```javascript
const promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Operation Successful");
    } else {
        reject("Something went wrong");
    }
});
```

---

# Consuming a Promise

Use `.then()` and `.catch()`.

```javascript
promise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });
```

Output:

```
Operation Successful
```

---

# Example 1 – Simple Promise

```javascript
const myPromise = new Promise((resolve, reject) => {
    resolve("Hello World");
});

myPromise.then(data => {
    console.log(data);
});
```

Output

```
Hello World
```

---

# Example 2 – Rejecting a Promise

```javascript
const promise = new Promise((resolve, reject) => {
    reject("Network Error");
});

promise
    .then(data => console.log(data))
    .catch(error => console.log(error));
```

Output

```
Network Error
```

---

# Understanding resolve()

```javascript
resolve(value);
```

It changes the Promise state to **Fulfilled**.

Example

```javascript
resolve("Login Successful");
```

---

# Understanding reject()

```javascript
reject(reason);
```

It changes the Promise state to **Rejected**.

Example

```javascript
reject("Invalid Password");
```

---

# Promise Chaining

Multiple `.then()` methods can be chained together.

```javascript
new Promise(resolve => {
    resolve(10);
})
.then(num => {
    return num * 2;
})
.then(num => {
    return num + 5;
})
.then(result => {
    console.log(result);
});
```

Output

```
25
```

---

# Why Promise Chaining?

Instead of nesting callbacks:

```javascript
doSomething(function() {
    doSomethingElse(function() {
        anotherTask(function() {

        });
    });
});
```

We write

```javascript
doSomething()
.then(doSomethingElse)
.then(anotherTask)
.catch(handleError);
```

Much cleaner.

---

# Error Handling

```javascript
fetchData()
.then(data => process(data))
.then(result => save(result))
.catch(error => {
    console.log(error);
});
```

Any error in the chain goes directly to `.catch()`.

---

# finally()

Runs whether the Promise succeeds or fails.

```javascript
promise
.then(result => console.log(result))
.catch(error => console.log(error))
.finally(() => {
    console.log("Completed");
});
```

Output

```
Completed
```

---

# Promise Methods

## Promise.resolve()

Creates a resolved Promise.

```javascript
Promise.resolve("Success")
.then(console.log);
```

Output

```
Success
```

---

## Promise.reject()

Creates a rejected Promise.

```javascript
Promise.reject("Failed")
.catch(console.log);
```

Output

```
Failed
```

---

# Promise.all()

Waits for **all Promises** to finish.

```javascript
const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(30);

Promise.all([p1, p2, p3])
.then(result => {
    console.log(result);
});
```

Output

```
[10, 20, 30]
```

If **one Promise fails**, the whole Promise fails.

---

# Promise.race()

Returns the first Promise that settles.

```javascript
const p1 = new Promise(resolve => setTimeout(() => resolve("First"), 1000));
const p2 = new Promise(resolve => setTimeout(() => resolve("Second"), 2000));

Promise.race([p1, p2])
.then(console.log);
```

Output

```
First
```

---

# Promise.any()

Returns the **first fulfilled Promise**.

```javascript
Promise.any([
    Promise.reject("Error"),
    Promise.resolve("Success")
])
.then(console.log);
```

Output

```
Success
```

---

# Promise.allSettled()

Waits for every Promise to complete.

```javascript
Promise.allSettled([
    Promise.resolve("Done"),
    Promise.reject("Failed")
])
.then(console.log);
```

Output

```javascript
[
  { status: "fulfilled", value: "Done" },
  { status: "rejected", reason: "Failed" }
]
```

---

# Promises with setTimeout()

```javascript
const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve("Finished after 2 seconds");
    }, 2000);
});

promise.then(console.log);
```

Output (after 2 seconds)

```
Finished after 2 seconds
```

---

# Promises with fetch()

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log(error);
});
```

---

# Async/Await

Promises become easier with `async/await`.

Without async/await

```javascript
fetchData()
.then(data => {
    console.log(data);
})
.catch(console.error);
```

With async/await

```javascript
async function getData() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
```

---

# Advantages of Promises

- Avoid Callback Hell
- Better error handling
- Cleaner code
- Easy chaining
- Works well with async/await
- Improves readability
- Widely used in APIs and libraries

---

# Disadvantages

- Can still become complex with long chains
- Beginners may find asynchronous code confusing
- Understanding the event loop is important

---

# Common Interview Questions

### 1. What is a Promise?

A Promise is an object representing the eventual success or failure of an asynchronous operation.

---

### 2. What are the three states of a Promise?

- Pending
- Fulfilled
- Rejected

---

### 3. Difference between `.then()` and `.catch()`?

- `.then()` handles successful results.
- `.catch()` handles errors or rejected Promises.

---

### 4. What does `.finally()` do?

It executes code regardless of whether the Promise is fulfilled or rejected.

---

### 5. Difference between Promise.all() and Promise.race()?

| Promise.all() | Promise.race() |
|---------------|----------------|
| Waits for all Promises | Returns the first settled Promise |
| Fails if one Promise fails | Doesn't wait for the others |

---

### 6. Difference between Promise.any() and Promise.race()?

- `Promise.any()` returns the **first fulfilled** Promise and ignores rejected ones unless all reject.
- `Promise.race()` returns the **first settled** Promise, whether it is fulfilled or rejected.

---

### 7. Why are Promises better than callbacks?

- Avoid Callback Hell
- Better readability
- Easier error handling
- Supports chaining
- Integrates seamlessly with async/await

---

# Mini Project

## Random Joke Generator

### Objective

Fetch a random joke from a public API using Promises.

### Requirements

- Add a **"Get Joke"** button.
- Fetch a random joke using `fetch()`.
- Display the joke on the page.
- Show a loading message while fetching.
- Handle API errors gracefully.

### Concepts Practised

- Promise
- fetch()
- .then()
- .catch()
- DOM Manipulation
- API Calls

---

# Assignment

## Beginner

1. Create a Promise that resolves after 3 seconds.
2. Create a Promise that rejects with an error message.
3. Chain three `.then()` methods to transform a number.
4. Use `.finally()` to print `"Task Finished"`.

## Intermediate

1. Fetch user data from `https://jsonplaceholder.typicode.com/users`.
2. Display only the user names.
3. Handle network errors using `.catch()`.

## Advanced

Build a **Weather App** using `fetch()` and Promises that:
- Accepts a city name.
- Retrieves weather data from an API.
- Displays temperature, humidity, and weather conditions.
- Shows an error message if the city is invalid.

---

# Summary

- A Promise represents the future result of an asynchronous operation.
- Promises have three states: **Pending**, **Fulfilled**, and **Rejected**.
- Use `.then()` for success, `.catch()` for errors, and `.finally()` for cleanup.
- Promise utilities such as `Promise.all()`, `Promise.race()`, `Promise.any()`, and `Promise.allSettled()` help coordinate multiple asynchronous operations.
- `async/await` provides a cleaner syntax for working with Promises while using the same underlying mechanism.