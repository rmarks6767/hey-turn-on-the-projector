const { baseRequest, keys } = require('../helpers');

module.exports = async (req, res) => {
  try {
    const base64Credentials = req.headers.authorization.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');

    if (username !== process.env.DIALOGFLOW_USERNAME
    || password !== process.env.DIALOGFLOW_PASSWORD) {
      res.status(401).send('Username or password incorrect');
    } else {
      const { queryResult } = req.body;
      const { fulfillmentMessages, intent } = queryResult;
      const { displayName } = intent;

      if (displayName === 'projector') {
        await baseRequest(keys.POWER);
        await baseRequest(keys.POWER);
        res.status(200).send({ fulfillmentMessages });
      } else res.status(400).send('Bad Request');
    }
  } catch (_) {
    console.log(_);
    res.status(500).send('Something went wrong');
  }
};
