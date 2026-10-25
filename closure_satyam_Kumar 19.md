# JavaScript Closures

A **closure** is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

## Key Features
* Gives you access to an outer function's scope from an inner function.
* Created every time a function is created, at function creation time.

## Example
```javascript
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer: ' + outerVariable);
        console.log('Inner: ' + innerVariable);
    };
}

const newFunction = outerFunction('outside');
newFunction('inside');
