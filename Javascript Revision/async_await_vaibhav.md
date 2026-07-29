# JavaScript Async/Await: The Definitive Revision Notes & Handbook

---

## Table of Contents
1. [Introduction to Asynchronous JavaScript](#1-introduction-to-asynchronous-javascript)
2. [The Evolution of Async JS](#2-the-evolution-of-async-js)
3. [The `async` Keyword](#3-the-async-keyword)
4. [The `await` Keyword](#4-the-await-keyword)
5. [Error Handling in Async/Await](#5-error-handling-in-async-await)
6. [Async/Await Under the Hood (Generators + Promises)](#6-asyncawait-under-the-hood-generators--promises)
7. [Async/Await in Loops & Collections](#7-asyncawait-in-loops--collections)
8. [Sequential vs. Parallel Execution](#8-sequential-vs-parallel-execution)
9. [FAANG Interview Questions & Tricky Code Snippets](#9-faang-interview-questions--tricky-code-snippets)
`
---

## 1. Introduction to Asynchronous JavaScript

### Definition
Asynchronous JavaScript refers to the execution model that allows the engine to run long-running tasks (like network requests or file operations) in the background without blocking the execution of the main program thread.

### Explanation
JavaScript is a single-threaded, non-blocking, concurrent language. Single-threaded means it has one Call Stack and can execute only one statement at a time. Concurrency is achieved through the browser environment (or Node.js runtime), which provides Web APIs (like `setTimeout`, `fetch`, etc.), an Event Loop, and a Callback Queue (or Microtask Queue).

### Why It Exists
In synchronous programming, if a network request takes 5 seconds, the browser freezes during that time, preventing user interactions like clicking buttons or scrolling. Asynchronous programming exists to keep the UI fluid and responsive by delegating time-consuming tasks to the runtime environment.

### Internal Working
1. **Call Stack**: Executes synchronous JS code.
2. **Web APIs/Node APIs**: Handle background tasks (timers, fetch).
3. **Microtask Queue**: Holds Promise callbacks (`.then`/`.catch`/`await` resumptions). This has higher priority than the Callback Queue.
4. **Callback Queue**: Holds Macrotask callbacks (`setTimeout`, DOM events).
5. **Event Loop**: Monitors the Call Stack. If the Stack is empty, it pushes tasks from the Microtask Queue first, then the Callback Queue, onto the Call Stack.

### Syntax
Traditional asynchronous code relied on callback functions:
```javascript
getData(url, (data) => {
    console.log(data);
});
```

### Code Example
```javascript
console.log("Start");

setTimeout(() => {
    console.log("Macrotask (setTimeout)");
}, 0);

Promise.resolve().then(() => {
    console.log("Microtask (Promise)");
});

console.log("End");
```

### Output
```text
Start
End
Microtask (Promise)
Macrotask (setTimeout)
```

### Important Notes
* Microtasks always execute before the next macrotask, even if the macrotask timer was set to `0ms`.
* Rendering and layout steps happen after the Microtask Queue is completely cleared.

### Common Mistakes
* Assuming asynchronous code will execute immediately if the delay is set to `0`.
* Misunderstanding the execution order of promises vs. timers.

### Interview Tips
* **Question**: "What is the difference between the Microtask Queue and the Macrotask Queue?"
  * **Answer**: The Microtask Queue holds promise resolutions and `MutationObserver` callbacks. The Macrotask (Callback) Queue holds timers, I/O, and UI events. The Event Loop prioritizes the entire Microtask Queue over the Macrotask Queue at the end of each tick.

### Best Practices
* Always utilize modern async abstractions (Promises and Async/Await) over raw callback patterns to prevent "Callback Hell".

### Real-world Use Cases
* Fetching API data.
* Reading files from disk.
* Attaching event listeners that respond to user actions.

---

## 2. The Evolution of Async JS

### Definition
The progression of asynchronous programming paradigms in JavaScript, moving from Callbacks to Promises (ES6), and finally to Async/Await (ES2017).

### Explanation
* **Callbacks**: Passing a function as an argument to another function to execute when a task is completed.
* **Promises**: Objects representing the eventual completion (or failure) of an asynchronous operation.
* **Async/Await**: Syntactic sugar written on top of Promises to make asynchronous code look and behave like synchronous code.

### Why It Exists
* Callbacks led to deeply nested structures known as the **"Pyramid of Doom"** or **"Callback Hell"**, making error handling and code readability extremely difficult.
* Promises resolved nesting by allowing chaining (`.then().then()`), but still required callback functions for each step, which introduced boilerplate.
* Async/Await was created to write asynchronous code that reads sequentially, eliminating nested callbacks and `.then()` chains.

### Internal Working
Promises run on a state machine structure with three states:
1. `pending`: Initial state.
2. `fulfilled`: Operation completed successfully.
3. `rejected`: Operation failed.
Once a promise settles (fulfills or rejects), its state becomes immutable. Async/Await abstracts the resolution of these states using the `async` and `await` keywords.

### Syntax
**Callbacks:**
```javascript
step1((err, res1) => {
    step2(res1, (err, res2) => {
        step3(res2, (err, res3) => { /* ... */ });
    });
});
```

**Promises:**
```javascript
step1()
  .then(res1 => step2(res1))
  .then(res2 => step3(res2))
  .catch(err => console.error(err));
```

**Async/Await:**
```javascript
try {
    const res1 = await step1();
    const res2 = await step2(res1);
    const res3 = await step3(res2);
} catch (err) {
    console.error(err);
}
```

### Code Example
```javascript
const fetchUserData = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id: 1, name: "Vaibhav" }), 1000);
    });
};

const fetchUserPosts = (userId) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(["Post 1", "Post 2"]), 1000);
    });
};

