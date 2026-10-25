# Comprehensive Documentation: Async and Await

## Table of Contents
1. [Overview & Core Concepts](#overview--core-concepts)
2. [How Asynchronous Programming Works](#how-asynchronous-programming-works)
   - [Synchronous vs. Asynchronous](#synchronous-vs-asynchronous)
   - [The Event Loop & Call Stack](#the-event-loop--call-stack)
3. [The Evolution of Async Code](#the-evolution-of-async-code)
   - [Callbacks](#callbacks)
   - [Promises](#promises)
   - [Async / Await Syntax](#async--await-syntax)
4. [Syntax and Usage (JavaScript/TypeScript)](#syntax-and-usage-javascripttypescript)
   - [Declaring Async Functions](#declaring-async-functions)
   - [The `await` Keyword](#the-await-keyword)
   - [Return Values](#return-values)
5. [Error Handling Patterns](#error-handling-patterns)
   - [Using `try...catch`](#using-trycatch)
   - [Promise Catch Fallbacks](#promise-catch-fallbacks)
   - [Global Error Boundaries](#global-error-boundaries)
6. [Concurrent & Parallel Execution](#concurrent--parallel-execution)
   - [Sequential Execution (The Sequential Antipattern)](#sequential-execution-the-sequential-antipattern)
   - [Parallel Execution with `Promise.all`](#parallel-execution-with-promiseall)
   - [`Promise.allSettled`, `Promise.race`, and `Promise.any`](#promiseallsettled-promiserace-and-promiseany)
7. [Advanced Control Flow](#advanced-control-flow)
   - [Async Iteration (`for await...of`)](#async-iteration-for-awaitof)
   - [Top-Level `await`](#top-level-await)
   - [Async Generators](#async-generators)
8. [Cross-Language Comparison: JavaScript vs. Python](#cross-language-comparison-javascript-vs-python)
9. [Best Practices and Common Pitfalls](#best-practices-and-common-pitfalls)
10. [Real-World Code Examples](#real-world-code-examples)

---

## Overview & Core Concepts

In modern software development, applications frequently need to perform time-consuming operations such as network requests, file system I/O, database queries, or timer-based delays. 

If these operations were executed synchronously, the entire main thread would be blocked from processing user input, updating the UI, or responding to other concurrent requests.

`async` and `await` are syntactic features introduced in modern programming languages (JavaScript ES2017, Python 3.5+, C# 5.0, Rust, etc.) that make asynchronous code look and behave like synchronous code, eliminating complex callback chains and raw promise chaining while maintaining non-blocking performance.

---

## How Asynchronous Programming Works

### Synchronous vs. Asynchronous

* **Synchronous Execution**: Tasks are executed sequentially, one after another. Each line of code must wait for the preceding line to finish execution before starting.
* **Asynchronous Execution**: Long-running operations are offloaded (e.g., to the browser web APIs, operating system kernel, or background thread worker pools). The main thread continues running other code. When the asynchronous operation finishes, a notification (callback or resolved promise) is pushed back onto the execution pipeline.

### The Event Loop & Call Stack

In single-threaded environments like Node.js or browser JavaScript:

1. **Call Stack**: Keeps track of current executing functions.
2. **Web APIs / Worker Threads**: Handles background tasks (like `fetch`, timers, filesystem calls).
3. **Task / Microtask Queue**: When an asynchronous operation finishes, its callback/promise handler is moved here.
   - Promises and `await` continuations enter the **Microtask Queue** (high priority).
   - `setTimeout` / UI events enter the **Task Queue (Macrotask Queue)**.
4. **Event Loop**: Continuously checks if the Call Stack is empty. If empty, it pulls tasks from the Microtask Queue first, then the Macrotask Queue, pushing them onto the Call Stack.

---

## The Evolution of Async Code

To understand `async/await`, it helps to trace the progression of asynchronous primitives in JavaScript:

### Callbacks
```javascript
// Callback Pyramid of Doom (Callback Hell)
getUser(userId, (err, user) => {
  if (err) return handleError(err);
  getOrders(user.id, (err, orders) => {
    if (err) return handleError(err);
    getPaymentStatus(orders[0].id, (err, status) => {
      if (err) return handleError(err);
      console.log(status);
    });
  });
});
```

### Promises
```javascript
// Promise Chaining
getUser(userId)
  .then(user => getOrders(user.id))
  .then(orders => getPaymentStatus(orders[0].id))
  .then(status => console.log(status))
  .catch(err => handleError(err));
```

### Async / Await Syntax
```javascript
// Clean, imperative-style code
try {
  const user = await getUser(userId);
  const orders = await getOrders(user.id);
  const status = await getPaymentStatus(orders[0].id);
  console.log(status);
} catch (err) {
  handleError(err);
}
```

---

## Syntax and Usage (JavaScript/TypeScript)

### Declaring Async Functions

Adding the `async` keyword before a function declaration, expression, or arrow function configures it to always return a `Promise`.

```javascript
// Function Declaration
async function fetchData() {
  return "Data loaded";
}

// Arrow Function
const fetchDataArrow = async () => "Data loaded";

// Object Method
const api = {
  async getData() {
    return "Data loaded";
  }
};

// Class Method
class Service {
  async fetch() {
    return "Data loaded";
  }
}
```

### The `await` Keyword

The `await` keyword can **only** be used inside an `async` function (or at the top level of ES modules). It pauses execution of the `async` function until the Promise is resolved or rejected.

* If the Promise resolves, `await` returns the fulfilled value.
* If the Promise rejects, `await` throws the rejected value as an error.

```javascript
async function fetchUserProfile() {
  const response = await fetch('https://api.example.com/user/1');
  const data = await response.json();
  return data;
}
```

### Return Values

An `async` function automatically wraps any explicit return value into a resolved `Promise`. If an error is thrown, it returns a rejected `Promise`.

```javascript
async function getNumber() {
  return 42; 
}

// Equivalent to:
function getNumberPromise() {
  return Promise.resolve(42);
}

// Calling an async function:
getNumber().then(value => console.log(value)); // 42
```

---

## Error Handling Patterns

### Using `try...catch`

The primary advantage of `async/await` is that traditional `try...catch` blocks work seamlessly with asynchronous operations.

```javascript
async function loadUserData(userId) {
  try {
    const user = await fetchUserFromDb(userId);
    const preferences = await fetchPreferences(user.id);
    return { user, preferences };
  } catch (error) {
    console.error("Failed to load user data:", error.message);
    // Re-throw or handle gracefully
    throw new Error(`User load failed: ${error.message}`);
  } finally {
    console.log("Cleanup or loading state updates complete.");
  }
}
```

### Promise Catch Fallbacks

Since `async` functions return standard Promises, you can combine `await` with standard `.catch()` calls for quick inline fallbacks:

```javascript
async function fetchWithFallback() {
  // If the request fails, default value is returned without crashing via try/catch
  const data = await fetch('https://api.example.com/data')
    .then(res => res.json())
    .catch(() => ({ fallback: true, items: [] }));

  return data;
}
```

---

## Concurrent & Parallel Execution

### Sequential Execution (The Sequential Antipattern)

A common mistake is awaiting independent asynchronous tasks sequentially, resulting in unnecessary delays ("waterfalling").

```javascript
// BAD: Takes ~3 seconds total if each request takes 1 second
async function fetchDashboardBad() {
  const user = await fetchUser();     // 1s
  const posts = await fetchPosts();   // 1s
  const stats = await fetchStats();   // 1s
  return { user, posts, stats };
}
```

### Parallel Execution with `Promise.all`

When operations are independent, execute them concurrently using `Promise.all`:

```javascript
// GOOD: Runs all requests simultaneously; total time ~1 second
async function fetchDashboardGood() {
  const [user, posts, stats] = await Promise.all([
    fetchUser(),
    fetchPosts(),
    fetchStats()
  ]);

  return { user, posts, stats };
}
```

### `Promise.allSettled`, `Promise.race`, and `Promise.any`

| Method | Behavior | Use Case |
| :--- | :--- | :--- |
| `Promise.all` | Fails fast if *any* promise rejects. | When all data is strictly required. |
| `Promise.allSettled` | Waits for all to complete regardless of success/failure. Returns status array. | Bulk operations where partial failure is acceptable. |
| `Promise.race` | Settles as soon as the *first* promise settles (fulfill or reject). | Implementing timeouts for network calls. |
| `Promise.any` | Resolves as soon as the *first* promise fulfills (ignores rejections unless all fail). | Requesting data from multiple redundant mirrors. |

#### Example: Timeout Pattern with `Promise.race`

```javascript
function timeout(ms) {
  return new Promise((_, reject) => 
    setTimeout(() => reject(new Error("Request timed out")), ms)
  );
}

async function fetchWithTimeout(url, ms) {
  return await Promise.race([
    fetch(url).then(res => res.json()),
    timeout(ms)
  ]);
}
```

---

## Advanced Control Flow

### Async Iteration (`for await...of`)

You can iterate over streams or arrays of Promises using the `for await...of` loop:

```javascript
async function processUrls(urls) {
  const fetchPromises = urls.map(url => fetch(url).then(res => res.json()));

  for await (const data of fetchPromises) {
    console.log("Processed:", data);
  }
}
```

### Top-Level `await`

In ES modules (ES2022+), `await` can be used outside of an `async` function scope at the top level of a module:

```javascript
// dbConnection.js (ES Module)
import { connectDB } from './database.js';

// No need to wrap in an IIFE (Immediately Invoked Function Expression)
export const db = await connectDB();
```

### Async Generators

Combine async functions with generator functions using `async function*` and `yield`:

```javascript
async function* fetchPages(baseUrl, totalPages) {
  for (let page = 1; page <= totalPages; page++) {
    const response = await fetch(`${baseUrl}?page=${page}`);
    const data = await response.json();
    yield data;
  }
}

// Consuming an async generator
async function run() {
  for await (const pageData of fetchPages('https://api.example.com/items', 3)) {
    console.log("Page items:", pageData);
  }
}
```

---

## Cross-Language Comparison: JavaScript vs. Python

Both JavaScript and Python support `async/await`, but their runtime execution models have key structural differences:

| Feature | JavaScript (Node.js/V8) | Python (`asyncio`) |
| :--- | :--- | :--- |
| **Event Loop** | Built into runtime, always active. | Explicit event loop managed via `asyncio.run()`. |
| **Async Keyword** | `async function myFunc()` | `async def my_func():` |
| **Execution Trigger** | Calling an async function runs it until the first `await`. | Calling an async function returns a coroutine object; it does not execute until awaited or scheduled. |
| **Concurrent Execution** | `Promise.all([p1, p2])` | `asyncio.gather(coro1(), coro2())` |
| **Top-Level Await** | Supported in ES modules. | Supported in REPL / Jupyter, requires `asyncio.run()` in scripts. |

### Python Example (`asyncio`)

```python
import asyncio
import aiohttp

async def fetch_data(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            return await response.json()

async def main():
    urls = [
        "https://api.example.com/data1",
        "https://api.example.com/data2"
    ]
    tasks = [fetch_data(url) for url in urls]
    results = await asyncio.gather(*tasks)
    print(results)

if __name__ == "__main__":
    asyncio.run(main())
```

---

## Best Practices and Common Pitfalls

### 1. Avoid Unnecessary `await` inside Loops
**Bad:**
```javascript
async function processArraySequential(items) {
  for (const item of items) {
    await saveToDatabase(item); // Waits for each item before moving to next
  }
}
```
**Good:**
```javascript
async function processArrayParallel(items) {
  const promises = items.map(item => saveToDatabase(item));
  await Promise.all(promises); // Executes concurrently
}
```

### 2. Don't Forget to Handle Unhandled Rejections
Always catch errors at boundary points (e.g., HTTP route handlers, event listeners) or use process-wide event handlers:
```javascript
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});
```

### 3. Do Not Use `async` in `forEach`
`Array.prototype.forEach` does not respect Promises returned by async callbacks.

**Bad:**
```javascript
// DOES NOT WAIT for promises to resolve!
items.forEach(async (item) => {
  await processItem(item);
});
console.log("Finished!"); // Fires immediately before async work finishes
```

**Good:** Use `for...of` or `Promise.all` + `.map`:
```javascript
for (const item of items) {
  await processItem(item);
}
console.log("Finished!");
```

### 4. Avoid Returning `await` unnecessarily
Returning `await` inside an async function adds an extra tick before resolving.

```javascript
// Redundant await
async function getData() {
  return await fetch('/data').then(res => res.json()); // Unnecessary await
}

// Clean
async function getData() {
  return fetch('/data').then(res => res.json());
}
```
*Note: Retaining `return await` is useful inside a `try...catch` block if you want the local `catch` block to intercept errors thrown by the promise.*

---

## Real-World Code Examples

### Utility: Exponential Backoff Retry Pattern

```javascript
async function fetchWithRetry(url, options = {}, retries = 3, backoffMs = 1000) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP Error Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    if (retries <= 0) {
      throw new Error(`Failed after maximum retries: ${error.message}`);
    }
    console.warn(`Attempt failed (${error.message}). Retrying in ${backoffMs}ms...`);
    
    await new Promise(resolve => setTimeout(resolve, backoffMs));
    
    return fetchWithRetry(url, options, retries - 1, backoffMs * 2);
  }
}

// Usage:
// fetchWithRetry('https://api.example.com/unstable-endpoint');
```

---
*Generated Documentation — Async & Await Guide*