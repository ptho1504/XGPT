# Technical Assessment:
#### 3. Describe how promises work in JavaScript and provide an example of handling asynchronous operations. 

#### 1. How Promises Work
A **Promise** in JavaScript represents a value that might be available now, in the future, or never. Promises provide a way to handle asynchronous operations in a more readable and manageable way compared to traditional callbacks.
- **Pending**: The operation has started but is not yet complete.
- **Fulfilled**: The operation completed successfully, and a result is available.
- **Rejected**: The operation failed, and an error is available.

Promises allow handling asynchronous operations in a more readable way compared to callbacks.

#### 2. Example of Handling Asynchronous Operations
```javascript
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;
            if (success) {
                resolve("Data received successfully");
            } else {
                reject("Error fetching data");
            }
        }, 2000);
    });
}

fetchData()
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
```

### Explanation:
1. **`fetchData`** simulates an API call with a delay of 2 second.
2. It randomly resolves (success) or rejects (failure) to mimic real-world scenarios.
3. The `.then()` method handles the resolved value, while `.catch()` handles errors.

Using Promises helps manage asynchronous operations efficiently, avoiding callback hell and improving code readability.

### Run:
```javascript
  node example.js
```