const { keys, baseRequest } = require('../helpers');

module.exports = async (req, res) => {
  const { command } = req.params;
  const formattedCommand = String(command).toUpperCase();
  const key = keys[formattedCommand];

  try {
    if (formattedCommand === 'POWER') await baseRequest(key); // Run twice because of power off requiring validation

    if (key) {
      await baseRequest(key);
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
};
