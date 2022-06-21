const { StatusCodes } = require('http-status-codes');

module.exports = async (req, res, next) => {
  try {
    const { description } = req.body;
    if (!description) {
      return res.status(StatusCodes.BAD_REQUEST)
        .json({ message: 'Invalid entries. Try again.' });
    }
    if (description.length < 3) {
      return res.status(StatusCodes.BAD_REQUEST)
        .json({ message: 'Description must be at least 3 characters long' });
    }
    next();
  } catch (e) {
    next(e);
  }
};
