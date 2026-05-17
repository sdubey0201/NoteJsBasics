const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const appName = process.env.APP_NAME || "local"
const configmap1 = process.env.CONFIGMAP1 || "local CONFIGMAP1"
const configmap2 = process.env.CONFIGMAP2 || "local CONFIGMAP2"
const dbPassword = process.env.DB_PASSWORD_NODE_DEMO || "no-password-set"

const key1 = process.env.KEY1 || "no-password-set"
const key2 = process.env.KEY2 || "no-password-set"


// Simple GET / endpoint
app.get('/', (req, res) => {
  res.send(`Hello World from ${appName}  configmap1 from ${configmap1} and configmap2 from ${configmap2} password from secrets ${dbPassword} key1 from secrets ${key1} key2 from secrets ${key2}`);
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});