// Evolution demo
async function getDashboardData() {
    console.log("Fetching user...");
    const user = await fetchUserData();
    console.log(`User fetched: ${user.name}`);
    const posts = await fetchUserPosts(user.id);
    console.log(`Posts fetched:`, posts);
    return posts;
}

getDashboardData();
```

### Output
```text
Fetching user...
[1s delay]
User fetched: Vaibhav
[1s delay]
Posts fetched: [ 'Post 1', 'Post 2' ]
```

### Important Notes
* Async/Await does not replace Promises; it sits on top of them. An `async` function always returns a Promise.
* Promises introduced standard error handling via `.catch()`, which async/await handles natively with standard synchronous `try/catch` blocks.

### Common Mistakes
* Mixing syntax patterns unnecessarily (e.g., placing `.then()` inside an `async` function instead of using `await`).

### Interview Tips
* **Question**: "Does Async/Await run on a separate thread?"
  * **Answer**: No. JavaScript remains single-threaded. Async/Await is non-blocking syntactic sugar that uses the engine's event loop and microtask queues under the hood.

### Best Practices
* Refactor legacy callback-based interfaces to use Promises (via `util.promisify` in Node or manual Promise wrapping) before consuming them with Async/Await.

### Real-world Use Cases
* Refactoring legacy codebases to improve maintainability and clean up horizontal indentation ("Callback Hell").

---

## 3. The `async` Keyword

### Definition
The `async` keyword is placed before a function declaration to turn it into an asynchronous function.

### Explanation
An asynchronous function wrapper guarantees that:
1. The function always returns a Promise.
2. If the function returns a non-promise value, JS implicitly wraps it in a resolved Promise.
3. If the function throws an error, the returned Promise is rejected with that error.

### Why It Exists
It establishes an asynchronous context inside the function, enabling the use of the `await` keyword within its body.

### Internal Working
When an `async` function is called:
1. The JS engine starts executing the body synchronously.
2. If it encounters a return statement with a value `X`, it calls `Promise.resolve(X)` to settle the promise.
3. If an uncaught exception is thrown, the engine rejects the returned promise with that exception.

### Syntax
```javascript
async function functionName() {
    return "Value";
}

