# JavaScript Prototype

## What is a Prototype?

A **Prototype** is an object from which other objects inherit properties and methods.

In JavaScript, **every object has a hidden link to another object called its prototype**.

This is known as **Prototype Inheritance**.

Simply put:

> A prototype allows one object to access the properties and methods of another object.

---

# Real-Life Analogy

Imagine a classroom.

- Every student has their own **name** and **roll number**.
- But all students share common methods like:
  - Attend Class
  - Submit Assignment
  - Give Exam

Instead of storing these methods inside every student object, JavaScript stores them once in a prototype, and all student objects use them.

```
Student Object
      │
      ▼
Student Prototype
      │
      ▼
Object Prototype
      │
      ▼
null
```

---

# Why Do We Need Prototypes?

Without prototypes, every object would store duplicate copies of the same methods.

### Without Prototype

```javascript
const user1 = {
    name: "Samarth",
    greet: function () {
        console.log("Hello");
    }
};

const user2 = {
    name: "Rahul",
    greet: function () {
        console.log("Hello");
    }
};
```

Both objects have their own copy of `greet()`.

This wastes memory.

---

### With Prototype

```javascript
function User(name) {
    this.name = name;
}

User.prototype.greet = function () {
    console.log("Hello");
};

const user1 = new User("Samarth");
const user2 = new User("Rahul");

user1.greet();
user2.greet();
```

Only **one copy** of `greet()` exists.

---

# Prototype Chain

Every object has a prototype.

Example

```javascript
const person = {
    name: "Samarth"
};

console.log(person.__proto__);
```

Output

```
Object Prototype
```

Prototype Chain

```
person
   │
   ▼
Object.prototype
   │
   ▼
null
```

---

# Object Prototype

Every object ultimately inherits from `Object.prototype`.

Example

```javascript
const person = {
    name: "Samarth"
};

console.log(person.toString());
```

Although `toString()` is not inside `person`, it works because it comes from `Object.prototype`.

---

# Understanding __proto__

`__proto__` refers to the prototype of an object.

```javascript
const obj = {};

console.log(obj.__proto__);
```

Output

```
Object.prototype
```

> **Note:** `__proto__` is widely supported but considered legacy. Prefer using `Object.getPrototypeOf()` and `Object.setPrototypeOf()` in modern JavaScript.

---

# Object.getPrototypeOf()

```javascript
const obj = {};

console.log(Object.getPrototypeOf(obj));
```

Output

```
Object.prototype
```

---

# Constructor Functions

Before ES6 classes, JavaScript used constructor functions.

```javascript
function Student(name) {
    this.name = name;
}

const s1 = new Student("Samarth");
```

The `new` keyword creates a new object and links it to `Student.prototype`.

---

# Prototype Property

Every function has a `prototype` property.

```javascript
function Student() {}

console.log(Student.prototype);
```

Output

```
{}
```

This object becomes the prototype for instances created using `new Student()`.

---

# Adding Methods to Prototype

```javascript
function Student(name) {
    this.name = name;
}

Student.prototype.sayHello = function () {
    console.log("Hello " + this.name);
};

const s1 = new Student("Samarth");

s1.sayHello();
```

Output

```
Hello Samarth
```

---

# Prototype Inheritance

```javascript
const animal = {
    eat() {
        console.log("Eating...");
    }
};

const dog = Object.create(animal);

dog.bark = function () {
    console.log("Barking...");
};

dog.eat();
dog.bark();
```

Output

```
Eating...
Barking...
```

---

# Object.create()

Creates a new object using another object as its prototype.

```javascript
const person = {
    greet() {
        console.log("Hello");
    }
};

const student = Object.create(person);

student.greet();
```

Output

```
Hello
```

---

# hasOwnProperty()

Checks whether a property belongs directly to the object.

```javascript
const person = {
    name: "Samarth"
};

console.log(person.hasOwnProperty("name"));
```

Output

```
true
```

Example

```javascript
console.log(person.hasOwnProperty("toString"));
```

Output

```
false
```

Because `toString()` comes from the prototype.

---

# Prototype Lookup

```javascript
const person = {
    name: "Samarth"
};

console.log(person.toString());
```

JavaScript searches like this

```
person

↓

Object.prototype

↓

null
```

