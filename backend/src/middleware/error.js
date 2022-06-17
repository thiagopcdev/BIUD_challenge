const { StatusCodes } = require('http-status-codes');

module.exports = (err, _req, res) => {
  console.error(err.message);
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
};
