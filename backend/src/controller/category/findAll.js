const { StatusCodes } = require('http-status-codes');
const { findAllCategories } = require('../../service');

const findAll = async (_req, res) => {
  try {
    const categoryList = await findAllCategories();
    return res.status(StatusCodes.OK).json(categoryList);
  } catch (e) {
    console.log(e.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
  }
};

module.exports = findAll;