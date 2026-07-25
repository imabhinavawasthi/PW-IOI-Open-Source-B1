# Fetch API in JavaScript

## Introduction

The Fetch API is a modern JavaScript interface used to make HTTP requests. It returns a Promise and allows developers to retrieve or send data to a server.

---

## Syntax

```javascript
fetch(url, options)
```

---

## Example

```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

---

## Using Async/Await

```javascript
async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getData();
```

---

## Advantages

- Promise-based API
- Cleaner than XMLHttpRequest
- Supports async/await
- Easy to read and maintain

---

## Disadvantages

- Does not reject on HTTP errors automatically
- Requires manual error handling

---

## Conclusion

The Fetch API is the preferred way to make HTTP requests in modern JavaScript applications because it is simple, flexible, and works well with Promises and async/await.