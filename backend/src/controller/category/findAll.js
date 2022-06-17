const { StatusCodes } = require('http-status-codes');
const { findAllCategories } = require('../../service');

const findAll = async (_req, res, next) => {
  try {
    const categoryList = await findAllCategories();
    return res.status(StatusCodes.OK).json(categoryList);
  } catch (e) {
    next(e);
  }
};

module.exports = findAll;
