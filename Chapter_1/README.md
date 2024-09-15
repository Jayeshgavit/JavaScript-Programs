# Chapter 1: Variables and Data Types in JavaScript

## Variables

- Variables store data values.
- Declared using `let`, `const`, or `var`.
  - **`let`**: Block-scoped, can be reassigned.
  - **`const`**: Block-scoped, cannot be reassigned.
  - **`var`**: Function-scoped (use `let` or `const` instead).

### Example:

```js
let name = "Jayesh";  // let
const age = 25;       // const
var city = "Mumbai";  // var

## Primitive Types:

-Number: For integers and floating-point numbers.
    -let score = 95;

-String: For text or string of characters.
    -let message = "Hello";

-Boolean: For true/false values.
    -let isCompleted = true;

-Undefined: A declared variable without an assigned value.
    -let a;

-Null: Represents the intentional absence of a value.
    -let empty = null;

Symbol: A unique, immutable data type, often used in advanced coding.
let sym = Symbol("id");

BigInt: For numbers larger than Number.MAX_SAFE_INTEGER.
let largeNumber = 123456789012345678901234567890n;

###Example:

    - let score = 10;         // Number
    - let name = "Jayesh";    // String
    - let isAdmin = true;     // Boolean
    - let value = null;       // Null
    - let user;               // Undefined
    - let uniqueId = Symbol(); // Symbol
    - let bigNum = 9007199254740991n; // BigInt





```
