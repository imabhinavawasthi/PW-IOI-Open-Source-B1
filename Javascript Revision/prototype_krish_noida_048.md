# JavaScript Prototypes and Prototypal Inheritance

## Introduction

JavaScript is often described as a **prototype-based language**. Unlike traditional Object-Oriented Programming (OOP) languages like Java, C++, or C# that use **class-based inheritance**, JavaScript objects inherit properties and methods directly from other objects through a mechanism called **Prototypes**.

Even with the introduction of the `class` keyword in ES6 (ECMAScript 2015), JavaScript's underlying inheritance model remains prototype-based. Classes are merely **syntactic sugar** built on top of prototypes.

---

## What is a Prototype?

In JavaScript, every object has an internal link to another object called its **Prototype**. 

When you try to access a property or method on an object:
1. JavaScript first searches for it directly on that object (**own properties**).
2. If it is not found, JavaScript searches the object's **prototype**.
3. This process continues up the chain until the property is found or the end of the prototype chain (`null`) is reached.

---

## Understanding `[[Prototype]]`, `__proto__`, and `prototype`

One of the most common sources of confusion in JavaScript is the difference between `[[Prototype]]`, `__proto__`, and the `.prototype` property.

### 1. `[[Prototype]]`
- An internal, hidden property of every JavaScript object.
- Points to the prototype object from which it inherits properties.
- Represented in ECMAScript specification as `[[Prototype]]`.

### 2. `__proto__` (dunder proto)
- An accessor property (getter/setter) exposed on `Object.prototype`.
- Historically used to access or modify an object's `[[Prototype]]`.
- **Note:** `__proto__` is now deprecated in favor of `Object.getPrototypeOf()` and `Object.setPrototypeOf()`.

### 3. `function.prototype`
- A property that exists **only on functions** (specifically constructor functions/regular functions, not arrow functions).
- It is **not** the prototype of the function itself. Instead, it is the object that will become the `[[Prototype]]` of any instance created using the `new` keyword with that function.

```
       [ Constructor Function: Person ]
                    |
              .prototype
                    |
                    v
          { constructor: Person, ... } <------+
                                              |
                                        [[Prototype]] / __proto__
                                              |
                                    [ Instance: john ]
```

---

## The Difference: `__proto__` vs `prototype`

| Property | Applies To | Purpose |
| :--- | :--- | :--- |
| `prototype` | Functions only (constructors) | Used as the prototype for objects created via `new Func()` |
| `__proto__` (`Object.getPrototypeOf`) | All objects | Points to the parent object (prototype) from which properties are inherited |

### Example

```javascript
function Person(name) {
  this.name = name;
}

const alex = new Person("Alex");

// alex is an object, so it has __proto__ (or [[Prototype]])
console.log(Object.getPrototypeOf(alex) === Person.prototype); // true

// Person is a function, so it has .prototype property
console.log(Person.prototype); // { constructor: f }

// Person itself is an object (Function instance), so its prototype is Function.prototype
console.log(Object.getPrototypeOf(Person) === Function.prototype); // true
```

---

## The Prototype Chain

The **Prototype Chain** is a series of linked objects. When looking up a property, JavaScript walks up this chain until it finds the property or reaches `null`.

### Prototype Chain Visualization

```
+------------------+
|   john (object)  |
|  name: "John"    |
+--------+---------+
         | [[Prototype]]
         v
+------------------+
| Person.prototype |
|  greet: fn()     |
+--------+---------+
         | [[Prototype]]
         v
+------------------+
| Object.prototype |
|  toString: fn()  |
+--------+---------+
         | [[Prototype]]
         v
       null  (End of chain)
```

### Property Lookup Mechanism Example

```javascript
const car = {
  wheels: 4
};

const electricCar = Object.create(car);
electricCar.battery = "100kWh";

console.log(electricCar.battery); // "100kWh" (Found on electricCar)
console.log(electricCar.wheels);  // 4        (Not on electricCar -> found on car prototype)
console.log(electricCar.color);   // undefined (Not found anywhere up to null)
```

---

## Property Shadowing

If an object defines a property with the exact same name as one present in its prototype, the object's own property **shadows** (overrides) the prototype's property.

```javascript
const user = {
  role: "Guest"
};

const admin = Object.create(user);
console.log(admin.role); // "Guest" (inherited from user)

// Shadowing the role property
admin.role = "Admin";
console.log(admin.role); // "Admin" (own property on admin)
console.log(user.role);  // "Guest" (original prototype property remains untouched)
```

---

## Methods of Creating Objects and Prototypes

### 1. Object Literals

Objects created using `{}` automatically have `Object.prototype` as their prototype.

```javascript
const obj = { a: 1 };
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true
```

### 2. Constructor Functions (`new` Keyword)

Before ES6 classes, constructor functions were the primary way to create reusable blueprints.

```javascript
function Animal(species) {
  this.species = species;
}

// Adding method to prototype for memory efficiency
Animal.prototype.makeSound = function() {
  console.log(`${this.species} makes a sound.`);
};

const dog = new Animal("Dog");
dog.makeSound(); // "Dog makes a sound."
```

#### Why attach methods to `.prototype`?
If methods are defined inside the constructor using `this.makeSound = function() {...}`, a new copy of the function is created in memory for every instance. Attaching to `.prototype` shares a **single memory reference** across all instances.

### 3. `Object.create()`

`Object.create(proto)` creates a new object and sets its `[[Prototype]]` directly to `proto`.

```javascript
const parent = {
  greet() {
    console.log(`Hello from ${this.name}`);
  }
};

const child = Object.create(parent);
child.name = "Sam";
child.greet(); // "Hello from Sam"
```

### 4. ES6 Classes