const arrowFunc = async () => "Value";
```

### Code Example
```javascript
async function getGreeting() {
    return "Hello, Vaibhav!";
}

async function getFailedJob() {
    throw new Error("DB Connection Failed");
}

const greetingPromise = getGreeting();
console.log("Returned Type:", greetingPromise);

greetingPromise.then(val => console.log("Resolved to:", val));

getFailedJob().catch(err => console.log("Rejected with:", err.message));
```

### Output
```text
Returned Type: Promise { <pending> }
Resolved to: Hello, Vaibhav!
Rejected with: DB Connection Failed
```

### Important Notes
* Even if the function body is entirely synchronous, declaring it as `async` causes it to return a Promise that resolves asynchronously in the microtask tick.

### Common Mistakes
* Forgetting that an `async` function returns a Promise, and attempting to assign its direct return value to a variable synchronously:
  ```javascript
  // MISTAKE
  const data = getGreeting(); 
  console.log(data); // Prints: Promise { <pending> } instead of "Hello, Vaibhav!"
  ```

### Interview Tips
* **Question**: "What does an async function return if it has no return statement?"
  * **Answer**: It returns a Promise resolved with `undefined` (analogous to how a normal function returns `undefined` if there is no explicit return statement).

### Best Practices
* Do not mark a function as `async` if it doesn't perform asynchronous tasks or use `await`, as it incurs a slight memory and performance overhead by creating a Promise object.

### Real-world Use Cases
* Creating asynchronous helper wrappers for third-party libraries.

---

## 4. The `await` Keyword

### Definition
The `await` keyword is placed before a Promise to pause execution of the enclosing `async` function until that Promise settles (resolves or rejects).

### Explanation
When the engine encounters `await promiseExpression`, it suspends execution of the surrounding `async` function. The control is handed back to the main call stack, allowing the engine to execute other synchronous code. Once the awaited Promise resolves, the async function is resumed, returning the resolved value of the Promise.

### Why It Exists
It eliminates the need for chaining `.then()` callbacks and resolves the scoping issues associated with them, keeping variables flat inside the function scope.

### Internal Working
1. The JS engine evaluates the expression next to `await`.
2. It wraps that expression in a Promise: `Promise.resolve(expression)`.
3. The engine suspends the execution of the `async` function, registers the rest of the function as a microtask callback, and pops the async function off the Call Stack.
4. When the call stack becomes empty, and the promise settles, the microtask queue schedules the resumption of the async function.

### Syntax
```javascript
const value = await promiseExpression;
```

### Code Example
```javascript
const fetchLatency = () => new Promise(res => setTimeout(() => res(45), 500));

async function logMetrics() {
    console.log("Metric request initiated...");
    const latency = await fetchLatency();
    console.log(`Current Latency: ${latency}ms`);
}

