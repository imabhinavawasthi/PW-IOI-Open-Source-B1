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

console.log(items);
console.log(items[0]);
```

---

## 3. getElementsByTagName()

Returns all elements with the specified tag.

```javascript
let paragraphs = document.getElementsByTagName("p");
```

---

## 4. querySelector()

Returns the first matching element.

```javascript
document.querySelector("#heading");

document.querySelector(".text");

document.querySelector("p");
```

---

## 5. querySelectorAll()

Returns a NodeList.

```javascript
let list = document.querySelectorAll(".text");
```

---

# Changing Content

## innerText

Returns only visible text.

```javascript
element.innerText = "Welcome";
```

---

## textContent

Returns all text including hidden text.

```javascript
element.textContent = "Hello";
```

---

## innerHTML

Reads or writes HTML.

```javascript
element.innerHTML = "<b>Bold Text</b>";
```

---

# Changing Attributes

## getAttribute()

```html
<img id="img" src="cat.jpg">
```

```javascript
let image = document.getElementById("img");

console.log(image.getAttribute("src"));
```

---

## setAttribute()

```javascript
image.setAttribute("src", "dog.jpg");
```

---

## removeAttribute()

```javascript
image.removeAttribute("src");
```

---

# Changing Styles

```javascript
element.style.color = "red";

element.style.backgroundColor = "yellow";

element.style.fontSize = "30px";
```

---

# Working with Classes

## className

```javascript
element.className = "container";
```

---

## classList.add()

```javascript
element.classList.add("active");
```

---

## classList.remove()

```javascript
element.classList.remove("active");
```

---

## classList.toggle()

```javascript
element.classList.toggle("dark");
```

---

## classList.contains()

```javascript
element.classList.contains("active");
```

Returns:

```
true
false
```

---

# Creating Elements

```javascript
let div = document.createElement("div");
```

---

# Adding Content

```javascript
div.innerText = "Hello";
```

---

# Append Elements

## appendChild()

```javascript
document.body.appendChild(div);
```

---

## append()

```javascript
parent.append(child);
```

Supports multiple nodes.

---

# Insert Before

```javascript
parent.insertBefore(newElement, existingElement);
```

---

# Remove Elements

## remove()

```javascript
element.remove();
```

---

## removeChild()

```javascript
parent.removeChild(child);
```

---

# Replacing Elements

```javascript
parent.replaceChild(newElement, oldElement);
```

---

# Parent Traversal

```javascript
element.parentElement;

element.parentNode;
```

---

# Child Traversal

```javascript
parent.children;

parent.firstElementChild;

parent.lastElementChild;
```

---

# Sibling Traversal

```javascript
element.nextElementSibling;

element.previousElementSibling;
```

---

# Event Handling

## onclick

```javascript
button.onclick = function () {
    alert("Clicked");
};
```

---

## addEventListener()

```javascript
button.addEventListener("click", function () {
    alert("Clicked");
});
```

---

# Common Events

| Event | Description |
|--------|-------------|
| click | Mouse click |
| dblclick | Double click |
| mouseover | Mouse enters |
| mouseout | Mouse leaves |
| keydown | Key pressed |
| keyup | Key released |
| input | Input changes |
| submit | Form submitted |
| change | Value changed |

---

# Event Object

```javascript
button.addEventListener("click", function (event) {

    console.log(event);

});
```

Useful properties:

```javascript
event.target

event.type

event.clientX

event.clientY
```

---

# Prevent Default

```javascript
form.addEventListener("submit", function (event) {

    event.preventDefault();

});
```

---

# Event Bubbling

Events propagate from child to parent.

```html
<div>
    <button>Click</button>
</div>
```

Clicking the button also triggers the div event unless propagation is stopped.

```javascript
event.stopPropagation();
```

---

# HTMLCollection vs NodeList

| HTMLCollection | NodeList |
|---------------|----------|
| Live collection | Static collection |
| Returned by getElementsByClassName() | Returned by querySelectorAll() |
| Updates automatically | Does not update automatically |
| No forEach() in older browsers | Supports forEach() |

---

# Common DOM Methods

| Method | Purpose |
|---------|----------|
| getElementById() | Select by ID |
| getElementsByClassName() | Select by class |
| getElementsByTagName() | Select by tag |
| querySelector() | First matching element |
| querySelectorAll() | All matching elements |
| createElement() | Create element |
| appendChild() | Add child |
| append() | Append element |
| remove() | Remove element |
| removeChild() | Remove child |
| replaceChild() | Replace child |
| setAttribute() | Set attribute |
| getAttribute() | Get attribute |
| removeAttribute() | Remove attribute |

---

# Mini Example

### HTML

```html
<button id="btn">Change Text</button>

<h1 id="heading">Hello</h1>
```

### JavaScript

```javascript
let button = document.getElementById("btn");

let heading = document.getElementById("heading");

button.addEventListener("click", function () {

    heading.innerText = "Welcome to DOM Manipulation";

    heading.style.color = "blue";

});
```

---

# Best Practices

- Prefer `querySelector()` and `querySelectorAll()` for flexibility.
- Use `addEventListener()` instead of inline event handlers.
- Avoid excessive DOM manipulation inside loops.
- Cache frequently used DOM elements in variables.
- Use `classList` instead of modifying `className` directly.
- Validate user input before updating the DOM.
- Keep JavaScript separate from HTML whenever possible.

---

# Summary

DOM Manipulation enables JavaScript to create dynamic and interactive web pages by allowing developers to:

- Select elements
- Modify content
- Change styles
- Manage attributes
- Create and remove elements
- Navigate the DOM tree
- Handle user events
- Build responsive and interactive user interfaces
