# JavaScript Data Types

JavaScript has **8 data types**. They are divided into **Primitive** and **Non-Primitive (Reference)** types.

---

# 1. Primitive Data Types

Primitive data types store a **single value** and are **immutable**.

## 1. Number
- Used for integers and decimal numbers.
- Example:

```javascript
let age = 20;
let price = 99.99;
```

---

## 2. String
- Used to store text.
- Can be written using single quotes, double quotes, or backticks.

```javascript
let name = "Arin";
let city = 'Lucknow';
let msg = `Hello`;
```

---

## 3. Boolean
- Represents logical values.
- Values are only `true` or `false`.

```javascript
let isStudent = true;
let isLoggedIn = false;
```

---

## 4. Undefined
- A variable that has been declared but not assigned a value.

```javascript
let x;
console.log(x); // undefined
```

---

## 5. Null
- Represents an intentional empty value.

```javascript
let data = null;
```

---

## 6. BigInt
- Used for very large integers.

```javascript
let big = 1234567890123456789012345678901234567890n;
```

---

## 7. Symbol
- Used to create unique identifiers.

```javascript
let id = Symbol("id");
```

---

# 2. Non-Primitive (Reference) Data Type

## Object
- Stores data as key-value pairs.
- Arrays and functions are also objects in JavaScript.

### Object Example

```javascript
let student = {
  name: "Arin",
  age: 20
};
```

### Array Example

```javascript
let colors = ["Red", "Green", "Blue"];
```

### Function Example

```javascript
function greet() {
  console.log("Hello");
}
```

---

# Check Data Type

Use the `typeof` operator.

```javascript
console.log(typeof 10);          // "number"
console.log(typeof "Hello");     // "string"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (JavaScript bug)
console.log(typeof 10n);         // "bigint"
console.log(typeof Symbol());    // "symbol"
console.log(typeof {});          // "object"
console.log(typeof []);          // "object"
console.log(typeof function(){});// "function"
```

---

# Summary Table

| Data Type | Example |
|-----------|---------|
| Number | `10`, `3.14` |
| String | `"Hello"` |
| Boolean | `true`, `false` |
| Undefined | `let x;` |
| Null | `null` |
| BigInt | `123456789n` |
| Symbol | `Symbol("id")` |
| Object | `{name: "Arin"}` |
| Array | `[1, 2, 3]` |
| Function | `function(){}` |

---

# Interview Points

- JavaScript has **8 data types**.
- Primitive types are stored **by value**.
- Objects are stored **by reference**.
- `typeof null` returns `"object"` due to a historical JavaScript bug.
- Arrays are technically **objects**.
- Functions are a special type of **object**.
