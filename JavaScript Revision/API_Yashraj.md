# JavaScript APIs - Complete Notes

## What is an API?

API (Application Programming Interface) is a set of methods and objects provided by the browser or JavaScript environment that allows your code to interact with different features like the DOM, network, storage, media, and more.

> JavaScript itself provides the language, while browsers provide many APIs.

---

# Categories of JavaScript APIs

1. DOM API
2. BOM API
3. Fetch API
4. Storage API
5. Events API
6. Timers API
7. Geolocation API
8. Clipboard API
9. Drag and Drop API
10. Canvas API
11. Web Audio API
12. History API
13. URL API
14. File API
15. Notification API
16. WebSocket API
17. Intersection Observer API
18. Mutation Observer API
19. Web Workers API

---

# 1. DOM API

Used to manipulate HTML elements.

## Select Elements

```javascript
document.getElementById("title");

document.querySelector(".box");

document.querySelectorAll("p");
```

## Change Content

```javascript
element.textContent = "Hello";

element.innerHTML = "<h1>Hi</h1>";
```

## Change Style

```javascript
element.style.color = "red";
element.style.fontSize = "20px";
```

## Add Class

```javascript
element.classList.add("active");

element.classList.remove("active");

element.classList.toggle("active");
```

## Create Elements

```javascript
const div = document.createElement("div");

div.textContent = "New Div";

document.body.appendChild(div);
```

---

# 2. BOM API (Browser Object Model)

Interact with the browser.

## Window

```javascript
window.alert("Hello");

window.confirm("Delete?");

window.prompt("Enter name");
```

## Location

```javascript
location.href

location.reload()

location.assign("https://google.com")
```

## Navigator

```javascript
navigator.userAgent

navigator.language

navigator.onLine
```

---

# 3. Fetch API

Used to make HTTP requests.

## GET Request

```javascript
fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(data => console.log(data));
```

## POST Request

```javascript
fetch(url,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
title:"Hello"
})
});
```

---

# 4. Storage API

## Local Storage

Stores data permanently.

```javascript
localStorage.setItem("name","John");

localStorage.getItem("name");

localStorage.removeItem("name");

localStorage.clear();
```

---

## Session Storage

Stores data until tab closes.

```javascript
sessionStorage.setItem("age",20);

sessionStorage.getItem("age");
```

---

# 5. Events API

## Click Event

```javascript
button.addEventListener("click",function(){
console.log("Clicked");
});
```

## Keyboard Event

```javascript
document.addEventListener("keydown",(e)=>{
console.log(e.key);
});
```

## Input Event

```javascript
input.addEventListener("input",(e)=>{
console.log(e.target.value);
});
```

---

# 6. Timers API

## setTimeout()

```javascript
setTimeout(()=>{
console.log("Hello");
},2000);
```

## setInterval()

```javascript
const id=setInterval(()=>{
console.log("Running");
},1000);

clearInterval(id);
```

---

# 7. Geolocation API

```javascript
navigator.geolocation.getCurrentPosition((position)=>{
console.log(position.coords.latitude);
console.log(position.coords.longitude);
});
```

---

# 8. Clipboard API

Copy Text

```javascript
navigator.clipboard.writeText("Hello");
```

Read Text

```javascript
navigator.clipboard.readText()
.then(text=>console.log(text));
```

---

# 9. Drag and Drop API

```javascript
element.draggable = true;

element.addEventListener("dragstart",()=>{});

element.addEventListener("drop",()=>{});
```

---

# 10. Canvas API

```javascript
const canvas=document.getElementById("canvas");

const ctx=canvas.getContext("2d");

ctx.fillStyle="blue";

ctx.fillRect(50,50,200,100);
```

---

# 11. Web Audio API

```javascript
const audio=new Audio("song.mp3");

audio.play();

audio.pause();
```

---

# 12. History API

```javascript
history.back();

history.forward();

history.go(-1);
```

---

# 13. URL API

```javascript
const url=new URL(window.location);

console.log(url.hostname);

console.log(url.pathname);
```

---

# 14. File API

```javascript
input.addEventListener("change",(e)=>{
const file=e.target.files[0];

console.log(file.name);

console.log(file.size);
});
```

---

# 15. Notification API

```javascript
Notification.requestPermission();

new Notification("Hello!");
```

---

# 16. WebSocket API

```javascript
const socket=new WebSocket("ws://localhost:8080");

socket.onopen=()=>{
console.log("Connected");
};

socket.onmessage=(event)=>{
console.log(event.data);
};
```

---

# 17. Intersection Observer API

```javascript
const observer=new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
console.log(entry.isIntersecting);
});
});

observer.observe(document.querySelector(".box"));
```

---

# 18. Mutation Observer API

```javascript
const observer=new MutationObserver((mutations)=>{
console.log(mutations);
});

observer.observe(document.body,{
childList:true,
subtree:true
});
```

---

# 19. Web Workers API

main.js

```javascript
const worker=new Worker("worker.js");

worker.postMessage("Hello");

worker.onmessage=(e)=>{
console.log(e.data);
};
```

worker.js

```javascript
onmessage=(e)=>{
postMessage("Received: "+e.data);
};
```

---

# Common APIs Used in Web Development

| API | Purpose |
|------|---------|
| DOM API | Manipulate HTML |
| Fetch API | HTTP Requests |
| Local Storage API | Store Data |
| Events API | User Interaction |
| Clipboard API | Copy/Paste |
| Geolocation API | User Location |
| Canvas API | Graphics |
| History API | Browser Navigation |
| File API | File Upload |
| WebSocket API | Real-time Communication |
| Notification API | Browser Notifications |
| Web Workers API | Background Processing |

---

# Interview Questions

### Q1. What is an API?

An API is a set of functions provided by the browser or JavaScript runtime that allows JavaScript to interact with external features like the DOM, storage, network, files, and more.

---

### Q2. Difference between Local Storage and Session Storage?

| Local Storage | Session Storage |
|---------------|-----------------|
| Permanent | Temporary |
| Shared across tabs (same origin) | Limited to current tab |
| No expiry | Cleared when tab closes |

---

### Q3. Difference between Fetch API and XMLHttpRequest?

- Fetch is Promise-based.
- Cleaner syntax.
- Easier async/await support.
- Modern replacement for XMLHttpRequest.

---

### Q4. What is the DOM API?

The DOM API allows JavaScript to create, remove, update, and manipulate HTML elements.

---

### Q5. What is the BOM?

The Browser Object Model provides APIs to interact with the browser, such as `window`, `location`, `navigator`, and `history`.

---

# Best Practices

- Prefer `querySelector()` and `querySelectorAll()` for flexible element selection.
- Use `addEventListener()` instead of inline event handlers.
- Use `fetch()` with `async/await` for cleaner asynchronous code.
- Store only small, non-sensitive data in Local Storage.
- Always handle errors with `try...catch` or `.catch()`.
- Request user permission before using APIs like Geolocation or Notifications.

---

# Summary

JavaScript APIs enable interaction with browser features beyond the language itself. Mastering the DOM, Fetch, Events, Storage, Timers, and Browser APIs is essential for modern frontend development and is frequently tested in interviews.