# Understanding Scope in JavaScript

## What is Scope?

**Scope** determines where a variable can be accessed in a JavaScript program. It defines the visibility and lifetime of variables, functions, and objects. Understanding scope is essential for writing clean, maintainable, and bug-free code.

---

## Types of Scope

### 1. Global Scope

Variables declared outside any function or block are in the **global scope**. They can be accessed from anywhere in the program.

```javascript
let language = "JavaScript";

function greet() {
  console.log(language);
}

greet(); // JavaScript
console.log(language); // JavaScript
```

---

### 2. Function Scope

Variables declared with `var` inside a function are only accessible within that function.

```javascript
function displayMessage() {
  var message = "Hello!";
  console.log(message);
}

displayMessage(); // Hello!
// console.log(message); // Error: message is not defined
```

---

### 3. Block Scope

Variables declared using `let` or `const` are limited to the block (`{}`) in which they are declared.

```javascript
if (true) {
  let age = 20;
  const country = "India";
  console.log(age, country);
}

// console.log(age);     // Error
// console.log(country); // Error
```

---

## `var` vs `let` vs `const`

| Keyword | Scope    | Can be Reassigned | Can be Redeclared |
| ------- | -------- | ----------------- | ----------------- |
| `var`   | Function | Yes               | Yes               |
| `let`   | Block    | Yes               | No                |
| `const` | Block    | No                | No                |

---

## Lexical Scope

JavaScript uses **lexical (static) scope**, meaning a function can access variables from the scope in which it was defined.

```javascript
let outer = "Outside";

function first() {
  function second() {
    console.log(outer);
  }
  second();
}

first(); // Outside
```

---

## Scope Chain

When JavaScript looks for a variable, it searches:

1. The current scope.
2. The parent (outer) scope.
3. The global scope.

If the variable is not found, a `ReferenceError` is thrown.

---

## Best Practices

- Prefer `let` and `const` over `var`.
- Keep variables in the smallest scope possible.
- Use `const` by default, and `let` only when reassignment is required.
- Avoid creating unnecessary global variables.

---

## Conclusion

Scope controls where variables are accessible in a JavaScript program. The three main types are **global scope**, **function scope**, and **block scope**. Since JavaScript follows **lexical scoping**, understanding how scopes are nested helps developers write cleaner, safer, and more predictable code.
