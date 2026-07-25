# DOM Manipulation

## What is the DOM?

**DOM (Document Object Model)** is a programming interface for HTML documents. It represents the webpage as a tree of objects, allowing JavaScript to access, modify, add, or remove HTML elements dynamically.

Example:

```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Example</title>
</head>
<body>
    <h1 id="title">Hello World</h1>
</body>
</html>
```

DOM Structure:

```
Document
│
└── html
    ├── head
    │   └── title
    └── body
        └── h1
```

---

# Why DOM Manipulation?

DOM Manipulation allows JavaScript to:

- Change HTML content
- Change CSS styles
- Create new elements
- Delete elements
- Handle user events
- Build interactive websites

---

# Selecting Elements

## 1. getElementById()

Selects an element by its ID.

```html
<h1 id="heading">Hello</h1>
```

```javascript
let element = document.getElementById("heading");
console.log(element);
```

---

## 2. getElementsByClassName()

Returns an HTMLCollection.

```html
<p class="text">One</p>
<p class="text">Two</p>
```

```javascript
let items = document.getElementsByClassName("text");