console.log("Global Execution 1");
logMetrics();
console.log("Global Execution 2");
```

### Output
```text
Global Execution 1
Metric request initiated...
Global Execution 2
Current Latency: 45ms
```

### Important Notes
* The `await` keyword only blocks execution *inside* the async function. It does **not** block the main browser UI thread or call stack.
* Prior to ES2022, `await` could only be used inside an `async` function. Now, **Top-Level Await** is supported in JavaScript modules.

### Common Mistakes
* Omitting the `await` keyword when calling an asynchronous function, which yields a raw Promise instead of the resolved data:
  ```javascript
  const user = fetchUser(); // Missing await! Returns Promise, not user data.
  ```
* Thinking `await` blocks the entire application thread.

### Interview Tips
* **Question**: "What happens if you await a non-promise value?"
  * **Answer**: The engine converts it into a resolved Promise using `Promise.resolve(value)` and immediately schedules the resumption of the function in the next microtask tick.

### Best Practices
* Avoid over-awaiting. If tasks are independent, execute them in parallel using `Promise.all` instead of awaiting them sequentially.

### Real-world Use Cases
* Awaiting database query responses or API payload fetches.

---

## 5. Error Handling in Async/Await

### Definition
The structural mechanisms used to catch and handle promise rejections and runtime exceptions in asynchronous contexts.

### Explanation
When an awaited Promise rejects, it throws the rejection reason as an exception. This allows developers to use standard synchronous `try...catch` blocks to handle errors cleanly.

### Why It Exists
With standard promises, error handling required appending `.catch()` blocks, which made localized error handling complex. `try/catch` provides a unified syntax for catching both asynchronous rejections and synchronous code errors.

### Internal Working
If a promise inside a `try` block rejects, the JS interpreter intercepts the rejection, maps the rejection value to the variable in the `catch(error)` block, and diverts execution flow directly to the catch block, skipping the remaining statements in the `try` block.

### Syntax
```javascript
try {
    const data = await promise;
} catch (error) {
    console.error("Caught error:", error);
} finally {
    console.log("Executes regardless of success or failure");
}
```

### Code Example
```javascript
const fetchInvalidEndpoint = () => {
    return new Promise((_, reject) => {
        setTimeout(() => reject(new Error("404 Not Found")), 500);
    });
};

async function loadData() {
    try {
        console.log("Fetching api...");
        const data = await fetchInvalidEndpoint();
        console.log("This line will not run");
    } catch (err) {
        console.error(`Caught rejection error: ${err.message}`);
    } finally {
        console.log("Cleanup action completed.");
    }
}

loadData();
```

### Output
```text
Fetching api...
Caught rejection error: 404 Not Found
Cleanup action completed.
```

### Important Notes
* Unhandled promise rejections can crash the process in Node.js environments. Always ensure asynchronous workflows have error boundaries.
* You can catch errors inline on the promise itself using `.catch()` even while using `await`:
  ```javascript
  const data = await fetchApi().catch(err => defaultData);
  ```

### Common Mistakes
* Forgetting to catch exceptions, assuming that failures are handled implicitly.
* Nesting `try/catch` blocks unnecessarily, creating confusing code paths.

### Interview Tips
* **Question**: "How do you handle multiple errors in parallel requests?"
  * **Answer**: If you use `Promise.all`, a single rejection rejects the entire block (fail-fast). To handle errors individually for parallel requests, use `Promise.allSettled()`, which returns an array describing the status and outcome of each promise.

### Best Practices
* Use a global uncaught rejection handler (`process.on('unhandledRejection')` in Node or `window.addEventListener('unhandledrejection')` in browsers) as a safety net.
* Always wrap API calls or network operations in `try/catch` blocks.

### Real-world Use Cases
* Displaying user-friendly fallback error messages when an external API fails.

---

## 6. Async/Await Under the Hood (Generators + Promises)

### Definition
Async/Await is syntactic sugar implemented over **Generator Functions** (`function*` / `yield`) and **Promises**.

### Explanation
Generators are functions that can be entered, exited, and re-entered, keeping their variable state intact between runs. The JS engine combines Generators and Promises via a "runner" utility to mimic synchronous pauses and resumptions.

### Why It Exists
Before native Async/Await support was added to JavaScript engines, compilers like Babel used Generator-based polyfills (such as Co-routine libraries like `co`) to compile async code to ES5 compatible runtimes.

### Internal Working
When compilation occurs:
1. The `async` function is converted into a generator function.
2. The `await` keywords are replaced by `yield` operators.
3. An executor function (often called `spawn` or `asyncToGenerator`) recursively calls the generator's `.next()` method when yielded promises resolve.

### Syntax
Conceptual transpilation of Async/Await to Generators:
```javascript
// Native Async/Await
async function get() {
    const val = await promise;
    return val;
}

