const { StatusCodes } = require('http-status-codes');

module.exports = async (req, res, next) => {
  try {
    const { title, description, categoryId } = req.body;
    if ((!title) || (!description) || (!categoryId)) {
      return res.status(StatusCodes.BAD_REQUEST)
        .json({ message: 'Invalid entries. Try again.' });
    }
    if (title.length < 3) {
      return res.status(StatusCodes.BAD_REQUEST)
        .json({ message: 'Title must be at least 3 characters long' });
    }
    next();
  } catch (e) {
    next(e);
  }
};
