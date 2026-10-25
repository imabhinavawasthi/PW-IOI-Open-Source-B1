# JavaScript Event Loop 🚀

## What is the Event Loop?

The **Event Loop** is the mechanism that allows JavaScript to perform **non-blocking asynchronous operations** even though JavaScript has only **one call stack**.

In simple words:

> The Event Loop continuously checks whether the Call Stack is empty. If it is empty, it takes tasks from queues and pushes them onto the Call Stack for execution.

---

# Why Do We Need the Event Loop?

JavaScript is **single-threaded**, meaning it can execute **only one task at a time**.

Imagine the following code:

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 2000);

console.log("End");
```

If JavaScript waited for 2 seconds, the whole webpage would freeze.

Instead,

- JavaScript sends the timer to the browser.
- The browser waits.
- Meanwhile JavaScript continues executing other code.
- After the timer finishes, the callback is placed in a queue.
- The Event Loop executes it when the Call Stack becomes empty.

Output:

```

Start
End
Timer

```

---

# JavaScript Runtime

A JavaScript runtime consists of:

```

+--------------------+
|   Call Stack       |
+--------------------+

|

v

+--------------------+
|   Web APIs         |
| setTimeout         |
| DOM                |
| Fetch              |
+--------------------+

|

v

+--------------------+
| Callback Queues    |
+--------------------+

|

v

+--------------------+
| Event Loop         |
+--------------------+

```

---

# Main Components

## 1. Call Stack

The Call Stack is where JavaScript executes functions.

Example:

```javascript
function one() {
    two();
}

function two() {
    console.log("Hello");
}

one();
```

Stack:

```

one()
↓
two()
↓
console.log()

```

After execution:

```

(empty)

```

---

## 2. Web APIs

Web APIs are **provided by the browser**, not JavaScript.

Examples:

- setTimeout()
- setInterval()
- fetch()
- DOM Events
- Geolocation

Example:

```javascript
setTimeout(() => {
    console.log("Done");
}, 3000);
```

The timer runs inside the browser.

JavaScript continues executing.

---

## 3. Callback Queue (Task Queue / Macrotask Queue)

After an asynchronous task finishes, its callback goes into the Callback Queue.

Example:

```javascript
setTimeout(() => {
    console.log("Timer");
}, 0);
```

Even with **0 ms**, it **does not execute immediately**.

It waits until:

- Call Stack becomes empty
- Event Loop moves it to the stack

---

## 4. Microtask Queue

Microtasks have **higher priority** than the Callback Queue.

Examples:

- Promise.then()
- Promise.catch()
- Promise.finally()
- queueMicrotask()
- MutationObserver

Example:

```javascript
Promise.resolve().then(() => {
    console.log("Promise");
});
```

The callback goes into the **Microtask Queue**.

---

# Priority

```

Current Code

↓

Microtask Queue

↓

Callback Queue (Macrotasks)

```

Microtasks always execute before Callback Queue tasks.

---

# Event Loop Working

The Event Loop continuously repeats:

### Step 1

Execute synchronous code.

### Step 2

If Call Stack is empty:

Execute **all Microtasks**

### Step 3

Execute **one Callback Queue task**

### Step 4

Repeat forever.

---

# Example 1

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");
```

Execution:

```

Call Stack

A
C

↓

Timer finishes

↓

Callback Queue

↓

Event Loop

↓

B

```

Output:

```

A
C
B

```

---

# Example 2 (Promises)

```javascript
console.log("Start");

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");
```

Output:

```

Start
End
Promise

```

Because Promise callbacks are Microtasks.

---

# Example 3 (Most Important)

```javascript
console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
});

console.log("4");
```

Execution:

### Synchronous

```

1
4

```

### Microtask Queue

```

3

```

### Callback Queue

```

2

```

Output:

```

1
4
3
2

```

---

# Example 4

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve()
.then(() => {
    console.log("Promise 1");
})
.then(() => {
    console.log("Promise 2");
});

console.log("End");
```

Output:

```

Start
End
Promise 1
Promise 2
Timeout

```

Why?

- Promise callbacks are Microtasks.
- Event Loop empties the entire Microtask Queue before handling the Callback Queue.

---

# Visual Flow

```

console.log()

↓

Call Stack

↓

setTimeout()

↓

Browser (Web API)

↓

Timer Ends

↓

Callback Queue

↓

Event Loop

↓

Call Stack

↓

console.log()

```

---

# Event Loop Algorithm

```

while (true) {

if (Call Stack is empty) {

Execute all Microtasks

Execute one Callback Queue task

}

}

```

---

# Common Interview Questions

### Q1. Is JavaScript single-threaded?

Yes.

It has only one Call Stack.

---

### Q2. Who handles timers?

The Browser (Web APIs).

Node.js uses its own runtime APIs.

---

### Q3. Does `setTimeout(fn, 0)` execute immediately?

No.

It waits until:

- Call Stack is empty
- All Microtasks are completed

---

### Q4. Which has higher priority?

```

Promise.then()

>

setTimeout()

```

---

### Q5. Difference between Microtask and Callback Queue?

Microtask Queue:

- Promise.then()
- catch()
- finally()
- queueMicrotask()

Callback Queue:

- setTimeout()
- setInterval()
- DOM Events
- MessageChannel

---

### Q6. Can the Callback Queue execute before Microtasks?

No.

Microtasks always execute first.

---

### Q7. Does the Event Loop run once?

No.

It runs continuously until the application exits.

---

# Memory Trick

Think of JavaScript as a restaurant.

- 👨‍🍳 **Chef** = Call Stack
- 📋 **Kitchen Orders** = Synchronous code
- ⏲️ **Timer** = Web APIs
- ⭐ **VIP Orders** = Microtask Queue (Promises)
- 📦 **Normal Orders** = Callback Queue (setTimeout)
- 🚶 **Waiter** = Event Loop

The waiter (Event Loop) only brings new orders when the chef (Call Stack) is free. VIP orders are always served before normal orders.

---

# Summary

- JavaScript is **single-threaded**.
- It executes synchronous code on the **Call Stack**.
- Asynchronous operations are handled by **Web APIs** (browser) or runtime APIs (Node.js).
- Completed asynchronous callbacks enter a queue.
- **Promises** go to the **Microtask Queue**.
- **setTimeout** and similar APIs go to the **Callback Queue (Macrotask Queue)**.
- The **Event Loop** waits until the Call Stack is empty.
- It executes **all Microtasks first**, then **one Callback Queue task**, and repeats.
- This design allows JavaScript to stay responsive while handling asynchronous operations efficiently.

---

# One-Line Revision

```

Synchronous Code
↓
Call Stack
↓
Web APIs
↓
Microtask Queue (Promises)
↓
Callback Queue (Timers)
↓
Event Loop
↓
Call Stack Again

```