# Technical Assessment:

### 1. You're building a to-do application. How would you structure the data models for tasks, categories, and users? Outline the API endpoints you would create.

###  __Data Models__
#### **User Model**
```typescript
interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}
```

#### **Category Model**
```typescript
interface Category {
    id: string;
    name: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
}
```

#### **Task Model**
```typescript
interface Task {
    id: string;
    title: string;
    description?: string;
    userId: string;
    categoryId?: string;
    dueDate?: Date;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
}
```

### __API Endpoints__

#### **User**
- **POST** `/users/register` → Register a new user
- **POST** `/users/login` → Authenticate a user
- **GET** `/users/me` → Get authenticated user details
- **PUT** `/users/me` → Update user details

#### **Category**
- **POST** `/categories` → Create a category
- **GET** `/categories` → Get all categories for the logged-in user
- **GET** `/categories/:id` → Get a single category
- **PUT** `/categories/:id` → Update category details
- **DELETE** `/categories/:id` → Delete a category

### **Task**
- **POST** `/tasks` → Create a new task
- **GET** `/tasks` → Get all tasks for the logged-in user
- **GET** `/tasks/:id` → Get a single task
- **PUT** `/tasks/:id` → Update task details
- **DELETE** `/tasks/:id` → Delete a task

### 2. Describe a challenging bug you've encountered and how you approached solving it.

A challenging bug I've encountered was when integrating authentication in a React application using Redux and a custom API. The issue was that after logging in, the user state was not updating correctly, causing authenticated pages to remain inaccessible.

### **How I Approached Solving It:**
Used __Redux DevTools__ to inspect the store and noticed that the authentication state wasn't persisting.

Ensured that the login API was returning the correct JWT token and user data.
Realized that the Redux action was dispatching correctly, but the reducer wasn't updating the state.

Identified that the reducer was mistakenly returning a new state object without merging the existing state.

Used `localStorage` and `useEffect` to sync the authentication state on page reload.

After these fixes, the authentication flow worked seamlessly.