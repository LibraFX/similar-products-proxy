/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');

// server setup
const PORT = 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}/../public`));

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}...`);
});
