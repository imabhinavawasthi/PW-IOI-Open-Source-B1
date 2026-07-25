# JavaScript Polyfills — Detailed Concept & Interview Guide

## 1. What is a Polyfill?

A **polyfill** is JavaScript code that provides functionality that a browser or JavaScript environment does not support natively.

Suppose an older browser does not support:

```js
Array.prototype.map();
```

We can write our own implementation and attach it to `Array.prototype`. That implementation acts as a **polyfill**.

### Mental Model

Think of a polyfill as:

> "If JavaScript does not provide this feature, I will implement compatible behavior myself."

Polyfills are useful for:

- backward compatibility
- understanding JavaScript internals
- learning callbacks, prototypes, `this`, closures, and promises
- frontend/JavaScript interviews

---

## 2. Feature Detection

A real polyfill should normally be added **only when the native implementation is missing**.

```js
if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (callback) {
    // implementation
  };
}
```

For learning and interviews, custom names such as `myMap` are often safer than overwriting native methods.

---

# PART I — ARRAY POLYFILLS

## 3. `Array.prototype.map()`

### What does `map()` do?

`map()` goes through an array, applies a callback to each element, and returns a **new array** containing the callback results.

```js
const nums = [1, 2, 3];

const doubled = nums.map((num) => num * 2);

console.log(doubled);
// [2, 4, 6]
```

### Important Behavior

The callback receives:

```js
callback(currentValue, index, array);
```

`map()`:

- iterates through the array
- calls the callback
- stores each returned value
- returns a new array
- does not intentionally mutate the original array

### Basic Polyfill

```js
Array.prototype.myMap = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }

  return result;
};
```

Usage:

```js
const nums = [1, 2, 3];

const doubled = nums.myMap((num) => num * 2);

console.log(doubled);
```

### Why `this`?

When we write:

```js
nums.myMap(...)
```

inside `myMap`, `this` refers to `nums`.

Conceptually:

```text
this = nums
```

This idea appears repeatedly in prototype polyfills.

### More Native-Like Version

Native array methods account for sparse arrays. A closer implementation is:

```js
Array.prototype.myMap = function (callback, thisArg) {
  if (this == null) {
    throw new TypeError("Array.prototype.myMap called on null or undefined");
  }

  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  const arr = Object(this);
  const len = arr.length >>> 0;
  const result = new Array(len);

  for (let i = 0; i < len; i++) {
    if (i in arr) {
      result[i] = callback.call(thisArg, arr[i], i, arr);
    }
  }

  return result;
};
```

For interviews, start with the basic version unless the interviewer asks for native-like edge cases.

---

## 4. `Array.prototype.filter()`

`filter()` returns a new array containing only elements for which the callback returns a truthy value.

```js
const nums = [1, 2, 3, 4, 5];

const even = nums.filter((num) => num % 2 === 0);

console.log(even);
// [2, 4]
```

### Polyfill

```js
Array.prototype.myFilter = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};
```

### `map()` vs `filter()`

| Method     | Callback decides               | Output                           |
| ---------- | ------------------------------ | -------------------------------- |
| `map()`    | What value to store            | Usually same number of positions |
| `filter()` | Whether value should be stored | Zero or more matching elements   |

---

## 5. `Array.prototype.reduce()`

`reduce()` combines the elements of an array into a single accumulated result.

```js
const nums = [1, 2, 3, 4];

const sum = nums.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sum);
// 10
```

Callback arguments:

```js
callback(accumulator, currentValue, index, array);
```

### Mental Model

For:

```js
[1, 2, 3, 4].reduce((acc, curr) => acc + curr, 0);
```

execution looks like:

```text
acc = 0

0 + 1 -> 1
1 + 2 -> 3
3 + 3 -> 6
6 + 4 -> 10
```

### Polyfill

The tricky part is handling the optional `initialValue`.

