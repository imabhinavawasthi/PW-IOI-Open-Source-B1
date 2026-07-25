# Object Prototype in JavaScript

## What is an Object Prototype?

A prototype is another object from which a JavaScript object inherits
properties and methods. Almost every object in JavaScript has an
internal link to a prototype object (`[[Prototype]]`).

## Why Prototypes?

-   Enables inheritance.
-   Reduces memory usage by sharing methods.
-   Forms the basis of JavaScript's prototype-based object model.

## Creating an Object

``` javascript
const person = {
  name: "Disha",
  greet() {
    console.log("Hello!");
  }
};
```

## Accessing a Prototype

``` javascript
console.log(Object.getPrototypeOf(person));
```

## Setting a Prototype

``` javascript
const animal = {
  eats: true
};

const dog = {
  barks: true
};

Object.setPrototypeOf(dog, animal);

console.log(dog.eats);   // true
console.log(dog.barks);  // true
```

## Constructor Functions and Prototypes

``` javascript
function Student(name) {
  this.name = name;
}

Student.prototype.sayHello = function () {
  console.log(`Hi, I am ${this.name}`);
};

const s1 = new Student("Disha");
s1.sayHello();
```

## Prototype Chain

If a property is not found on an object, JavaScript searches: 1. The
object itself. 2. Its prototype. 3. The prototype's prototype. 4.
Continues until `null`.

Example:

``` javascript
const grandParent = { a: 1 };
const parent = Object.create(grandParent);
parent.b = 2;

const child = Object.create(parent);
child.c = 3;

console.log(child.a); // 1
```

## Object.create()

Creates a new object with the specified prototype.

``` javascript
const personProto = {
  greet() {
    console.log("Hello!");
  }
};

const user = Object.create(personProto);
user.name = "Disha";

user.greet();
```

## hasOwnProperty()

Checks whether a property belongs directly to the object.

``` javascript
console.log(user.hasOwnProperty("name")); // true
console.log(user.hasOwnProperty("greet")); // false
```

## Important Prototype Methods

  Method                      Purpose
  --------------------------- ----------------------------------------------
  `Object.getPrototypeOf()`   Returns an object's prototype
  `Object.setPrototypeOf()`   Changes an object's prototype
  `Object.create()`           Creates an object with a specified prototype
  `hasOwnProperty()`          Checks if a property is directly owned

## Advantages

-   Memory efficient
-   Supports inheritance
-   Reusable methods
-   Easy to extend objects

## Disadvantages

-   Deep prototype chains can slow property lookup.
-   Changing prototypes at runtime is generally discouraged for
    performance.

## Summary

-   Every JavaScript object has a prototype (except objects with `null`
    prototype).
-   Objects inherit properties and methods through the prototype chain.
-   Constructor functions use the `prototype` property to share methods.
-   `Object.create()` is a clean way to implement prototype-based
    inheritance.