// Under-the-hood Generator implementation
function getGenerator() {
    return spawn(function* () {
        const val = yield promise;
        return val;
    });
}
```

### Code Example
```javascript
// Custom implementation of the async-await generator runner
function spawn(generatorFunc) {
    return new Promise((resolve, reject) => {
        const generator = generatorFunc();
        
        function step(nextInfo) {
            let result;
            try {
                // Run the generator to the next yield statement
                result = generator.next(nextInfo);
            } catch (err) {
                return reject(err);
            }
            
            const { value, done } = result;
            
            if (done) {
                // Generator finished executing, return final value
                return resolve(value);
            }
            
            // Wrap yielded value in a promise and chain the next step
            Promise.resolve(value).then(
                res => step(res),
                err => generator.throw(err) // Throws error back inside the generator
            );
        }
        
        step();
    });
}

// Consuming our custom generator runner
spawn(function* () {
    const res1 = yield Promise.resolve("Hello");
    const res2 = yield Promise.resolve(`${res1} World`);
    console.log("Spawn Result:", res2);
    return res2;
});
```

### Output
```text
Spawn Result: Hello World
```

### Important Notes
* Generaters yield control, whereas Async/Await waits for Promise settlement.
* Generator iterators maintain execution context inside memory stack allocations.

### Common Mistakes
* Confusing the `yield` operator with the `await` keyword.
* Not realizing that generators are a native feature and form the foundation of async/await.

### Interview Tips
* **Question**: "Explain how async/await is syntactic sugar for generators."
  * **Answer**: An async function is equivalent to a generator function wrapped in an auto-executing runner. The `await` acts like a `yield` operator that yields a promise back to the runner, which automatically calls `.next(value)` once the promise settles.

### Best Practices
* Use native async/await for standard codebases, and use generators when you need explicit custom control over iterator steps (e.g. streaming, cancellation tokens, or state machines).

### Real-world Use Cases
* Custom build pipeline transpilation via Babel or SWC.
* Redux Saga middleware configuration for advanced asynchronous state management.

---

## 7. Async/Await in Loops & Collections

### Definition
Consuming collections and iterable data asynchronously inside loop constructs.

### Explanation
Different loop types handle async execution contexts in different ways:
* `forEach`: Runs callbacks in parallel synchronously without waiting for resolutions.
* `for...of` (or traditional `for` loops): Executes sequentially, waiting for each step to finish before proceeding to the next.
* `Promise.all`: Executes promises in parallel, waiting for all of them to resolve.

### Why It Exists
Standard array iteration methods like `.forEach` or `.map` are not designed to await promise settlements between items, often leading to unexpected concurrency issues.

### Internal Working
* `forEach` calls the callback function synchronously for every item. It does not await the promise returned by the callback.
* `for...of` loops use the iterable protocol sequentially. When a loop body yields an `await`, the loop pauses until the promise settles, before starting the next iteration.

### Syntax
**Sequential Loop (`for...of`):**
```javascript
for (const item of items) {
    const res = await process(item);
}
```

**Parallel Loop (`Promise.all` + `map`):**
```javascript
const promises = items.map(async item => await process(item));
const results = await Promise.all(promises);
```

### Code Example
```javascript
const delay = (ms) => new Promise(res => setTimeout(res, ms));

const tasks = [1, 2, 3];

async function runSequential() {
    console.log("Sequential Execution Started");
    const startTime = Date.now();
    for (const task of tasks) {
        await delay(500);
        console.log(`Completed Task ${task}`);
    }
    console.log(`Sequential Done in ${Date.now() - startTime}ms`);
}

async function runForEach() {
    console.log("forEach Execution Started");
    const startTime = Date.now();
    tasks.forEach(async (task) => {
        await delay(500);
        console.log(`forEach Completed Task ${task}`);
    });
    // This completes immediately before the tasks settle!
    console.log(`forEach Loop exited in ${Date.now() - startTime}ms`);
}

async function startDemo() {
    await runSequential();
    console.log("-------------------");
    await runForEach();
}

