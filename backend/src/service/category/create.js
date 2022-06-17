const { Category } = require('../../database/models');

const createNewCategory = async (description) => {
  const categoryExists = await Category.findOne({ where: { description } });
  if (categoryExists) return { message: 'Category already exists' };
  const newCategory = Category.create({ description });
  return newCategory;
};

module.exports = createNewCategory;
