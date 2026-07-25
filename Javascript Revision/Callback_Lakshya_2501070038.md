# Callback Function

## Description

A **callback function** is a function that is passed as an argument to another function, and is executed ("called back") after that outer function has finished its task or reached a specific point in its execution.

In JavaScript, functions are treated as **first-class citizens**, meaning they can be:
- Stored in variables
- Passed as arguments to other functions
- Returned from other functions

This is what makes callback functions possible.

## Why Use Callback Functions?

- **Asynchronous operations**: Handle tasks like reading files, fetching data from an API, or timers, without blocking the rest of the code.
- **Code reusability**: Allow generic functions to be customized with different behavior.
- **Event handling**: Respond to events such as clicks, key presses, or other user interactions.

## Basic Syntax

```javascript
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Alice", sayGoodbye);
```

**Output:**
```
Hello, Alice
Goodbye!
```

Here, `sayGoodbye` is the callback function passed into `greet`.

## Types of Callbacks

### 1. Synchronous Callback
Executed immediately, as part of the function's normal flow.

```javascript
function processArray(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

processArray([1, 2, 3], (item) => console.log(item * 2));
```

### 2. Asynchronous Callback
Executed later, after some operation (like a timer or network request) completes.

```javascript
console.log("Start");

setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

console.log("End");
```

**Output:**
```
Start
End
This runs after 2 seconds
```

## Real-World Example: Fetching Data

```javascript
function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: "Sample Data" };
    callback(data);
  }, 1000);
}

fetchData((result) => {
  console.log("Data received:", result);
});
```

## Common Use Cases

| Use Case              | Example                              |
|------------------------|---------------------------------------|
| Event Listeners        | `button.addEventListener("click", callback)` |
| Array Methods          | `array.map(callback)`, `array.forEach(callback)` |
| Timers                 | `setTimeout(callback, delay)`        |
| API Requests           | `fetch(url).then(callback)`          |
| Node.js File System    | `fs.readFile(path, callback)`        |

## Callback Hell

When multiple callbacks are nested inside each other, code can become difficult to read and maintain. This is known as **"callback hell"**.

```javascript
doTask1(function(result1) {
  doTask2(result1, function(result2) {
    doTask3(result2, function(result3) {
      console.log("Final result:", result3);
    });
  });
});
```

### Solutions
- **Promises**
- **Async/Await**

```javascript
async function runTasks() {
  const result1 = await doTask1();
  const result2 = await doTask2(result1);
  const result3 = await doTask3(result2);
  console.log("Final result:", result3);
}
```

## Summary

- A callback function is passed into another function and executed later.
- Callbacks can be **synchronous** or **asynchronous**.
- They are widely used in **event handling**, **array operations**, and **asynchronous tasks**.
- Deep nesting of callbacks can lead to **callback hell**, which can be resolved using **Promises** or **async/await**.