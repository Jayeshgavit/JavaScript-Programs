### Synchronous (Sync) vs Asynchronous (Async) in JavaScript:

- **Synchronous (Sync)**: 
  - Code is executed line by line, one after another.
  - Each task must complete before the next starts.
  - **Example**: Regular function calls.

  ```javascript
  console.log("Start");
  console.log("End");
  ```
  Output: `Start` -> `End`

- **Asynchronous (Async)**:
  - Code runs in the background without blocking the main thread.
  - Tasks can start before previous tasks are completed (e.g., fetching data from an API).
  - **Example**: `setTimeout`, network requests.

  ```javascript
  console.log("Start");
  setTimeout(() => console.log("Async task"), 1000);
  console.log("End");
  ```
  Output: `Start` -> `End` -> `Async task`

---

### Promises:

- **Promises**: 
  - A way to handle asynchronous operations.
  - Represents a value that may be available **now**, **later**, or **never**.
  - **States**:
    1. **Pending**: Initial state.
    2. **Fulfilled**: Operation completed successfully.
    3. **Rejected**: Operation failed.

- **Example**:

  ```javascript
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Success!"), 1000);
  });

  promise.then(result => console.log(result)) // Output: Success!
         .catch(error => console.log(error));
  ```

- **Methods**:
  - `then()`: Runs when the promise is fulfilled.
  - `catch()`: Runs when the promise is rejected.
  - `finally()`: Runs when the promise settles (fulfilled or rejected).