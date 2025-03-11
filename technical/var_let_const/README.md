
# Technical Assessment:

### 1. What is the difference between let, const, and var in JavaScript? When would you use each? 
#### **`var`**
-    __Scope__ : **`var`** is function-scoped. If declared inside a function, it’s local to that function; otherwise, it’s global.

-    __Hoisting__: Variables declared with var are hoisted to the top of their scope and initialized with undefined.

-    __Re-declaration__: You can re-declare and update var variables within the same scope.

#### **`let`**
-    __Scope__ : **`let`**  is block-scoped, meaning it is only accessible within the block it was declared in.

-    __Hoisting__: **`let`** is hoisted but not initialized, meaning accessing it before declaration results in a `ReferenceError`

-    __Re-declaration__: Cannot be **re-declared** in the same scope, but can be updated.


#### **`const`**
-    __Scope__ : **`const`**  is also block-scoped, similar to **`let`**.

-    __Hoisting__: **`const`** is hoisted but not initialized, similar to **`let`**

-    __Re-declaration__: Cannot be re-declared or updated after initialization. The value must be assigned at declaration. However, if the **`const`** variable is an object or array, you can still modify the properties or elements of the object or array.
### Example:
```javascript
function example() {
    var a = 10;
    let b = 20;
    const c = 30;
    
    if (true) {
        var a = 40; // Allowed, affects the function scope
        let b = 50; // New block-scoped variable
        // c = 60; // Error: Assignment to constant variable
    }
    
    console.log(a); // 40 (updated within function scope)
    console.log(b); // 20 (block-scoped, unaffected by inner block)
}

example();
```

#### When would you use each?

#### **`var`**
-    Use **`var`** when need function-scoped variables and when you want the variable to be accessible anywhere within that function.

#### **`let`**
-    Use **`let`** when need block-scoped variables. It's ideal when want to limit the scope of the variable to the block (enclosed by {}) where it's defined.
-   Use **`let`** when you expect the variable's value to change and need it to be re-assigned.

### Example:
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i); // `i` is block-scoped to the loop
}
console.log(i); // Error: `i` is not defined
```


#### **`const`**
-   Use **`const`** for constants or variables that should not be re-assigned after their initial assignment. It provides a clear signal that the variable’s value should remain the same throughout the program.

-    Use **`const`** for declaring arrays or objects whose references should remain constant, although their contents can be modified.

### Example:
```javascript
const PI = 3.14159;
console.log(PI); // 3.14159
// PI = 3.14; // Error: Assignment to constant variable
```


### Run:
```javascript
  node example.js
```