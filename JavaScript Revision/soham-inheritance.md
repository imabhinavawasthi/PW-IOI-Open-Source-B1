JavaScript Inheritance

Inheritance in JavaScript is a feature that allows one object or class to reuse the properties and methods of another, promoting code reusability and reducing duplication.

JavaScript uses prototype-based inheritance, where objects inherit from other objects through the prototype chain. With ES6, inheritance can also be implemented using the class and extends keywords, making it easier to create parent-child relationships between classes.

Example
class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog barks");
  }
}

const d = new Dog();

d.speak(); // Inherited method
d.bark();  // Own method
Advantages
Promotes code reuse
Reduces code duplication
Makes code easier to maintain
Supports hierarchical relationships between classes and objects