# JavaScript Event Handling

## Introduction

JavaScript applications are **event-driven**, meaning they respond to user interactions such as button clicks, keypresses, mouse movements, form submissions, or page loads. Instead of executing code strictly sequentially, JavaScript waits for specific actions to occur and executes code in response.

An **Event** is a signal from the browser that something has happened, and **Event Handling** is the process of capturing that event and executing a specific function (an **event handler** or **listener**).

Think of an Event Listener as a doorbell—it stays completely idle until a visitor presses the button, at which point it immediately triggers a chime.

---

## Why Do We Need Event Handling?

Before modern event handling methods were standardized, web applications relied on **inline HTML event attributes** to handle user interactions.

### Inline Event Example

```html
<button onclick="alert('Button clicked!'); doSomethingElse();">
    Click Me
</button>
```

This creates tightly coupled, messy code commonly known as **Inline Pollution** or **Spaghetti Code**.

Problems with inline handlers include:

- Blurs the separation of concerns (HTML layout vs. JS logic)
- Difficult to read and maintain
- Only one handler function can be attached per event
- Hard to debug in large applications

Modern Event Handling solves these issues by providing a structured, decoupled, and maintainable approach.

---

# What is an Event Listener?

An **Event Listener** is a mechanism that attaches a function call to a specific DOM element for a designated event type.

When an event occurs, it passes through three propagation phases:

```
Capturing Phase (Window ---> Target)
       |
       +-------> Target Phase (At the Target Element)
       |
       +-------> Bubbling Phase (Target ---> Window)
```

### Capturing Phase

The event originates at the `window` level and travels down through ancestor elements to the target.

### Target Phase

The event reaches the exact element on which the interaction occurred (`event.target`).

### Bubbling Phase

The event bubbles up from the target element through all its parent elements back to the `window`.

---

# Registering an Event Listener

An event listener is attached using the modern `addEventListener()` method.

```javascript
element.addEventListener(event, listener, options);
```

The method receives three primary arguments:

- `event`: A string representing the event name (e.g., `'click'`, `'keydown'`).
- `listener`: The callback function executed when the event occurs.
- `options` *(optional)*: An object or boolean configuring capture mode, passive execution, or single-run execution (`once`).

---

## Example

```javascript
const button = document.querySelector("#submitBtn");

button.addEventListener("click", () => {
    console.log("Button clicked successfully!");
});
```

---

# The Event Object

When an event triggers, the browser automatically passes an **`Event` object** to the listener callback containing context about the interaction.

```javascript
const button = document.querySelector("#btn");

button.addEventListener("click", (event) => {
    console.log(event.type);      // "click"
    console.log(event.target);    // <button id="btn">
});
```

---

## Common Properties of the Event Object

- `event.target`: References the exact element that triggered the event.
- `event.currentTarget`: References the element to which the listener is attached.
- `event.type`: Returns the name of the event (e.g., `'click'`).
- `event.timeStamp`: Returns the time (in milliseconds) at which the event occurred.

---

# Preventing Default Behavior & Stopping Bubbling

Handlers often need to modify the standard execution flow.

---

## preventDefault()

Cancels the default browser action associated with the event (e.g., stopping form reloads or hyperlink navigation).

```javascript
const link = document.querySelector("a");

link.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Navigation cancelled!");
});
```

---

## stopPropagation()

Stops the event from bubbling up through parent DOM elements.

```javascript
const button = document.querySelector("#innerBtn");

button.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("Propagation stopped at button");
});
```

---

# Removing Event Listeners

To prevent memory leaks and clean up unused listeners, use `removeEventListener()`.

```javascript
function handleClick() {
    console.log("Clicked!");
}

const button = document.querySelector("#btn");

// Attach
button.addEventListener("click", handleClick);

// Remove
button.removeEventListener("click", handleClick);
```

*Note: You must pass a named function reference. Anonymous functions cannot be removed.*

---

# Event Delegation

**Event Delegation** is a performance optimization pattern where a single event listener is attached to a parent element rather than binding listeners to multiple child elements individually.

```javascript
const list = document.querySelector("#taskList");

list.addEventListener("click", (event) => {
    if (event.target && event.target.nodeName === "LI") {
        console.log("Clicked on item:", event.target.textContent);
    }
});
```

Advantages of Event Delegation:

- Significantly reduces memory footprint
- Works automatically for dynamically added elements

---

# Common Event Categories

| Category | Event Name | Description |
| :--- | :--- | :--- |
| **Mouse** | `click`, `dblclick`, `mousemove` | User mouse actions |
| **Keyboard** | `keydown`, `keyup` | Key presses and releases |
| **Form** | `submit`, `input`, `change` | Form field interactions |
| **Window** | `DOMContentLoaded`, `resize` | Document readiness or viewport changes |

---

# Event Handling vs Promises

| Feature | Event Handling | Promises |
| :--- | :--- | :--- |
| **Occurrences** | Can fire multiple times | Resolves or rejects **only once** |
| **Use Case** | UI interaction (clicks, keypresses) | Asynchronous tasks (API requests, timers) |
| **Cancellation** | Handlers can be removed | State is immutable once settled |

---

# Best Practices

- Prefer `addEventListener()` over inline HTML attributes (`onclick`) or element properties (`btn.onclick`).
- Use **Event Delegation** for lists and dynamic child elements.
- Always handle `event.preventDefault()` when building custom submit logic for forms.
- Remove event listeners when unmounting UI elements to prevent memory leaks.
- Keep event handlers lightweight; delegate heavy processing using throttling or debouncing.

---

# Summary

Event handling enables interactive web experiences by capturing browser interactions and executing relevant code.

Key concepts include:

- **Propagation:** Capturing, Target, and Bubbling phases
- **Delegation:** Attaching a single listener to parent elements for efficiency
- **Event Object:** Accessing `target`, `preventDefault()`, and `stopPropagation()`

Mastering Event Handling is essential before building complex dynamic interfaces and working with modern frontend libraries like React, Vue, or Angular.