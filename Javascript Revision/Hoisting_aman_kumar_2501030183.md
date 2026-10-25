# JavaScript Hoisting

## 📌 What is Hoisting?

**Hoisting** is JavaScript's default behavior where **variable and function declarations** are moved to the top of their scope during the **Memory Creation Phase** before the code executes.

> **Important:** Hoisting only moves **declarations**, not **initializations**.

---

# Execution Phases

Whenever JavaScript runs a program, it works in two phases:

## 1. Memory Creation Phase

- Memory is allocated for variables and functions.
- Variables get initial values.
- Functions are stored completely.

## 2. Execution Phase

- Code executes line by line.
- Variables get assigned values.
- Functions are called.

---

# Hoisting with var

```javascript
console.log(a);

var a = 10;

console.log(a);
```

### Output

```
undefined
10
```

### What JavaScript does internally

```javascript
var a;

console.log(a);

a = 10;

console.log(a);
```

### Explanation

During Memory Phase

```
a → undefined
```

During Execution Phase

```
a = 10
```

That's why the first output is **undefined**.

---

# Hoisting with let

```javascript
console.log(b);

let b = 20;
```

### Output

```
ReferenceError:
Cannot access 'b' before initialization
```

### Why?

`let` is also hoisted, but it stays inside the **Temporal Dead Zone (TDZ)** until initialization.

---

# Hoisting with const

```javascript
console.log(c);

const c = 30;
```

### Output

```
ReferenceError
```

### Explanation

`const` behaves exactly like `let`.

Difference:

- Must be initialized while declaring.
- Cannot be reassigned.

---

# Temporal Dead Zone (TDZ)

TDZ is the time between

```
Scope starts
↓
Variable declared
↓
Variable initialized
```

Until initialization, the variable cannot be accessed.

Example

```javascript
{
    console.log(age);

    let age = 22;
}
```

Output

```
ReferenceError
```

---

# Function Hoisting

## Function Declaration

```javascript
greet();

function greet() {
    console.log("Hello");
}
```

Output

```
Hello
```

### Why?

Entire function is hoisted.

Internally

```javascript
function greet() {
    console.log("Hello");
}

greet();
```

---

# Function Expression

```javascript
sayHi();

var sayHi = function () {
    console.log("Hi");
};
```

Output

```
TypeError:
sayHi is not a function
```

Internally

```javascript
var sayHi;

sayHi();

sayHi = function () {
    console.log("Hi");
};
```

During memory

```
sayHi = undefined
```

Calling

```
undefined()
```

causes

```
TypeError
```

---

# Arrow Function

```javascript
hello();

const hello = () => {
    console.log("Hello");
};
```

Output

```
ReferenceError
```

Because

```
hello
```

is inside TDZ.

---

# var vs let vs const

| Feature | var | let | const |
|----------|-----|-----|--------|
| Hoisted | ✅ | ✅ | ✅ |
| Accessible before declaration | Yes (`undefined`) | No | No |
| TDZ | ❌ | ✅ | ✅ |
| Reassign | ✅ | ✅ | ❌ |
| Redeclare | ✅ | ❌ | ❌ |
| Scope | Function | Block | Block |

---

# Memory Representation

Example

```javascript
console.log(a);
console.log(b);

var a = 10;
let b = 20;
```

Memory Phase

```
a → undefined

b → TDZ
```

Execution

```
console.log(a)
→ undefined

console.log(b)
→ ReferenceError
```

---

# Interview Questions

## Q1. Is let hoisted?

Yes.

But it stays inside TDZ.

---

## Q2. Is const hoisted?

Yes.

But it also stays inside TDZ.

---

## Q3. Why does var print undefined?

Because only declaration is hoisted.

Initialization happens later.

---

## Q4. Which function is fully hoisted?

Function Declaration

```javascript
function test(){}
```

---

## Q5. Are arrow functions hoisted?

No.

The variable is hoisted but not initialized.

---

## Q6. Difference between undefined and ReferenceError?

### undefined

Variable exists.

Value not assigned.

```javascript
console.log(a);

var a = 5;
```

Output

```
undefined
```

### ReferenceError

Variable is inside TDZ.

```javascript
console.log(a);

let a = 5;
```

Output

```
ReferenceError
```

---

# Common Mistake

```javascript
console.log(num);

let num = 100;
```

Wrong because

```
num
```

is inside TDZ.

---

# Quick Revision

✅ Hoisting happens before execution.

✅ Only declarations are hoisted.

✅ var → undefined

✅ let → TDZ

✅ const → TDZ

✅ Function Declaration → Fully Hoisted

✅ Function Expression → Not callable before initialization

✅ Arrow Function → Not callable before initialization

---

# Memory Trick

```
var
↓
undefined

let
↓
TDZ

const
↓
TDZ + Initialization Required

Function Declaration
↓
Fully Hoisted

Function Expression
↓
Not Hoisted Completely

Arrow Function
↓
Not Hoisted Completely
```

---

# One-Line Summary

> **Hoisting means JavaScript moves declarations to the top of their scope before execution, but only `var` can be accessed before initialization (as `undefined`), while `let` and `const` remain in the Temporal Dead Zone until initialized.**