ES6 classes provide a cleaner syntax, but under the hood, they use prototype chain inheritance.

```javascript
class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }

  drive() {
    console.log(`Driving ${this.brand}`);
  }
}

const myCar = new Vehicle("Toyota");

console.log(typeof Vehicle); // "function"
console.log(Object.getPrototypeOf(myCar) === Vehicle.prototype); // true
```

---

## Prototypal Inheritance

Prototypal inheritance allows one object/constructor to inherit functionality from another.

### Traditional Constructor Inheritance (Pre-ES6)

```javascript
// Base / Parent Constructor
function Shape(name) {
  this.name = name;
}

Shape.prototype.describe = function() {
  return `This is a ${this.name}`;
};

// Sub / Child Constructor
function Circle(radius) {
  // Call parent constructor to inherit properties
  Shape.call(this, "Circle");
  this.radius = radius;
}

// Link prototypes
Circle.prototype = Object.create(Shape.prototype);

// Reset constructor pointer (Object.create overwrote it)
Circle.prototype.constructor = Circle;

// Add child-specific method
Circle.prototype.getArea = function() {
  return Math.PI * this.radius * this.radius;
};

const myCircle = new Circle(5);
console.log(myCircle.describe()); // "This is a Circle"
console.log(myCircle.getArea());  // 78.5398...
```

### ES6 `extends` and `super`

```javascript
class Shape {
  constructor(name) {
    this.name = name;
  }

  describe() {
    return `This is a ${this.name}`;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super("Circle"); // Calls Shape's constructor
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

const circle = new Circle(10);
console.log(circle.describe()); // "This is a Circle"
```

---

## Utility Methods for Working with Prototypes

### `Object.getPrototypeOf(obj)`
Returns the `[[Prototype]]` of the specified object.

```javascript
const obj = {};
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true
```

### `Object.setPrototypeOf(obj, newProto)`
Changes the prototype of an object. 

> ⚠️ **Warning:** Mutating the prototype of an object after creation can drastically slow down code due to browser engine optimization invalidation. Prefer `Object.create()` instead.

```javascript
const animal = { eats: true };
const rabbit = { jumps: true };

Object.setPrototypeOf(rabbit, animal);
console.log(rabbit.eats); // true
```

### `obj.hasOwnProperty(prop)` / `Object.hasOwn(obj, prop)`
Checks if a property exists directly on the object (not inherited through the prototype chain).

```javascript
const parent = { inheritedProp: 100 };
const child = Object.create(parent);
child.ownProp = 200;

console.log(child.hasOwnProperty("ownProp"));       // true
console.log(child.hasOwnProperty("inheritedProp")); // false

// ES2022 recommended alternative:
console.log(Object.hasOwn(child, "ownProp"));       // true
```

### `in` Operator
Checks if a property exists on the object **or anywhere in its prototype chain**.

```javascript
console.log("ownProp" in child);       // true
console.log("inheritedProp" in child); // true
console.log("toString" in child);      // true
```

### `instanceof` Operator
Tests whether the `prototype` property of a constructor appears anywhere in the prototype chain of an object.

```javascript
function Device() {}
const phone = new Device();

console.log(phone instanceof Device); // true
console.log(phone instanceof Object); // true
console.log(phone instanceof Array);  // false
```

---

## Objects Without a Prototype (`Object.create(null)`)

You can create an object with **no prototype** by passing `null` to `Object.create()`.

```javascript
const pureObject = Object.create(null);

console.log(Object.getPrototypeOf(pureObject)); // null
console.log(pureObject.toString); // undefined
```

### Use Case
Objects with `null` prototype do not contain any inherited properties or methods like `toString` or `valueOf`. This makes them ideal for safe map/dictionary objects that prevent **prototype pollution** issues or key collision bugs.

---

## Prototype Pollution

**Prototype Pollution** is a security vulnerability that occurs when an attacker modifies `Object.prototype`, injecting or overwriting properties that affect all objects across the application runtime.

### Example of Vulnerable Code

```javascript
function merge(target, source) {
  for (let key in source) {
    if (typeof target[key] === "object" && typeof source[key] === "object") {
      merge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

// Malicious input JSON payload
const maliciousPayload = JSON.parse('{"__proto__": {"isAdmin": true}}');

merge({}, maliciousPayload);

// Now all regular objects are polluted!
const regularUser = {};
console.log(regularUser.isAdmin); // true (Security Risk!)
```

### Prevention Strategies
1. **Validate Keys:** Reject keys like `__proto__`, `constructor`, and `prototype` during recursive object merges.
2. **Use Map objects:** Use modern `Map` data structure instead of plain objects for key-value stores.
3. **Use `Object.create(null)`:** Use objects without a prototype when building dictionary structures.
4. **Freeze Prototypes:** Freeze `Object.prototype` using `Object.freeze(Object.prototype)`.

---

## Summary & Key Takeaways

1. **Prototypes drive inheritance in JS:** All JavaScript objects inherit properties via the Prototype Chain.
2. **`prototype` vs `[[Prototype]]`:** `.prototype` is a function property used for instances created via `new`. `[[Prototype]]` (accessed via `Object.getPrototypeOf()`) is an object's link to its parent prototype.
3. **Memory Efficiency:** Attaching methods to `.prototype` ensures all instances share the same function reference rather than recreating functions in memory.
4. **Lookup Mechanism:** Property search goes from local object -> `[[Prototype]]` -> parent prototype -> ... -> `Object.prototype` -> `null`.
5. **Class Syntactic Sugar:** Modern `class` and `extends` syntax in ES6 is built directly on top of prototype delegation.
6. **Best Practices:** Avoid `__proto__` and `Object.setPrototypeOf()`. Use `Object.getPrototypeOf()` and `Object.create()`. Protect against prototype pollution.
