// backend/src/app.js
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);


app.use(cors());
app.use(express.json());

// Define a test route
app.get('/', (req, res) => {
    res.send('Backend server is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
