# JavaScript Objects: Beginner to Advanced 🚀
*A Complete Coder's Guide*

---

# Table of Contents

1. What is an Object?
2. Why Objects?
3. Creating Objects
4. Accessing Properties
5. Dot Operator (`.`)
6. Bracket Notation (`[]`)
7. Adding Properties
8. Updating Properties
9. Deleting Properties
10. Checking Property Existence
11. Objects vs Variables
12. Nested Objects
13. Object Methods
14. `this` Keyword
15. Object References
16. Copying Objects
17. Object Destructuring
18. Spread Operator
19. Object.keys()
20. Object.values()
21. Object.entries()
22. for...in Loop
23. Object.freeze()
24. Object.seal()
25. Optional Chaining
26. Nullish Coalescing
27. Computed Properties
28. Property Shorthand
29. Object Constructor
30. Factory Functions
31. Constructor Functions
32. Classes vs Objects
33. Object.create()
34. Prototype
35. Object.assign()
36. Deep Copy
37. Advanced Interview Questions

---

# 1. What is an Object?

An object is a collection of related data stored as **key-value pairs**.

Think of it as a real-world object.

Example:

Person

- Name → Raushan
- Age → 20
- City → Bangalore

JavaScript Object

```javascript
const person = {
    name: "Raushan",
    age: 20,
    city: "Bangalore"
};
```

Here,

```
name  -> key
Raushan -> value
```

Everything is stored in pairs.

```
key : value
```

---

# Why Objects?

Without Objects

```javascript
const name = "Raushan";
const age = 20;
const city = "Bangalore";
```

Imagine having 100 variables.

Instead

```javascript
const person = {
    name: "Raushan",
    age: 20,
    city: "Bangalore"
};
```

Everything stays together.

---

# 2. Creating Objects

## Method 1 (Most Common)

```javascript
const student = {
    name: "Rahul",
    age: 21,
    marks: 95
};
```

---

## Method 2

Using new Object()

```javascript
const student = new Object();

student.name = "Rahul";
student.age = 21;
```

---

## Method 3

Empty Object

```javascript
const car = {};
```

Later

```javascript
car.brand = "BMW";
car.price = 5000000;
```

---

# 3. Accessing Properties

There are two ways.

## 1. Dot Operator

```javascript
const person = {
    name: "Raushan",
    age: 20
};

console.log(person.name);
console.log(person.age);
```

Output

```
Raushan
20
```

Syntax

```
object.property
```

---

## 2. Bracket Notation

```javascript
console.log(person["name"]);
console.log(person["age"]);
```

Output

```
Raushan
20
```

Syntax

```
object["property"]
```

---

# Which One Should You Use?

Dot notation

```javascript
person.name
```

Bracket notation

```javascript
person["name"]
```

Dot notation is easier.

Bracket notation is more powerful.

---

# Dot Operator Explained

Suppose

```javascript
const student = {
    name: "Amit",
    age: 21
};
```

When JavaScript sees

```javascript
student.name
```

It means

```
Go to student object

↓

Find property called "name"

↓

Return value
```

Memory

```
student

+----------------+
| name : Amit    |
| age  : 21      |
+----------------+

student.name

↓

Amit
```

---

# Updating Property

```javascript
student.age = 25;
```

Now

```
age = 25
```

---

# Adding Property

```javascript
student.city = "Delhi";
```

Object becomes

```javascript
{
    name: "Amit",
    age: 25,
    city: "Delhi"
}
```

---

# Deleting Property

```javascript
delete student.age;
```

Result

```javascript
{
    name: "Amit"
}
```

---

# Property Doesn't Exist

```javascript
console.log(student.salary);
```

Output

```
undefined
```

No error.

---

# Why Bracket Notation Exists?

Suppose

```javascript
const student = {
    name: "Rahul"
};

const key = "name";
```

Now

```javascript
student.key
```

Output

```
undefined
```

Because JavaScript literally searches

```
key
```

Instead

```javascript
student[key]
```

Output

```
Rahul
```

Because

```
key variable

↓

"name"

↓

student["name"]
```

---

# Dynamic Properties

```javascript
const property = "age";

const person = {
    name: "Raushan",
    age: 20
};

console.log(person[property]);
```

Output

```
20
```

Impossible using dot notation.

---

# Properties with Space

