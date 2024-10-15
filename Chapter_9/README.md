
### Classes and Objects
- **Classes** are templates used to create objects with shared properties and methods.
- **Objects** are instances of classes or directly defined collections of key-value pairs that represent data and behavior.

**Example:**
```js
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  start() {
    console.log(`${this.brand} started`);
  }
}

let myCar = new Car('Toyota', 'Camry');
myCar.start(); // Output: Toyota started
```

This explanation covers both concepts in a unified way.