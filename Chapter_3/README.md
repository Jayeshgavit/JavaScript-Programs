# JavaScript Loops

## Overview
Loops in JavaScript allow you to repeat a block of code multiple times until a certain condition is met. JavaScript provides several types of loops, each suitable for different scenarios.

## Types of Loops

### `for` Loop
Used to iterate a block of code a specific number of times.
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

### `while` Loop
Executes a block of code as long as a specified condition is true.
```javascript
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```

### `do...while` Loop
Similar to the while loop, but it always executes the code block at least once before checking the condition.
```javascript
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
```

### `for...of` Loop
Used to iterate over iterable objects (arrays, strings, etc.).
```javascript
const arr = [1, 2, 3, 4, 5];
for (let num of arr) {
    console.log(num);
}
```

### `for...in` Loop
Used to iterate over the properties of an object.
```javascript
const obj = {a: 1, b: 2, c: 3};
for (let prop in obj) {
    console.log(`${prop}: ${obj[prop]}`);
}
```

## Loop Control Statements

### `break` Statement
Used to exit a loop prematurely.
```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i);
}
```

### `continue` Statement
Skips the rest of the current iteration and continues with the next one.
```javascript
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i);
}