```javascript
const student = {
    "first name": "Rahul"
};
```

Wrong

```javascript
student.first name
```

Correct

```javascript
student["first name"]
```

---

# Properties Starting with Number

```javascript
const obj = {
    "123": "Hello"
};
```

Access

```javascript
obj["123"];
```

---

# Special Characters

```javascript
const obj = {
    "@name": "Raushan"
};
```

Access

```javascript
obj["@name"];
```

---

# Nested Objects

```javascript
const student = {

    name: "Raushan",

    address: {

        city: "Bangalore",

        state: "Karnataka"

    }

};
```

Access

```javascript
student.address.city
```

Output

```
Bangalore
```

Chain

```
student

↓

address

↓

city

↓

Bangalore
```

---

# Objects Inside Objects

```javascript
const company = {

    CEO: {

        name: "John",

        address: {

            city: "London"
        }

    }

};
```

Access

```javascript
company.CEO.address.city
```

---

# Object Methods

Objects can store functions.

```javascript
const student = {

    name: "Raushan",

    sayHello() {

        console.log("Hello");

    }

};

student.sayHello();
```

Output

```
Hello
```

---

# Another Method

```javascript
const student = {

    greet: function () {

        console.log("Hi");

    }

};
```

---

# this Keyword

```javascript
const person = {

    name: "Raushan",

    greet() {

        console.log(this.name);

    }

};
```

Output

```
Raushan
```

this means

```
Current Object
```

---

# Object Reference

```javascript
const person = {

    name: "Rahul"

};

const another = person;
```

Memory

```
person ----\
            \
             Object
            /
another ---/
```

Changing

```javascript
another.name = "Amit";
```

Both become

```
Amit
```

Because both variables point to the same object.

---

# Comparing Objects

```javascript
{} == {}
```

Output

```
false
```

Because different memory locations.

---

# Copy Object

Wrong

```javascript
const b = a;
```

Correct

```javascript
const b = {...a};
```

or

```javascript
Object.assign({}, a);
```

---

# Spread Operator

```javascript
const person = {

    name: "Raushan",

    age: 20

};

const copy = {

    ...person

};
```

---

# Merge Objects

```javascript
const a = {

    x: 10

};

const b = {

    y: 20

};

const c = {

    ...a,

    ...b

};
```

Output

```javascript
{
    x:10,
    y:20
}
```

---

# Object Destructuring

Without

```javascript
const name = person.name;
const age = person.age;
```

With destructuring

```javascript
const { name, age } = person;
```

---

# Rename Variables

```javascript
const { name: fullName } = person;

console.log(fullName);
```

---

# Default Value

```javascript
const {

    salary = 0

} = person;
```

---

# Object.keys()

```javascript
const person = {

    name: "Raushan",

    age: 20

};

console.log(Object.keys(person));
```

Output

```
["name","age"]
```

---

# Object.values()

```javascript
Object.values(person);
```

Output

```
["Raushan",20]
```

---

# Object.entries()

```javascript
Object.entries(person);
```

Output

```
[
 ["name","Raushan"],
 ["age",20]
]
```

---

# for...in Loop

```javascript
for (const key in person) {

    console.log(key);

}
```

Output

```
name

age
```

Value

```javascript
for (const key in person) {

    console.log(person[key]);

}
```

---

# Computed Property

```javascript
const key = "age";

const person = {

    [key]: 20

};
```

Result

```javascript
{
    age:20
}
```

---

# Property Shorthand

Instead of

```javascript
const name = "Raushan";

const age = 20;

const person = {

    name: name,

    age: age

};
```

Use

```javascript
const person = {

    name,

    age

};
```

---

# Object.freeze()

```javascript
const person = {

    name: "Raushan"

};

Object.freeze(person);
```

Now

```javascript
person.name = "Amit";
```

Ignored.

Cannot

- Add
- Delete
- Update

---

# Object.seal()

Can

✔ Update

Cannot

❌ Delete

❌ Add

---

# Optional Chaining

Without

```javascript
person.address.city
```

If address doesn't exist

```
Error
```

Safe

```javascript
person.address?.city
```

Output

```
undefined
```

---

# Nullish Coalescing

```javascript
const city = person.city ?? "Unknown";
```

If city

```
null

or

undefined
```

Then

```
Unknown
```

---

# Factory Function

