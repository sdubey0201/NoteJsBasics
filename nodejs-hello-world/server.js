const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Simple GET / endpoint
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});