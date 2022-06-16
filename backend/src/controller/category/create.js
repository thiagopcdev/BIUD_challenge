const { StatusCodes } = require('http-status-codes');
const { createCategory } = require('../../service');

const createNewCategory = async (req, res, _next) => {
  const { description } = req.body;

  try {
    const answer = await createCategory(description);
    if(answer.message) return res.status(StatusCodes.CONFLICT).json({message: answer.message});
    return res.status(StatusCodes.CREATED).end();
  } catch (e) {
    console.error(e.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
  }
}

module.exports = createNewCategory;