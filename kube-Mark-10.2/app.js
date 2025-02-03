const express = require('express');
const app = express();

app.get('/status', (req, res) => {
  res.json({ message: 'App is running!' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

