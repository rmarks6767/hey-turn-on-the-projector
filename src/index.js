const https = require('https');
const fs = require('fs');
const app = require('./server');

const port = process.env.PORT || 8443;

try {
  const key = fs.readFileSync(`${__dirname}/certs/selfsigned.key`);
  const cert = fs.readFileSync(`${__dirname}/certs/selfsigned.crt`);
  const options = {
    key,
    cert,
  };

  https
    .createServer(options, app)
    .listen(port, () => {
    // eslint-disable-next-line no-console
      console.log(`Cert found: listening at https://localhost:${port}`);
    });
} catch (_) {
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`No cert found: listening at http://localhost:${port}`);
  });
}
