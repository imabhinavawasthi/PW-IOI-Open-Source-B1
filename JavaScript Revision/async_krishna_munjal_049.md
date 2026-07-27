# Asynchronous JavaScript

## Overview
Asynchronous JavaScript allows code to run without blocking the execution of other tasks. Instead of waiting for a time-consuming operation (such as fetching data from a server, reading a file, or waiting for user input), JavaScript continues executing the remaining code and handles the result later.

## Why Asynchronous JavaScript?
- Improves application responsiveness.
- Prevents the browser from freezing during long operations.
- Enables efficient handling of network requests and timers.

## Common Asynchronous Techniques

### 1. Callbacks
A callback is a function passed as an argument to another function and executed after a task completes.

```javascript
setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);
```

### 2. Promises
A Promise represents the eventual completion (or failure) of an asynchronous operation.

```javascript
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### 3. Async/Await
`async` and `await` provide a cleaner and more readable way to work with Promises.

```javascript
async function getData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

## Event Loop
JavaScript is single-threaded, but asynchronous behavior is made possible by the **Event Loop**, which continuously checks the Call Stack and Callback Queue to execute pending tasks when the stack is empty.

## Advantages
- Non-blocking execution
- Better user experience
- Efficient handling of API calls and timers
- Cleaner code with `async/await`

## Summary
Asynchronous JavaScript enables applications to perform multiple tasks efficiently without blocking execution. It is commonly implemented using **callbacks**, **Promises**, and **async/await**, with the **Event Loop** coordinating asynchronous operations.