```js
Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw new TypeError("Callback must be a function");
  }

  if (this.length === 0 && arguments.length < 2) {
    throw new TypeError("Reduce of empty array with no initial value");
  }

  let accumulator;
  let startIndex;

  if (arguments.length >= 2) {
    accumulator = initialValue;
    startIndex = 0;
  } else {
    accumulator = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    if (i in this) {
      accumulator = callback(accumulator, this[i], i, this);
    }
  }

  return accumulator;
};
```

### Important Interview Edge Case

These are different:

```js
arr.myReduce(callback);
```

and:

```js
arr.myReduce(callback, undefined);
```

In the second call, an initial value **was supplied**, even though its value is `undefined`. That is why `arguments.length` is useful.

---

## 6. `Array.prototype.forEach()`

`forEach()` executes a callback for each array element.

Unlike `map()`, it does not build and return a transformed array.

```js
Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};
```

Usage:

```js
[10, 20, 30].myForEach((value, index) => {
  console.log(index, value);
});
```

---

## 7. `Array.prototype.find()`

`find()` returns the **first value** satisfying the callback condition.

```js
Array.prototype.myFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }

  return undefined;
};
```

Example:

```js
const nums = [5, 12, 8, 130];

console.log(nums.myFind((num) => num > 10));
// 12
```

---

## 8. `Array.prototype.some()`

`some()` returns `true` if **at least one** element passes the test.

```js
Array.prototype.mySome = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }

  return false;
};
```

---

## 9. `Array.prototype.every()`

`every()` returns `true` only if **all** elements pass the test.

```js
Array.prototype.myEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }

  return true;
};
```

### `some()` vs `every()`

```text
some()  -> one success is enough
every() -> one failure is enough to return false
```

---

## 10. `Array.prototype.includes()`

```js
Array.prototype.myIncludes = function (searchElement) {
  for (let i = 0; i < this.length; i++) {
    if (
      this[i] === searchElement ||
      (Number.isNaN(this[i]) && Number.isNaN(searchElement))
    ) {
      return true;
    }
  }

  return false;
};
```

The `NaN` check matters because:

```js
NaN === NaN;
// false
```

but:

```js
[NaN].includes(NaN);
// true
```

---

# PART II — FUNCTION POLYFILLS

Before `call`, `apply`, and `bind`, understand one rule:

> Their main purpose is controlling what `this` refers to when a function executes.

Consider:

```js
function introduce(city) {
  console.log(this.name, city);
}

const person = {
  name: "Alex",
};
```

Normally `introduce` does not belong to `person`, but `call`, `apply`, and `bind` can execute it with `person` as `this`.

---

## 11. `Function.prototype.call()`

Native usage:

```js
introduce.call(person, "Bengaluru");
```

Inside `introduce`:

```text
this -> person
```

### Core Polyfill Idea

Temporarily make the function a method of the object:

```js
Function.prototype.myCall = function (context, ...args) {
  context = context ?? globalThis;

  const fn = Symbol("fn");

  context[fn] = this;

  const result = context[fn](...args);

  delete context[fn];

  return result;
};
```

### Why does this work?

Suppose:

```js
introduce.myCall(person, "Delhi");
```

Inside `myCall`:

```js
this === introduce;
```

We temporarily create behavior similar to:

```js
person.tempFunction = introduce;
person.tempFunction("Delhi");
```

Because the function is called as a method of `person`, its `this` becomes `person`.

### Why use `Symbol`?

Using:

```js
context.fn = this;
```

could overwrite an existing `fn` property.

A `Symbol` gives us a unique temporary property key.

---

## 12. `Function.prototype.apply()`

`apply()` is similar to `call()`, except arguments are provided as an array or array-like collection.

```js
introduce.apply(person, ["Bengaluru"]);
```

### Polyfill

```js
Function.prototype.myApply = function (context, args = []) {
  context = context ?? globalThis;

  const fn = Symbol("fn");
  context[fn] = this;

  const result = context[fn](...args);

  delete context[fn];

  return result;
};
```

### `call()` vs `apply()`

