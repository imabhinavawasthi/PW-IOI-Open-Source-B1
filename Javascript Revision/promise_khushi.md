# Understanding Promises in JavaScript: A Complete Guide

JavaScript is single-threaded, meaning it executes code sequentially line by line. However, applications often need to perform time-consuming operations—such as fetching data from an API, reading files, or setting timers—without blocking the main thread. 

To handle asynchronous operations cleanly, modern JavaScript relies on **Promises**.

---

## What is a Promise?

A **Promise** is an object representing the eventual completion or failure of an asynchronous operation and its resulting value. 

Think of a Promise like ordering food at a restaurant:
1. You place your order and receive a **receipt** (the Promise).
2. While the kitchen prepares your food, your order is **pending**.
3. If the kitchen completes your order, you get your meal (**fulfilled**).
4. If the kitchen runs out of ingredients, your order is canceled (**rejected**).

---

## The Three States of a Promise

A Promise always exists in one of three mutually exclusive states:

| State | Description |
| :--- | :--- |
| **`pending`** | Initial state; the operation has not succeeded or failed yet. |
| **`fulfilled`** | The operation completed successfully (`resolve()` was called). |
| **`rejected`** | The operation failed (`reject()` was called). |

Once a promise moves from `pending` to either `fulfilled` or `rejected`, it is considered **settled** and its state can no longer change.

---

## Creating a Promise

You construct a Promise using the `new Promise()` constructor, which takes an **executor function** with two arguments: `resolve` and `reject`.

```javascript
const fetchData = new Promise((resolve, reject) => {
  const success = true;

  setTimeout(() => {
    if (success) {
      resolve("Data fetched successfully!");
    } else {
      reject(new Error("Failed to fetch data."));
    }
  }, 1000);
});