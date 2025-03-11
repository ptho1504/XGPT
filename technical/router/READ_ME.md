# Technical Assessment:
#### 4. Write a simple Express route handler that receives data from a POST request, validates it, and sends a response.

```javascript
const express = require("express");
const app = express();
app.use(express.json()); 

app.get("/", (req, res) => {
  res.send("Hello World");
});


app.post("/submit", (req, res) => {
    const { name, email } = req.body;
    
    if (!name || !email) {
        return res.status(400).json({ message: "Name and email are required" });
    }

    res.status(200).json({ message: "Data received successfully", data: { name, email } });
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

### Explanation:
1. **`app.use(express.json())`** allows parsing JSON request bodies.
2. **`app.post("/submit", (req, res))`** defines a POST endpoint `/submit`.
3. Validates if `name` and `email` are present in the request body.
4. Sends a `400 Bad Request` response if validation fails.
5. Sends a `200 OK` response with the received data if validation passes.

This ensures data validation before processing the request, improving reliability and security.