```js
fn.call(context, arg1, arg2, arg3);

fn.apply(context, [arg1, arg2, arg3]);
```

---

## 13. `Function.prototype.bind()`

`bind()` is different from `call()` and `apply()`.

`call()`:

```js
fn.call(obj);
```

executes immediately.

`bind()`:

```js
const newFn = fn.bind(obj);
```

returns a **new function** that can be executed later.

### Basic Polyfill

```js
Function.prototype.myBind = function (context, ...boundArgs) {
  const originalFunction = this;

  return function (...laterArgs) {
    return originalFunction.apply(context, [...boundArgs, ...laterArgs]);
  };
};
```

Example:

```js
function greet(greeting, punctuation) {
  console.log(greeting, this.name + punctuation);
}

const user = {
  name: "Alex",
};

const greetUser = greet.myBind(user, "Hello");

greetUser("!");
```

### Partial Application

Notice:

```js
greet.myBind(user, "Hello");
```

stores `"Hello"` now, while:

```js
greetUser("!");
```

provides another argument later.

This is called **partial application**.

### Advanced Interview Detail: Constructor Behavior

Native `bind()` also works with `new`. A production-like bind polyfill must preserve constructor semantics, making this considerably more complex than the basic interview implementation.

---

# PART III — PROMISE POLYFILLS

Promise polyfills test deeper JavaScript knowledge:

- asynchronous execution
- callbacks
- closures
- ordering
- fulfillment and rejection
- iterable processing

Before implementing Promise combinators, remember:

```js
Promise.resolve(value);
```

normalizes values.

If `value` is already a promise, it adopts that promise. If it is a normal value, it returns a fulfilled promise.

---

## 14. `Promise.all()`

### Behavior

`Promise.all()`:

- receives an iterable of values/promises
- waits for all to fulfill
- preserves **input order**
- rejects immediately when one input rejects

```js
Promise.all([
  Promise.resolve(10),
  Promise.resolve(20),
  Promise.resolve(30),
]).then(console.log);

// [10, 20, 30]
```

### Common Mistake

Do not simply `push()` results as promises finish.

If promise 3 finishes first, pushing would produce completion order instead of input order.

Use:

```js
results[index] = value;
```

### Polyfill

```js
Promise.myAll = function (iterable) {
  return new Promise((resolve, reject) => {
    const promises = Array.from(iterable);
    const results = [];
    let completed = 0;

    if (promises.length === 0) {
      resolve([]);
      return;
    }

    promises.forEach((item, index) => {
      Promise.resolve(item)
        .then((value) => {
          results[index] = value;
          completed++;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
};
```

### Key Interview Question

Why use:

```js
results[index] = value;
```

instead of:

```js
results.push(value);
```

Because promises may finish in any order, but `Promise.all()` must return results in **input order**.

---

## 15. `Promise.allSettled()`

Unlike `Promise.all()`, `allSettled()` does not reject just because one input rejects.

It waits until **every input settles**.

Output example:

```js
[
  {
    status: "fulfilled",
    value: 10,
  },
  {
    status: "rejected",
    reason: "Error",
  },
];
```

### Polyfill

```js
Promise.myAllSettled = function (iterable) {
  return new Promise((resolve) => {
    const promises = Array.from(iterable);
    const results = [];
    let completed = 0;

    if (promises.length === 0) {
      resolve([]);
      return;
    }

    promises.forEach((item, index) => {
      Promise.resolve(item)
        .then((value) => {
          results[index] = {
            status: "fulfilled",
            value,
          };
        })
        .catch((reason) => {
          results[index] = {
            status: "rejected",
            reason,
          };
        })
        .finally(() => {
          completed++;

          if (completed === promises.length) {
            resolve(results);
          }
        });
    });
  });
};
```

---

## 16. `Promise.race()`

`Promise.race()` settles as soon as the **first input promise settles**.

That means the first promise may either:

```text
FULFILL
   OR
REJECT
```

### Polyfill

