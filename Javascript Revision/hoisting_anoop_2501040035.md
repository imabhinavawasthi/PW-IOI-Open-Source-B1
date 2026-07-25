# Hoisting in JavaScript

**Author:** Anoop  
**Course:** B.Tech CSE  
**Subject:** JavaScript  
**Topic:** Hoisting

---

# Table of Contents

1. Introduction
2. What is Hoisting?
3. How Hoisting Works
4. Hoisting with `var`
5. Hoisting with `let`
6. Hoisting with `const`
7. Function Hoisting
8. Function Expression Hoisting
9. Arrow Function Hoisting
10. Temporal Dead Zone (TDZ)
11. Examples
12. Advantages
13. Disadvantages
14. Best Practices
15. Interview Questions
16. Conclusion
17. References

---

# 1. Introduction

Hoisting is one of the most important concepts in JavaScript. It refers to JavaScript's behavior of moving declarations to the top of their scope before code execution. However, only declarations are hoisted—not initializations.

Understanding hoisting helps developers avoid unexpected bugs and write cleaner, more predictable code.

---

# 2. What is Hoisting?

**Definition:**

> Hoisting is JavaScript's default behavior of moving variable and function declarations to the top of their scope during the compilation phase.

This does **not** mean the code is physically moved. Instead, JavaScript stores declarations in memory before executing the code.

Example:

```javascript
console.log(a);
var a = 10;
```

JavaScript interprets it as:

```javascript
var a;
console.log(a);
a = 10;
```

Output:

```
undefined
```

---

# 3. How Hoisting Works

JavaScript executes code in two phases:

## Phase 1: Memory Creation Phase

- Variables are allocated memory.
- Function declarations are stored completely.
- `var` variables are initialized with `undefined`.
- `let` and `const` remain uninitialized.

## Phase 2: Execution Phase

- Code executes line by line.
- Values are assigned.
- Functions are called.

---

# 4. Hoisting with `var`

Variables declared using `var` are hoisted and initialized with `undefined`.

Example:

```javascript
console.log(city);

var city = "Delhi";
```

Output:

```
undefined
```

Equivalent code:

```javascript
var city;

console.log(city);

city = "Delhi";
```

---

# 5. Hoisting with `let`

Variables declared using `let` are hoisted but remain in the **Temporal Dead Zone (TDZ)** until initialized.

Example:

```javascript
console.log(age);

let age = 20;
```

Output:

```
ReferenceError
```

---

# 6. Hoisting with `const`

`const` behaves like `let`.

Example:

```javascript
console.log(PI);

const PI = 3.14;
```

Output:

```
ReferenceError
```

---

# 7. Function Hoisting

Function declarations are fully hoisted.

Example:

```javascript
greet();

function greet() {
    console.log("Hello");
}
```

Output:

```
Hello
```

Because JavaScript stores the entire function during memory creation.

---

# 8. Function Expression Hoisting

Example:

```javascript
sayHello();

var sayHello = function () {
    console.log("Hello");
};
```

Output:

```
TypeError: sayHello is not a function
```

Reason:

```javascript
var sayHello = undefined;
```

Only the variable is hoisted, not the function assigned to it.

---

# 9. Arrow Function Hoisting

Example:

```javascript
show();

const show = () => {
    console.log("Arrow Function");
};
```

Output:

```
ReferenceError
```

Arrow functions assigned to `let` or `const` are not usable before declaration.

---

# 10. Temporal Dead Zone (TDZ)

The **Temporal Dead Zone** is the time between entering a block scope and the point where a `let` or `const` variable is declared.

Example:

```javascript
{
    console.log(name);

    let name = "Anoop";
}
```

Output:

```
ReferenceError
```

Visualization:

```
Block Starts
     |
     |  TDZ
     |
Declaration
     |
Variable Initialized
```

---

# 11. Examples

## Example 1

```javascript
console.log(x);

var x = 5;
```

Output

```
undefined
```

---

## Example 2

```javascript
console.log(y);

let y = 5;
```

Output

```
ReferenceError
```

---

## Example 3

```javascript
hello();

function hello() {
    console.log("Hi");
}
```

Output

```
Hi
```

---

## Example 4

```javascript
hello();

var hello = function () {
    console.log("Hi");
};
```

Output

```
TypeError
```

---

## Example 5

```javascript
function demo() {
    console.log(a);

    var a = 100;
}

demo();
```

Output

```
undefined
```

---

# 12. Comparison Table

| Feature | var | let | const |
|----------|-----|-----|--------|
| Hoisted | Yes | Yes | Yes |
| Initialized | undefined | No | No |
| TDZ | No | Yes | Yes |
| Redeclaration | Allowed | Not Allowed | Not Allowed |
| Reassignment | Allowed | Allowed | Not Allowed |
| Scope | Function | Block | Block |

---

# 13. Advantages of Hoisting

- Enables function calls before declarations.
- Simplifies JavaScript execution.
- Helps JavaScript prepare memory before execution.
- Improves flexibility with function declarations.

---

# 14. Disadvantages of Hoisting

- Can produce unexpected `undefined` values.
- Causes confusion for beginners.
- Makes debugging harder.
- Leads to bugs when using `var`.

---

# 15. Best Practices

- Prefer `let` and `const` instead of `var`.
- Declare variables before using them.
- Use `const` whenever values should not change.
- Avoid relying on hoisting.
- Place function declarations before function calls for readability.

---

# 16. Common Interview Questions

### Q1. What is hoisting?

Hoisting is JavaScript's behavior of moving declarations to the top of their scope before execution.

---

### Q2. Are `let` and `const` hoisted?

Yes. They are hoisted but remain inaccessible until initialized because of the Temporal Dead Zone.

---

### Q3. Why does `var` print `undefined`?

Because `var` is initialized with `undefined` during the memory creation phase.

---

### Q4. Why are function declarations callable before they are defined?

Because JavaScript stores the complete function in memory before execution.

---

### Q5. What is the Temporal Dead Zone?

The period between entering a scope and declaring a `let` or `const` variable, during which the variable cannot be accessed.

---

# 17. Conclusion

Hoisting is a core JavaScript concept that affects how variables and functions behave before execution. While all declarations are hoisted, their behavior differs based on whether they use `var`, `let`, `const`, or function declarations. Understanding hoisting and the Temporal Dead Zone helps developers write more reliable and maintainable JavaScript code.

---

# 18. References

1. MDN Web Docs – JavaScript Hoisting
2. ECMAScript (ECMA-262) Specification
3. JavaScript.info – Variables and Hoisting
4. W3Schools – JavaScript Variables
5. FreeCodeCamp – JavaScript Hoisting Guide

---