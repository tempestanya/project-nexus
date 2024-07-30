const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

// Dummy user data
const users = [];

// Signup route
app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
    const userExists = users.find(user => user.email === email);

    if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
    }

    users.push({ username, email, password });
    res.status(201).json({ message: 'User registered successfully' });
});

// Login route
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email && user.password === password);

    if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
