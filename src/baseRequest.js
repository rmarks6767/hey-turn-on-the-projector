const axios = require('axios');

module.exports = async (key, epsonIp) => {
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
