const { StatusCodes } = require('http-status-codes');
const { createCategory } = require('../../service');

const createNewCategory = async (req, res, next) => {
  const { description } = req.body;

  try {
    const answer = await createCategory(description);
    if (answer.message) return res.status(StatusCodes.CONFLICT).json({ message: answer.message });
    return res.status(StatusCodes.CREATED).end();
  } catch (e) {
    next(e);
  }
};

module.exports = createNewCategory;
