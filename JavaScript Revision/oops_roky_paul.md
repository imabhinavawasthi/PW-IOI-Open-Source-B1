# JavaScript OOP (Object-Oriented Programming) - Revision Notes

---

# What is OOP?

Object-Oriented Programming (OOP) is a programming paradigm where we organize code using **objects**.

An object contains:

- Properties (Data)
- Methods (Functions)

Example:

```javascript
const person = {
  name: "Roky",
  age: 20,

  greet() {
    console.log("Hello");
  },
};
```

---

# Why OOP?

Instead of writing separate variables and functions,

❌

```javascript
let name = "Roky";
let age = 20;

function greet() {}
```

We group everything together.

✅

```javascript
const person = {
  name: "Roky",
  age: 20,

  greet() {},
};
```

Benefits

- Code Reusability
- Better Organization
- Easier Maintenance
- Scalability

---

# Four Pillars of OOP

1. Encapsulation
2. Abstraction
3. Inheritance
4. Polymorphism

---

# Objects

An object is a collection of key-value pairs.

```javascript
const student = {
  name: "Roky",
  age: 20,
  course: "JavaScript",
};
```

Access

```javascript
console.log(student.name);

console.log(student["age"]);
```

---

# Methods

Functions inside objects are called methods.

```javascript
const person = {
  name: "Roky",

  greet() {
    console.log("Hello");
  },
};

person.greet();
```

---

# The 'this' Keyword

`this` refers to the object that calls the method.

```javascript
const person = {
  name: "Roky",

  greet() {
    console.log(this.name);
  },
};

person.greet();
```

Output

```
Roky
```

---

# Constructor Function

Before ES6 classes, objects were created using constructor functions.

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p1 = new Person("Roky", 20);
```

`new` keyword

- Creates a new object
- Links prototype
- Assigns `this`
- Returns object

---

# ES6 Classes

Class is a blueprint for creating objects.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello");
  }
}

const p1 = new Person("Roky", 20);
```

---

# Constructor

Special method called automatically.

```javascript
class Car {
  constructor(name) {
    this.name = name;
  }
}
```

Runs when

```javascript
new Car("BMW");
```

---

# Creating Multiple Objects

```javascript
class Student {
  constructor(name) {
    this.name = name;
  }
}

const s1 = new Student("Roky");
const s2 = new Student("Rahul");
```

---

# Encapsulation

Combining data and methods inside one class/object.

```javascript
class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }
}
```

---

# Private Fields

Modern JavaScript supports private properties.

```javascript
class Bank {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new Bank();

account.deposit(1000);

console.log(account.getBalance());
```

Cannot access

```javascript
account.#balance;
```

---

# Abstraction

Hide unnecessary implementation details.

```javascript
class CoffeeMachine {
  makeCoffee() {
    this.#boilWater();
    console.log("Coffee Ready");
  }

  #boilWater() {
    console.log("Boiling...");
  }
}
```

User only calls

```javascript
machine.makeCoffee();
```

---

# Inheritance

One class inherits another.

```javascript
class Animal {
  eat() {
    console.log("Eating");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Bark");
  }
}

const dog = new Dog();

dog.eat();
dog.bark();
```

---

# super()

Calls parent constructor.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
}

const dog = new Dog("Tommy");
```

---

# Method Overriding

Child replaces parent method.

```javascript
class Animal {
  sound() {
    console.log("Animal Sound");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Bark");
  }
}

new Dog().sound();
```

Output

```
Bark
```

---

# Polymorphism

Same method behaves differently.

```javascript
class Animal {
  sound() {
    console.log("Animal");
  }
}

class Cat extends Animal {
  sound() {
    console.log("Meow");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Bark");
  }
}
```

---

# Static Methods

Belong to class, not object.

```javascript
class MathHelper {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathHelper.add(5, 10));
```

Cannot do

```javascript
const obj = new MathHelper();

obj.add();
```

---

# Getters

Access like properties.

```javascript
class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
}

const p = new Person("Roky");

console.log(p.name);
```

---

# Setters

Update value with validation.

```javascript
class Person {
  set age(value) {
    if (value > 0) {
      this._age = value;
    }
  }
}
```

---

# Prototype

Every object has a prototype.

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log("Hello");
};

const p = new Person("Roky");

p.sayHello();
```

---

# Prototype Chain

```
Object
   ▲
Animal
   ▲
Dog
   ▲
dog object
```

JavaScript searches upward until property is found.

---

# instanceof

Checks inheritance.

```javascript
dog instanceof Dog;

dog instanceof Animal;

dog instanceof Object;
```

Returns

```
true
true
true
```

---

# Object.create()

Creates object with prototype.

```javascript
const animal = {
  eat() {
    console.log("Eating");
  },
};

const dog = Object.create(animal);

dog.eat();
```

---

# Object.assign()

Copies properties.

```javascript
const a = { x: 10 };
const b = { y: 20 };

const c = Object.assign({}, a, b);
```

---

# Object.freeze()

Cannot modify object.

```javascript
const user = {
  name: "Roky",
};

Object.freeze(user);

user.name = "Rahul";
```

---

# Object.seal()

Can modify existing properties.

Cannot

- Add new
- Delete existing

---

# Factory Function

Alternative to classes.

```javascript
function createUser(name) {
  return {
    name,

    greet() {
      console.log("Hello");
    },
  };
}

const user = createUser("Roky");
```

---

# Class vs Constructor Function

| Class          | Constructor Function |
| -------------- | -------------------- |
| ES6            | Before ES6           |
| Cleaner syntax | Function based       |
| Easier to read | More verbose         |

---

# Object vs Class

| Class             | Object              |
| ----------------- | ------------------- |
| Blueprint         | Real instance       |
| Defines structure | Holds actual values |

---

# Common Mistakes

### Forgetting new

❌

```javascript
const p = Person("Roky");
```

✅

```javascript
const p = new Person("Roky");
```

---

### Losing this

❌

```javascript
const greet = person.greet;

greet();
```

`this` becomes undefined (in strict mode).

---

### Accessing Private Field

❌

```javascript
account.#balance;
```

Only accessible inside the class.

---

# Interview Questions

1. What is OOP?
2. What are the four pillars of OOP?
3. Difference between object and class?
4. What is encapsulation?
5. What is abstraction?
6. What is inheritance?
7. What is polymorphism?
8. Difference between constructor function and class?
9. What is `this`?
10. What is a prototype?
11. What is the prototype chain?
12. What is `super()`?
13. Difference between static and instance methods?
14. Difference between getters and setters?
15. What is `instanceof`?

---

# Quick Revision

- OOP organizes code using objects.
- Object = Properties + Methods.
- Class = Blueprint for objects.
- Constructor initializes objects.
- `this` refers to the current object.
- `new` creates an object.
- Encapsulation groups data and methods.
- Abstraction hides implementation.
- Inheritance enables code reuse using `extends`.
- Polymorphism allows the same method to behave differently.
- `super()` calls the parent constructor or methods.
- Static methods belong to the class.
- Getters and setters control property access.
- Prototypes enable inheritance in JavaScript.
- `instanceof` checks an object's inheritance.
- `Object.freeze()` makes an object immutable.
- `Object.seal()` prevents adding or deleting properties.
