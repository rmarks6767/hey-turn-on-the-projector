const axios = require('axios');

const epsonIp = process.argv.find((arg) => new RegExp(/^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$/).test(arg)) || '0.0.0.0';

module.exports = async (key) => {
  try {
    const response = await axios.default.get(`http://${epsonIp}/cgi-bin/directsend?${key}`, {
      headers: {
        Referer: `http://${epsonIp}/cgi-bin/webremote`,
      },
    });
    return response;
  } catch (_) {
    throw new Error('Unable to make request');
  }
};
