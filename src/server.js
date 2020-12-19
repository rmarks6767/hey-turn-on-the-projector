const express = require('express');
const cors = require('cors');
const { googleHandler, projectorHandler } = require('./handlers');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/:command', projectorHandler);

app.post('/google/webhook', googleHandler);

module.exports = app;
