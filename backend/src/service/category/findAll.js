const { Category } = require('../../database/models');

const findAll = async () => {
  const categoryList = await Category.findAll();
  return categoryList;
}

module.exports = findAll;