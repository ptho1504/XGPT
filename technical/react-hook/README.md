# Explain the concept of React hooks. Implement a simple component that uses useState and useEffect.

## 1. Concept of React Hooks
React Hooks allow function components to use state and lifecycle methods without writing a class. The two most common hooks are:
- **`useState`**: Allows functional components to manage local state.
- **`useEffect`**: Performs side effects in function components, such as fetching data, updating the DOM, or setting up subscriptions.

## 2. Example Component Using `useState` and `useEffect`
```jsx
import { useState, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]); // Runs when `count` changes

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default Counter;
```

### Explanation:
1. **`useState(0)`** initializes `count` with `0`.
2. **`setCount(count + 1)`** updates `count` when the button is clicked.
3. **`useEffect`** updates the document title every time `count` changes.

This makes functional components powerful and easier to manage compared to class-based components.

### Run:
```javascript
  cd ./react
  npm i
  npm run dev
```