startDemo();
```

### Output
```text
Sequential Execution Started
Completed Task 1
Completed Task 2
Completed Task 3
Sequential Done in 1509ms
-------------------
forEach Execution Started
forEach Loop exited in 1ms
forEach Completed Task 1
forEach Completed Task 2
forEach Completed Task 3
```

### Important Notes
* The `forEach` loop executes all async callbacks concurrently, but it exits synchronously without waiting for them to complete.
* If you need parallel execution with `Promise.all`, beware of hitting API rate limits if the array contains a large number of items.

### Common Mistakes
* Believing that `forEach` respects `await` pauses.
* Blocking execution unnecessarily inside `for...of` loops when tasks could run concurrently in parallel.

### Interview Tips
* **Question**: "How do you run 10 async requests in batches of 2?"
  * **Answer**: You can chunk the array into sizes of 2, and then loop through those chunks sequentially using a `for...of` loop, awaiting `Promise.all()` on each batch:
    ```javascript
    for (let i = 0; i < items.length; i += 2) {
        const batch = items.slice(i, i + 2);
        await Promise.all(batch.map(item => process(item)));
    }
    ```

### Best Practices
* Use `for...of` when ordering or dependency matters between iterations.
* Use `Promise.all` + `.map` when iterations are independent and speed is prioritized.

### Real-world Use Cases
* Batch uploading images to an S3 bucket.
* Scraping web page lists sequentially to avoid overloading the target server.

---

## 8. Sequential vs. Parallel Execution

### Definition
* **Sequential Execution**: Running asynchronous tasks one after another (order-dependent).
* **Parallel Execution**: Starting multiple asynchronous tasks concurrently and waiting for all of them to finish.

### Explanation
* In sequential execution, the code pauses at each `await` statement before starting the next line.
* In parallel execution, promises are initialized concurrently, and then the results are awaited in combination.

### Why It Exists
Choosing between sequential and parallel patterns allows you to optimize request latency and resolve dependency requirements.

### Internal Working
* When you write `const a = await getA(); const b = await getB();`, `getB()` is not invoked until `getA()` resolves.
* When you write `const promiseA = getA(); const promiseB = getB();`, both operations are initiated concurrently. Then, `Promise.all([promiseA, promiseB])` resolves once all operations are complete.

### Syntax
**Sequential:**
```javascript
const res1 = await task1();
const res2 = await task2();
```

**Parallel:**
```javascript
const [res1, res2] = await Promise.all([task1(), task2()]);
```

### Code Example
```javascript
const fetchPrices = () => new Promise(res => setTimeout(() => res(100), 1000));
const fetchMetadata = () => new Promise(res => setTimeout(() => res({ category: "electronics" }), 1000));

async function sequentialFetch() {
    const start = Date.now();
    const prices = await fetchPrices();
    const metadata = await fetchMetadata();
    console.log(`Sequential Done. Total Time: ${Date.now() - start}ms`);
}

async function parallelFetch() {
    const start = Date.now();
    // Fire queries concurrently
    const pricePromise = fetchPrices();
    const metaPromise = fetchMetadata();
    
    // Await results
    const [prices, metadata] = await Promise.all([pricePromise, metaPromise]);
    console.log(`Parallel Done. Total Time: ${Date.now() - start}ms`);
}

async function runTest() {
    await sequentialFetch();
    await parallelFetch();
}