```js
Promise.myRace = function (iterable) {
  return new Promise((resolve, reject) => {
    for (const item of iterable) {
      Promise.resolve(item).then(resolve, reject);
    }
  });
};
```

Example:

```js
const slow = new Promise((resolve) => {
  setTimeout(() => resolve("slow"), 2000);
});

const fast = new Promise((resolve) => {
  setTimeout(() => resolve("fast"), 500);
});

Promise.myRace([slow, fast]).then(console.log);

// fast
```

---

## 17. `Promise.any()`

`Promise.any()` resolves when the **first promise fulfills**.

Rejections are ignored until every input has rejected.

If all reject, native `Promise.any()` rejects with an `AggregateError`.

### Polyfill

```js
Promise.myAny = function (iterable) {
  return new Promise((resolve, reject) => {
    const promises = Array.from(iterable);
    const errors = [];
    let rejectedCount = 0;

    if (promises.length === 0) {
      reject(new AggregateError([], "All promises were rejected"));
      return;
    }

    promises.forEach((item, index) => {
      Promise.resolve(item)
        .then(resolve)
        .catch((error) => {
          errors[index] = error;
          rejectedCount++;

          if (rejectedCount === promises.length) {
            reject(new AggregateError(errors, "All promises were rejected"));
          }
        });
    });
  });
};
```

---

## 18. Promise Combinators — Critical Comparison

| Method                 | Resolves when                   | Rejects when                              |
| ---------------------- | ------------------------------- | ----------------------------------------- |
| `Promise.all()`        | All fulfill                     | Any one rejects                           |
| `Promise.allSettled()` | All settle                      | Does not reject due to an input rejection |
| `Promise.race()`       | First settlement is fulfillment | First settlement is rejection             |
| `Promise.any()`        | Any one fulfills                | All reject                                |

### Easy Mental Model

```text
all
"I need everyone to succeed."

allSettled
"I need everyone's final result."

race
"I care about whoever finishes first."

any
"I need just one success."
```

---

# PART IV — UTILITY POLYFILLS / INTERVIEW IMPLEMENTATIONS

These are often called "polyfills" in interviews even when they are better described as recreating common utility behavior.

## 19. `Object.create()`

`Object.create(proto)` creates an object whose prototype points to `proto`.

### Simple Polyfill

```js
function myObjectCreate(proto) {
  function F() {}

  F.prototype = proto;

  return new F();
}
```

Mental model:

```text
new object
    |
    v
prototype
    |
    v
proto
```

Modern JavaScript can also use prototype APIs directly, but this classic implementation is useful for understanding prototype inheritance.

---

## 20. `Object.assign()`

`Object.assign()` copies enumerable own properties from source objects to a target.

### Simplified Polyfill

```js
function myAssign(target, ...sources) {
  if (target == null) {
    throw new TypeError("Cannot convert undefined or null to object");
  }

  const output = Object(target);

  sources.forEach((source) => {
    if (source == null) return;

    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        output[key] = source[key];
      }
    }
  });

  return output;
}
```

A truly spec-like implementation also needs to account for enumerable symbol keys.

---

# PART V — DEBOUNCE AND THROTTLE

These are not ECMAScript polyfills, but they are extremely common JavaScript interview questions.

## 21. Debounce

### Idea

Debounce means:

> Execute only after calls have stopped for a specified amount of time.

Common use cases:

- search input
- autocomplete
- form validation
- resize handling

### Implementation

```js
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    const context = this;

    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}
```

### Mental Model

Suppose delay is `500ms`.

```text
call
  |
500ms timer starts

another call after 200ms
  |
old timer cancelled
  |
new 500ms timer starts

no more calls
  |
500ms passes
  |
function executes
```

The important concept is the closure:

```js
let timer;
```

The returned function remembers `timer` between calls.

---

## 22. Throttle

### Idea

Throttle means:

> Allow execution at most once during a specified interval.

Common use cases:

- scroll events
- mouse movement
- resize events
- repeated button/event handling

