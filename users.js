// users.js
const express = require('express');
const cors = require('cors');

const app = express();

const PORT = 4001;

// Mock User Data
const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
];

// Route to list users
app.get('/users', (req, res) => {
    res.json(users);
});

// Start the server
app.listen(PORT, () => {
    console.log(`User Service running on http://localhost:${PORT}`);
});
