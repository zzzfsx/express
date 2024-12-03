// Import the Express library
const express = require('express');

// Create an Express app
const app = express();

// Define a port
const PORT = 3000;

// Create a basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