### Simple Implementation

```js
function throttle(fn, delay) {
  let canRun = true;

  return function (...args) {
    if (!canRun) return;

    canRun = false;

    fn.apply(this, args);

    setTimeout(() => {
      canRun = true;
    }, delay);
  };
}
```

### Debounce vs Throttle

Imagine a user continuously triggers an event:

```text
Events:
x x x x x x x x x x x x

Debounce:
                        EXECUTE

Throttle:
EXECUTE ---- EXECUTE ---- EXECUTE
```

**Debounce** waits for inactivity.

**Throttle** limits execution frequency.

---

# PART VI — DEEP CLONE

## 23. Basic Deep Clone

A shallow copy:

```js
const copy = { ...original };
```

does not recursively copy nested objects.

A common interview implementation is:

```js
function deepClone(value) {
  if (value === null || typeof value !== "object") {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map(deepClone);
  }

  const clone = {};

  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      clone[key] = deepClone(value[key]);
    }
  }

  return clone;
}
```

This is educational but not production-complete. Dates, Maps, Sets, symbols, prototypes, typed arrays, and circular references require additional handling.

---

# PART VII — FLATTEN AN ARRAY

## 24. `flat()`-Style Implementation

```js
function flattenArray(arr) {
  const result = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item));
    } else {
      result.push(item);
    }
  }

  return result;
}
```

Example:

```js
flattenArray([1, [2, [3, 4]], 5]);

// [1, 2, 3, 4, 5]
```

Concepts tested:

- recursion
- arrays
- spread syntax
- base/recursive cases

---

# PART VIII — WHAT POLYFILL QUESTIONS ACTUALLY TEST

Memorizing the implementations is not enough.

Interviewers use these questions to test JavaScript fundamentals.

## 25. Concepts Behind Each Polyfill

| Polyfill             | Main concepts tested                  |
| -------------------- | ------------------------------------- |
| `map`                | callbacks, arrays, `this`, prototypes |
| `filter`             | callbacks, conditions                 |
| `reduce`             | accumulator, edge cases               |
| `forEach`            | callbacks                             |
| `call`               | `this`, function invocation           |
| `apply`              | `this`, arguments                     |
| `bind`               | closures, `this`, partial application |
| `Promise.all`        | promises, async ordering, rejection   |
| `Promise.allSettled` | settlement handling                   |
| `Promise.race`       | promise settlement                    |
| `Promise.any`        | fulfillment vs rejection              |
| debounce             | closures, timers                      |
| throttle             | closures, timers                      |
| deep clone           | recursion, references                 |
| flatten              | recursion                             |

---

# PART IX — COMMON INTERVIEW TRAPS

## Trap 1: Using an arrow function for a prototype method

Avoid:

```js
Array.prototype.myMap = (callback) => {
  console.log(this);
};
```

Arrow functions do **not** create their own `this`.

Use:

```js
Array.prototype.myMap = function (callback) {
  console.log(this);
};
```

---

## Trap 2: Forgetting to return

Wrong:

```js
Array.prototype.myMap = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i]));
  }
};
```

Correct:

```js
return result;
```

---

## Trap 3: `Promise.all()` using `push`

Wrong:

```js
results.push(value);
```

Promise completion order is not guaranteed.

Correct:

```js
results[index] = value;
```

---

## Trap 4: Confusing `race()` and `any()`

`race()`:

```text
first SETTLED promise wins
```

`any()`:

```text
first FULFILLED promise wins
```

A rejection can win a race, but cannot be a successful result for `any()`.

---

## Trap 5: Losing `this` in debounce/bind implementations

This:

```js
fn(...args);
```

may lose the caller's intended context.

Often use:

```js
fn.apply(this, args);
```

or save:

```js
const context = this;
```

depending on the implementation.

---

# PART X — INTERVIEW PRIORITY

If time is limited, study in this order:

## Tier 1 — Must Know

