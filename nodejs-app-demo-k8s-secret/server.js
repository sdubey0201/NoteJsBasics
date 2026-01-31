const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const appName = process.env.APP_NAME || "local"
const configmap1 = process.env.CONFIGMAP1 || "local CONFIGMAP1"
const configmap2 = process.env.CONFIGMAP2 || "local CONFIGMAP2"
const dbPassword = process.env.DB_PASSWORD_NODE_DEMO || "no-password-set"


// Simple GET / endpoint
app.get('/', (req, res) => {
  res.send(`Hello World from ${appName}  configmap1 from ${configmap1} and configmap2 from ${configmap2} password from secrets ${dbPassword}`);
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});