runTest();
```

### Output
```text
Sequential Done. Total Time: 2005ms
Parallel Done. Total Time: 1003ms
```

### Important Notes
* `Promise.all` fails fast. If any single promise rejects, the entire operation rejects immediately.
* If you want to keep successful responses even if some requests fail, use `Promise.allSettled()`.

### Common Mistakes
* Writing sequential code when there are no dependencies between tasks, which increases API response latency.

### Interview Tips
* **Question**: "What is the difference between `Promise.all` and `Promise.allSettled`?"
  * **Answer**: `Promise.all` rejects immediately if any promise in the array fails. `Promise.allSettled` waits for all promises to either resolve or reject, returning an array of objects that describe the outcome and value/reason for each.

### Best Practices
* Always run independent operations concurrently to optimize speed and resource utilization.
* Handle individual promise failures within `Promise.all` by appending `.catch()` to individual promises if needed.

### Real-world Use Cases
* Speeding up dashboard page loads by fetching user settings, notifications, and feed data concurrently.

---

## 9. FAANG Interview Questions & Tricky Code Snippets

Here are some high-frequency, complex interview questions and output-prediction snippets regarding async execution contexts.

### Snippet 1: Execution Order Tricky Snippet
**Predict the output order of this script:**
```javascript
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => {
    console.log("3");
    setTimeout(() => console.log("4"), 0);
}).then(() => {
    console.log("5");
});

async function main() {
    console.log("6");
    await Promise.resolve();
    console.log("7");
}

main();

console.log("8");
```

#### Answer
*   `1` is printed first (Call Stack).
*   `setTimeout(..., 0)` registers a macrotask callback (for `2`).
*   `Promise.resolve().then` queues a microtask callback containing `3` and a nested macrotask (for `4`).
*   `main()` is invoked. `6` is printed synchronously.
*   `await Promise.resolve()` yields control and queues the remainder of `main()` (for `7`) into the microtask queue.
*   `8` is printed (Call Stack).
*   The call stack is now empty. The microtask queue contains:
    *   Callback for `3`
    *   Resumption of `main` for `7`
*   The callback for `3` runs. Prints `3`, and registers a macrotask callback (for `4`).
*   The promise chain triggers, appending the next `.then()` callback for `5` onto the microtask queue.
*   The next microtask runs: Resumption of `main`. Prints `7`.
*   The next microtask runs: Callback for `5`. Prints `5`.
*   The microtask queue is now empty. The macrotask queue contains:
    *   Callback for `2`
    *   Callback for `4`
*   The first macrotask runs. Prints `2`.
*   The second macrotask runs. Prints `4`.

#### Output
```text
1
6
8
3
7
5
2
4
```

---

### Snippet 2: trylock-catch scoping challenge
**What gets printed by the execution of this snippet?**
```javascript
let connection = "open";

async function simulateDatabase() {
    try {
        await Promise.reject("Connection Error");
    } catch (err) {
        connection = "closed";
        throw new Error("Handled Error");
    } finally {
        connection = "terminated";
        return "Clean Exit";
    }
}

simulateDatabase().then(val => console.log("Resolved:", val, "| Connection:", connection));
```

#### Answer
*   Inside `try`, `Promise.reject` throws an exception, diverting execution flow to `catch`.
*   `catch` sets `connection = "closed"` and throws an error.
*   Before the function returns or propagates the error, the `finally` block runs.
*   `finally` sets `connection = "terminated"`.
*   Crucially, `finally` contains a return statement (`return "Clean Exit"`). A return statement in a `finally` block overrides any thrown errors or return values from the `try` or `catch` blocks.
*   Thus, the promise returned by `simulateDatabase()` resolves with `"Clean Exit"` instead of rejecting.

#### Output
```text
Resolved: Clean Exit | Connection: terminated
```

---

### Snippet 3: Parallel vs Sequential inside map method
**Evaluate the runtime of this script:**
```javascript
const delay = () => new Promise(res => setTimeout(res, 1000));

async function run() {
    const list = [1, 2, 3];
    const start = Date.now();
    
    const results = await Promise.all(list.map(async (num) => {
        await delay();
        return num * 2;
    }));
    
    console.log("Results:", results, "Time:", Date.now() - start);
}

run();
```

#### Answer
*   `list.map` invokes the async callback for all three array items synchronously.
*   Three promises are generated and start running concurrently.
*   All three promises resolve after a 1000ms delay.
*   `Promise.all` awaits all three promises, completing after 1000ms.

#### Output
```text
Results: [2, 4, 6] Time: 1005ms
```
