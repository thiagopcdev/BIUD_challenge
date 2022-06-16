const { StatusCodes } = require('http-status-codes');
const { createArticle } = require('../../service');

const createNewArticle = async (req, res, _next) => {
  const { title, description, categoryId } = req.body;

  try {
    const answer = await createArticle({ title, description, categoryId });
    if(answer.message) return res.status(StatusCodes.CONFLICT).json({message: answer.message});
    return res.status(StatusCodes.CREATED).end();
  } catch (e) {
    console.error(e.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
  }
}

module.exports = createNewArticle;