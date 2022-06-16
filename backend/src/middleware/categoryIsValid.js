const { StatusCodes } = require('http-status-codes');

module.exports = async (req, res, next) => {
  try {
    const { description } = req.body;
    if (!description) {
      return res.status(StatusCodes.BAD_REQUEST)
        .json({ message: 'Invalid entries. Try again.' });
    }
    next();
  } catch (e) {
    next(e)
  }
};