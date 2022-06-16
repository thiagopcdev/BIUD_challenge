const { StatusCodes } = require('http-status-codes');
const { findAllArticles } = require('../../service');

const findAll = async (_req, res) => {
  try {
    const articleList = await findAllArticles();
    return res.status(StatusCodes.OK).json(articleList);
  } catch (e) {
    console.log(e.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
  }
};

module.exports = findAll;