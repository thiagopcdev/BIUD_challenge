const createCategory = require('./create');
const findAllCategories = require('./findAll');
const findCategoryById = require('./findById');
const removeCategory = require('./remove');
const updateCategory = require('./update');

module.exports = {
  createCategory,
  findAllCategories,
  findCategoryById,
  removeCategory,
  updateCategory,
};
