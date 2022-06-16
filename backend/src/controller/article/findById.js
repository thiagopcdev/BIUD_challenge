const { StatusCodes } = require('http-status-codes');
const { findArticleById } = require('../../service');

const findByID = async (req, res) => {
  const { id } = req.params;
  try {
    const article = await findArticleById(id);
    if (!article) return res.status(StatusCodes.NOT_FOUND).end();
    return res.status(StatusCodes.OK).json(article);
  } catch (e) {
    console.log(e.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
  }
};

module.exports = findByID;