```javascript
function createStudent(name, age) {

    return {

        name,

        age

    };

}

const s1 = createStudent("Rahul",20);
```

---

# Constructor Function

```javascript
function Student(name, age){

    this.name = name;

    this.age = age;

}

const s1 = new Student("Rahul",20);
```

---

# Classes

```javascript
class Student{

    constructor(name, age){

        this.name = name;

        this.age = age;

    }

}

const s = new Student("Rahul",20);
```

---

# Object.create()

```javascript
const animal = {

    eat(){

        console.log("Eating");

    }

};

const dog = Object.create(animal);

dog.eat();
```

---

# Prototype

Every object has an internal prototype.

```
dog

↓

animal

↓

Object

↓

null
```

If property isn't found,

JavaScript searches up the prototype chain.

---

# Deep Copy

Nested objects need deep copying.

```javascript
const clone = structuredClone(person);
```

or

```javascript
const clone = JSON.parse(JSON.stringify(person));
```

(JSON method has limitations, such as not preserving functions, Dates, Maps, Sets, `undefined`, etc.)

---

# Object.assign()

```javascript
const copy = Object.assign({}, person);
```

Merge

```javascript
const result = Object.assign({}, obj1, obj2);
```

---

# Interview Questions

## Q1

Difference between dot and bracket notation?

Answer

| Dot | Bracket |
|------|----------|
| Easy | Dynamic |
| Faster to write | Variable keys |
| Cannot use spaces | Can use spaces |
| Cannot compute names | Computed properties |

---

## Q2

Difference between Object.freeze() and Object.seal()

| Freeze | Seal |
|---------|------|
| No update | Update allowed |
| No add | No add |
| No delete | No delete |

---

## Q3

Difference between Shallow Copy and Deep Copy

Shallow

```
Nested objects are shared.
```

Deep

```
Everything copied independently.
```

---

## Q4

Why does `{}` === `{}` return false?

Because objects are compared by **reference (memory address)**, not by their contents.

```javascript
{} === {} // false

const a = {};
const b = a;

a === b // true
```

---

# Best Practices

✔ Use `const` for objects unless you need to reassign the variable.

✔ Prefer dot notation when the property name is known.

✔ Use bracket notation for dynamic property names or invalid identifiers.

✔ Use object destructuring for cleaner code.

✔ Use the spread operator (`...`) for shallow copies.

✔ Use `structuredClone()` when you need a deep copy of supported data types.

✔ Avoid mutating objects unless necessary.

✔ Understand that objects are passed by reference.

---

# Practice Exercises

### Easy

1. Create a `student` object with `name`, `age`, and `marks`.
2. Print each property using dot notation.
3. Print each property using bracket notation.
4. Add a `city` property.
5. Update the `marks`.
6. Delete the `age` property.

### Medium

1. Create a nested `address` object.
2. Loop through all properties using `for...in`.
3. Print all keys using `Object.keys()`.
4. Print all values using `Object.values()`.
5. Destructure the object into variables.

### Advanced

1. Build a `createEmployee()` factory function.
2. Create an `Employee` constructor function.
3. Implement the same using a `class`.
4. Use `Object.create()` to share methods through a prototype.
5. Compare shallow and deep copying with nested objects.
6. Implement a simple inventory system using objects, nested objects, methods, destructuring, optional chaining, and the spread operator.

---

# Final Roadmap

```
Objects
│
├── Creation
│   ├── {}
│   ├── new Object()
│   └── Object.create()
│
├── Access
│   ├── .
│   └── []
│
├── Modification
│   ├── Add
│   ├── Update
│   └── Delete
│
├── Traversal
│   ├── for...in
│   ├── Object.keys()
│   ├── Object.values()
│   └── Object.entries()
│
├── Utility
│   ├── Destructuring
│   ├── Spread (...)
│   ├── Object.assign()
│   ├── Optional Chaining (?.)
│   └── Nullish Coalescing (??)
│
├── Protection
│   ├── Object.freeze()
│   └── Object.seal()
│
├── Object-Oriented Patterns
│   ├── Factory Functions
│   ├── Constructor Functions
│   ├── Classes
│   └── Prototypes
│
└── Advanced
    ├── Reference vs Value
    ├── Shallow Copy
    ├── Deep Copy
    ├── Prototype Chain
    └── Interview Questions
```