---

# Class and Prototype

ES6 Classes still use prototypes internally.

```javascript
class Student {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("Hello");
    }
}

const s1 = new Student("Samarth");
```

Behind the scenes

```javascript
Student.prototype.greet = function () {
    console.log("Hello");
};
```

Classes are syntactic sugar over prototypes.

---

# Prototype vs Instance Properties

```javascript
function Student(name) {
    this.name = name;
}

Student.prototype.college = "ABC University";

const s1 = new Student("Samarth");

console.log(s1.name);
console.log(s1.college);
```

Output

```
Samarth
ABC University
```

`name` belongs to the object.

`college` comes from the prototype.

---

# Method Overriding

```javascript
function Animal() {}

Animal.prototype.sound = function () {
    console.log("Animal Sound");
};

const dog = new Animal();

dog.sound = function () {
    console.log("Bark");
};

dog.sound();
```

Output

```
Bark
```

The object's own method overrides the prototype method.

---

# Checking Prototype

```javascript
const arr = [];

console.log(Object.getPrototypeOf(arr) === Array.prototype);
```

Output

```
true
```

---

# Prototype Chain Example

```
Array Instance

↓

Array.prototype

↓

Object.prototype

↓

null
```

---

# Built-in Prototypes

JavaScript has built-in prototypes for many objects.

```
Array.prototype

String.prototype

Number.prototype

Object.prototype

Function.prototype

Date.prototype

Map.prototype

Set.prototype
```

Example

```javascript
const arr = [1, 2, 3];

arr.push(4);
```

`push()` exists in `Array.prototype`.

---

# Advantages of Prototypes

- Memory efficient
- Supports inheritance
- Reuse methods across objects
- Faster than duplicating methods
- Foundation of JavaScript's object model

---

# Disadvantages

- Prototype chains can be confusing for beginners
- Deep inheritance can make debugging harder
- Modifying built-in prototypes is discouraged

---

# Common Interview Questions

## 1. What is a Prototype?

A prototype is an object from which other objects inherit properties and methods.

---

## 2. What is Prototype Inheritance?

It is JavaScript's mechanism where objects inherit properties and methods from another object through the prototype chain.

---

## 3. Difference between Prototype and Class?

| Prototype | Class |
|------------|-------|
| Native inheritance mechanism | Syntax introduced in ES6 |
| Functions use `prototype` | Classes are syntactic sugar over prototypes |
| More explicit | Cleaner and easier to read |

---

## 4. What is the Prototype Chain?

The process JavaScript uses to look up properties by traversing an object's prototype links until it finds the property or reaches `null`.

---

## 5. Difference between `__proto__` and `prototype`?

| `__proto__` | `prototype` |
|--------------|-------------|
| Property of an object | Property of a function |
| Points to the object's prototype | Used as the prototype for instances created with `new` |

---

## 6. Why use `Object.create()`?

It creates a new object with a specified prototype, enabling inheritance without constructor functions.

---

## 7. Are ES6 classes prototype-based?

Yes. Classes are syntactic sugar over JavaScript's prototype system.

---

# Mini Project

## Student Management System

### Requirements

Create a `Student` constructor with:

- `name`
- `rollNo`

Add prototype methods:

- `study()`
- `attendClass()`
- `submitAssignment()`

Create multiple student objects and verify that all share the same methods through the prototype.

---

# Assignment

## Beginner

1. Create a constructor function for `Car`.
2. Add a `start()` method using the prototype.
3. Create two car objects and call `start()`.

---

## Intermediate

1. Create a `Person` constructor.
2. Add `greet()` and `walk()` to its prototype.
3. Verify that the methods are shared among instances.

---

## Advanced

Build a simple **Library Management System** using constructor functions and prototypes.

Features:

- Add books.
- Borrow books.
- Return books.
- Display available books.
- Ensure all methods are defined on the prototype rather than inside the constructor.

---

# Summary

- Every JavaScript object has an associated prototype.
- Prototypes enable objects to inherit properties and methods.
- Constructor functions use the `prototype` property to share methods across instances.
- JavaScript searches for properties through the prototype chain.
- ES6 classes are built on top of the prototype system.
- Prototypes improve memory efficiency by avoiding duplicate method definitions.