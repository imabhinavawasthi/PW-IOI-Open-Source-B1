# Hoisting in JavaScript

## What is Hoisting?

Hoisting is JavaScript's default behavior of moving declarations to the top of their scope during the compilation phase, before the code is executed. This means that variables and functions can sometimes be accessed before they appear in the source code.

## How Hoisting Works

JavaScript hoists different types of declarations differently:

- **Function declarations** are completely hoisted, so they can be called before they are defined.
- **`var` variables** are hoisted and initialized with `undefined`.
- **`let` and `const` variables** are hoisted but remain in the **Temporal Dead Zone (TDZ)** until their declaration is reached, causing a `ReferenceError` if accessed earlier.

## Key Points

- Hoisting happens during the compilation phase.
- Only declarations are hoisted, not initializations.
- Function declarations are fully available before their definition.
- `var` is hoisted with an initial value of `undefined`.
- `let` and `const` are hoisted but cannot be used before initialization.

## Why Learn Hoisting?

Understanding hoisting helps you:
- Write more predictable JavaScript code.
- Understand variable scope and execution context.
- Avoid common bugs caused by accessing variables before initialization.
- Perform better in JavaScript interviews.

## Conclusion

Hoisting is a fundamental JavaScript concept that affects how variables and functions behave before execution. A solid understanding of hoisting makes it easier to read, debug, and write reliable JavaScript code.