/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./router/index.js');

// server setup
const PORT = 3000;
const PUBLIC_DIR = `${__dirname}/../public`;
const app = express();

// middleware
app.use(morgan('dev'));
app.use(cors());

app.use(express.static(PUBLIC_DIR));

// Routes for bundled services files and apis
app.use('/bundles', router.bundles);
app.use('/api', router.api);

// having this above the routers messes up the post requests...
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}...`);
});
