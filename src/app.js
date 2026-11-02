const express = require('express');
const app = express();
const port = 3000;

// This variable acts as our temporary cache memory
let cachedName = null;

app.get('/', (req, res) => {
  // If the cache is empty, set the value
  if (cachedName === null) {
    cachedName = 'yash';
    res.send(`First visit (Fresh load): ${cachedName}`);
  } else {
    // If the cache already has data, reuse it
    res.send(`Return visit (Served from cache): ${cachedName}`);
  }
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});