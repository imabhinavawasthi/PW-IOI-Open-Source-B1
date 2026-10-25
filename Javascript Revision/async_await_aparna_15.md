# JavaScript Async/Await

`async` and `await` build on top of Promises to make asynchronous code easier to write and read sequentially.

## Key Concepts
- **`async` keyword:** Makes a function return a Promise automatically.
- **`await` keyword:** Pauses execution until a Promise settles (resolves or rejects).

## Example Code
```javascript
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data loaded!"), 1000);
  });
}

async function main() {
  console.log("Loading...");
  const result = await fetchData();
  console.log(result);
}

main();