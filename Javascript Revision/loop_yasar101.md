# JavaScript Loops: Complete Guide

Loops in JavaScript are used to repeat a block of code until a specified condition is met. Choose the right loop based on whether you're iterating over numbers, arrays, objects, or iterable collections.

---

## 1. Traditional for Loop

Best when you know how many times you need to loop in advance.

for (let i = 0; i < 5; i++) {
  console.log(`Index: ${i}`);
}

* Initialization (let i = 0): Runs once before the loop starts.
* Condition (i < 5): Evaluated before each iteration. If true, the loop runs; if false, it stops.
* Final Expression (i++): Runs at the end of each iteration to update the loop variable.

---

## 2. while & do...while Loops

### while Loop
Best when you don't know how many times the loop will run, and execution depends on a dynamic condition evaluated before the loop.

let count = 0;
while (count < 3) {
  console.log(`Count is: ${count}`);
  count++;
}

### do...while Loop
Guarantees the code block runs at least once before checking the condition.

let count = 5;
do {
  console.log(`This runs at least once even if count is ${count}`);
  count++;
} while (count < 3);

---

## 3. for...of Loop (Iterables: Arrays, Strings, Sets)

Best for iterating through the values of an array, string, or other iterable objects.

const fruits = ['Apple', 'Banana', 'Cherry'];

for (const fruit of fruits) {
  console.log(fruit);
}
// Output: Apple, Banana, Cherry

> Tip: for...of cannot directly loop over plain objects ({}). Use it for collections and arrays instead.

---

## 4. for...in Loop (Object Properties)

Best for iterating over the keys (properties) of an object.

const user = {
  name: 'Alice',
  age: 28,
  role: 'Developer'
};

for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}
// Output: 
// name: Alice
// age: 28
// role: Developer

> Warning: Avoid using for...in on arrays because it iterates over property keys (indexes) as strings. Use for...of instead.

---

## 5. Modern Array Iterators

JavaScript provides higher-order methods on arrays:

### forEach()
Runs a function once for each element in an array.

const numbers = [10, 20, 30];
numbers.forEach((num, index) => {
  console.log(`Index ${index}: ${num}`);
});

### map()
Transforms every item in an array and returns a new array.

const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]

### filter()
Returns a new array containing only elements that pass a test condition.

const ages = [12, 18, 25, 8, 30];
const adults = ages.filter(age => age >= 18);
console.log(adults); // [18, 25, 30]

---

## 6. Loop Control: break and continue

* break: Exits the loop immediately.
* continue: Skips the current iteration and moves to the next one.

for (let i = 1; i <= 6; i++) {
  if (i === 3) continue; // Skip number 3
  if (i === 5) break;    // Stop loop completely at 5
  console.log(i);
}
// Output: 1, 2, 4

---

## Summary & Best Practices

| Loop Type | Best Used For | Notes |
| :--- | :--- | :--- |
| for | Known iteration counts / numerical index | Full control over index increments |
| while | Conditional running (unknown loop count) | Check condition before running |
| do...while | Guaranteed first execution | Check condition after running |
| for...of | Array elements, Strings, Sets | Reads values directly |
| for...in | Object keys / key-value mapping | Iterates object properties |
| forEach/map | Functional operations on arrays | Clean, modern syntax |