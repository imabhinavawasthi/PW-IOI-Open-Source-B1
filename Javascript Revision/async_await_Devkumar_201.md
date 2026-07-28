# JavaScript Async/Await

## Introduction

Async/Await is a modern JavaScript feature introduced in ES8 (ES2017) that makes asynchronous code easier to write and understand. It is built on top of Promises and allows asynchronous code to look like synchronous code.

---

# What is Asynchronous Programming?

Asynchronous programming allows JavaScript to perform time-consuming tasks such as fetching data from an API, reading files, or waiting for a timer without blocking the execution of other code.

Example:

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Task Completed");
}, 2000);

console.log("End");
```

**Output:**

```
Start
End
Task Completed
```

---

# What is `async`?

The `async` keyword is used before a function to make it asynchronous. An async function always returns a Promise.

### Syntax

```javascript
async function greet() {
    return "Hello Dev!";
}
```

### Example

```javascript
async function greet() {
    return "Welcome to JavaScript";
}

greet().then(result => console.log(result));
```

**Output**

```
Welcome to JavaScript
```

---

# What is `await`?

The `await` keyword pauses the execution of an async function until a Promise is resolved.

**Note:** `await` can only be used inside an `async` function.

### Example

```javascript
function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data Loaded Successfully");
        }, 2000);
    });
}

async function getData() {
    const result = await fetchData();
    console.log(result);
}

getData();
```

**Output (after 2 seconds)**

```
Data Loaded Successfully
```

---

# Async/Await with Fetch API

```javascript
async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    console.log(data);
}

getUsers();
```

This example fetches user data from an API and converts the response into JSON.

---

# Error Handling using try...catch

Errors can be handled easily using `try...catch`.

```javascript
async function getData() {
    try {
        const response = await fetch("https://wrong-url.com");
        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

getData();
```

---

# Advantages of Async/Await

- Easy to read and understand.
- Makes asynchronous code look like synchronous code.
- Reduces callback nesting.
- Simplifies Promise handling.
- Better error handling using `try...catch`.
- Improves code maintainability.

---

# Difference Between Promise and Async/Await

| Promise | Async/Await |
|---------|-------------|
| Uses `.then()` and `.catch()` | Uses `async` and `await` |
| Slightly harder to read | Easier to read and write |
| More chaining | Cleaner syntax |
| Error handled with `.catch()` | Error handled with `try...catch` |

---

# When to Use Async/Await

Use Async/Await when:

- Fetching data from APIs.
- Reading files asynchronously.
- Waiting for database operations.
- Performing network requests.
- Handling multiple asynchronous tasks.

---

# Conclusion

Async/Await is one of the most useful features of modern JavaScript. It simplifies asynchronous programming by making the code cleaner, easier to read, and easier to maintain. It is widely used in web development, especially when working with APIs and asynchronous operations.