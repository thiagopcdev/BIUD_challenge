const { Category } = require('../../database/models');

const findByID = async (id) => {
  const category = await Category.findByPk(id);
  return category;
}

module.exports = findByID;