1. `map`
2. `filter`
3. `reduce`
4. `call`
5. `apply`
6. `bind`
7. `Promise.all`
8. debounce
9. throttle

## Tier 2 — Strong Interview Preparation

10. `forEach`
11. `find`
12. `some`
13. `every`
14. `Promise.allSettled`
15. `Promise.race`
16. `Promise.any`
17. array flatten
18. deep clone

## Tier 3 — Additional Depth

19. `includes`
20. `Object.create`
21. `Object.assign`
22. native-like edge cases for array methods
23. constructor behavior of `bind`

---

# PART XI — HOW TO ANSWER A POLYFILL QUESTION

When an interviewer says:

> "Implement a polyfill for `map`."

Do not immediately start typing.

Use this structure:

### Step 1 — Explain expected behavior

> "`map` executes a callback for each existing array element and returns a new array containing the callback results."

### Step 2 — Mention callback parameters

```text
value
index
original array
```

### Step 3 — Write the basic implementation

```js
Array.prototype.myMap = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }

  return result;
};
```

### Step 4 — Discuss edge cases if asked

Examples:

- invalid callback
- sparse arrays
- `thisArg`
- null/undefined receiver

This demonstrates understanding instead of memorization.

---

# PART XII — QUICK REVISION SHEET

```text
POLYFILL
↓
Custom implementation of missing/native behavior

ARRAY
map       -> transform
filter    -> select
reduce    -> accumulate
forEach   -> execute
find      -> first matching value
some      -> at least one passes
every     -> all pass
includes  -> contains value

FUNCTION
call      -> execute now, individual args
apply     -> execute now, array-like args
bind      -> return function for later

PROMISE
all        -> all must fulfill
allSettled -> wait for every settlement
race       -> first settlement wins
any        -> first fulfillment wins

PERFORMANCE UTILITIES
debounce   -> wait until calls stop
throttle   -> limit execution frequency

CORE CONCEPTS
this
prototype
callbacks
closures
rest/spread
promises
async execution
recursion
```

---

# Practice Questions

Do these without looking at the implementations above.

### Level 1

1. Implement `myMap`.
2. Implement `myFilter`.
3. Implement `myForEach`.
4. Implement `myFind`.
5. Implement `mySome`.
6. Implement `myEvery`.

### Level 2

7. Implement `myReduce` with and without an initial value.
8. Implement `myCall`.
9. Implement `myApply`.
10. Implement basic `myBind`.

### Level 3

11. Implement `Promise.myAll`.
12. Explain why result indexes must be preserved.
13. Implement `Promise.myAllSettled`.
14. Implement `Promise.myRace`.
15. Implement `Promise.myAny`.

### Level 4

16. Implement debounce.
17. Implement throttle.
18. Flatten a deeply nested array.
19. Implement a basic deep clone.
20. Explain why a production-grade `bind` polyfill is harder than the basic version.

---

# Final Interview Checklist

Before saying you "know polyfills," make sure you can explain:

- [ ] What a polyfill is
- [ ] Why feature detection matters
- [ ] Why prototype methods usually use normal functions
- [ ] What `this` refers to inside array polyfills
- [ ] `map` vs `filter` vs `reduce`
- [ ] How `reduce` handles a missing initial value
- [ ] `call` vs `apply` vs `bind`
- [ ] Why `bind` needs a closure
- [ ] `Promise.all` result ordering
- [ ] `Promise.all` rejection behavior
- [ ] `all` vs `allSettled`
- [ ] `race` vs `any`
- [ ] debounce vs throttle
- [ ] shallow copy vs deep clone
- [ ] why simplified interview polyfills can differ from ECMAScript-spec-compliant implementations

---

## Key Takeaway

Polyfills are valuable because they force you to recreate JavaScript behavior using JavaScript's fundamental mechanisms.

If you deeply understand:

```text
prototype
    +
this
    +
callbacks
    +
closures
    +
promises
```

most common polyfill interview questions become reasoning problems rather than code you need to memorize.
