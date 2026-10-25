# JavaScript Functions

## What is a Function?

A **function** is a reusable block of code that performs a specific task. Functions help reduce code duplication and make programs easier to maintain.

---

# Function Syntax

```javascript
function functionName(parameters) {
    // Code to execute
    return value;
}
```

### Example

```javascript
function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("John"));
```

**Output:**

```
Hello, John!
```

---

# Types of Functions

## 1. Function Declaration

```javascript
function add(a, b) {
    return a + b;
}

console.log(add(5, 3));
```

---

## 2. Function Expression

```javascript
const multiply = function(a, b) {
    return a * b;
};

console.log(multiply(4, 5));
```

---

## 3. Arrow Function (ES6)

```javascript
const subtract = (a, b) => {
    return a - b;
};

console.log(subtract(10, 3));
```

### Short Form

```javascript
const square = x => x * x;

console.log(square(6));
```

---

## 4. Anonymous Function

```javascript
setTimeout(function() {
    console.log("Executed after 2 seconds");
}, 2000);
```

---

## 5. Immediately Invoked Function Expression (IIFE)

```javascript
(function() {
    console.log("IIFE Executed");
})();
```

---

# Parameters and Arguments

```javascript
function welcome(name, age) {
    console.log(name + " is " + age + " years old.");
}

welcome("Alice", 25);
```

---

# Default Parameters

```javascript
function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet();
greet("David");
```

---

# Return Statement

```javascript
function sum(a, b) {
    return a + b;
}

let result = sum(15, 20);
console.log(result);
```

---

# Rest Parameters

```javascript
function total(...numbers) {
    let sum = 0;

    for (let num of numbers) {
        sum += num;
    }

    return sum;
}

console.log(total(1, 2, 3, 4, 5));
```

---

# Callback Function

```javascript
function display(message) {
    console.log(message);
}

function processUser(callback) {
    callback("User processed successfully.");
}

processUser(display);
```

---

# Higher-Order Function

```javascript
function calculate(a, b, operation) {
    return operation(a, b);
}

const add = (x, y) => x + y;

console.log(calculate(10, 20, add));
```

---

# Recursive Function

```javascript
function factorial(n) {
    if (n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(factorial(5));
```

---

# Function Scope

```javascript
let globalVar = "Global";

function test() {
    let localVar = "Local";
    console.log(globalVar);
    console.log(localVar);
}

test();
```

---

# Benefits of Functions

- Reusable code
- Easier debugging
- Better readability
- Modular programming
- Less code duplication
- Easier maintenance

---

# Summary

| Function Type | Example |
|--------------|---------|
| Function Declaration | `function add(){}` |
| Function Expression | `const add = function(){}` |
| Arrow Function | `const add = () => {}` |
| Anonymous Function | `function(){}` |
| IIFE | `(function(){})();` |
| Callback Function | Passed as an argument |
| Recursive Function | Calls itself |
| Higher-Order Function | Accepts or returns functions |


## Conclusion

Functions are one of the most important concepts in JavaScript. Mastering different types of functions and understanding how to use parameters, return values, callbacks, and arrow functions will help you write clean, reusable, and efficient code.
