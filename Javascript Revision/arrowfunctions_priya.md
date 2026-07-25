Introduced in ES6 (2015), arrow functions give us a cleaner, shorter syntax for writing function expressions in JavaScript. Beyond saved keystrokes, they fundamentally change how the this keyword behaves inside a function.1. Syntax ComparisonHere is how a standard function compares directly to an arrow function:JavaScript// Traditional Function Expression
const add = function(a, b) {
  return a + b;
};

// Arrow Function
const add = (a, b) => {
  return a + b;
};
Syntax ShortcutsArrow functions allow clean shortcuts depending on parameters and body length:Single Parameter: You can drop the parentheses ().JavaScriptconst square = x => x * x;
Implicit Return: If the function body is a single expression, omit {} and the return keyword — it automatically returns the result.JavaScriptconst multiply = (a, b) => a * b;
Returning Objects: Wrap the object literal in parentheses () so JavaScript doesn't confuse the curly braces with a block body.JavaScriptconst getUser = id => ({ id: id, role: "admin" });
2. Key Differences: Arrow vs. Regular FunctionsWhile arrow functions look like simple syntactic sugar, they behave differently under the hood:A. Lexical this BindingIn regular functions, this is dynamic — its value depends on how the function is called. In arrow functions, this is lexical, meaning it inherits this directly from the surrounding scope where it was defined.JavaScriptconst timer = {
  seconds: 0,
  start() {
    // Arrow function preserves 'this' from the start() method
    setInterval(() => {
      this.seconds++;
      console.log(this.seconds);
    }, 1000);
  }
};
B. Summary of Functional DifferencesFeatureRegular FunctionArrow Functionthis KeywordDynamic (bound at call time)Lexical (inherited from outer scope)arguments ObjectAvailableNot available (use rest parameters ...args)Constructor (new)Can be used as a constructorCannot be used with new (throws TypeError)prototype PropertyHas a prototype propertyDoes not have a prototype property3. When NOT to Use Arrow FunctionsObject Methods: Do not use arrow functions if you need this to refer to the object itself.JavaScriptconst user = {
  name: "Alex",
  // ❌ 'this' will be undefined or point to the global object
  greet: () => console.log(`Hi, I'm ${this.name}`)
};
Event Handlers (when accessing DOM elements): Traditional functions auto-bind this to the target element, whereas arrow functions lose that binding.JavaScriptbutton.addEventListener("click", function() {
  // 'this' refers to the clicked button element
  this.classList.toggle("active");
});