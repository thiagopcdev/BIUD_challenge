const { StatusCodes } = require('http-status-codes');
const { findAllArticles } = require('../../service');

const findAll = async (_req, res, next) => {
  try {
    const articleList = await findAllArticles();
    return res.status(StatusCodes.OK).json(articleList);
  } catch (e) {
    next(e);
  }
};

module.exports = findAll;
