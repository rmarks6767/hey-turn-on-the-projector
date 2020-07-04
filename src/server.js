/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const baseRequest = require('./baseRequest');
const keys = require('./keys');

const app = express();
const epsonIp = process.argv.find((arg) => new RegExp(/^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$/).test(arg)) || '0.0.0.0';

app.use(cors());
app.use(express.json());

app.get('/:command', async (req, res) => {
  const { command } = req.params;
  const formattedCommand = String(command).toUpperCase();
  const key = keys[formattedCommand];

  try {
    if (formattedCommand === 'POWER') await baseRequest(key, epsonIp); // Run twice because of power off requiring validation

    if (key) {
      await baseRequest(key, epsonIp);
      res.statusCode = 200;
      res.send({
        message: `Successfully executed ${command}`,
      });
    } else {
      res.statusCode = 400;
      res.send({
        message: 'Not a valid command',
      });
    }
  } catch (error) {
    res.statusCode = 500;
    res.send({
      message: error,
    });
  }
});

module.exports = app;
