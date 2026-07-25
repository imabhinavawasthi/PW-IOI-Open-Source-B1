# JavaScript Error Handling: `try...catch`

A comprehensive guide to handling runtime exceptions gracefully in JavaScript using `try`, `catch`, and `finally`.

---

## 💡 Why Do We Need It?

When a JavaScript script encounters an error, it normally **"throws an exception"** and stops completely. This crashes the application for the user. The `try...catch` statement allows you to intercept errors, handle them gracefully, and keep the application running.

```javascript
// Without try...catch: Script dies immediately
console.log(nonExistentVariable); 
console.log("This line will never run!");

// With try...catch: Script survives
try {
  console.log(nonExistentVariable);
} catch (error) {
  console.error("An error occurred, but we handled it! 😎");
}
console.log("The application keeps running perfectly!");