const { StatusCodes } = require('http-status-codes');
const { findArticleById } = require('../../service');

const findByID = async (req, res, next) => {
  const { id } = req.params;
  try {
    const article = await findArticleById(id);
    if (!article) return res.status(StatusCodes.NOT_FOUND).end();
    return res.status(StatusCodes.OK).json(article);
  } catch (e) {
    next(e);
  }
};

module.exports = findByID;
