A closure is a function that remembers the variables from its outer scope even after the outer function has finished executing.

function outer() {
    let count = 0;

    return function inner() {
        count++;
        console.log(count);
    };
}

const counter = outer();

## Advantages

- Data hiding
- Private variables
- Function factories
- Event handlers