const {
  createArticle,
  findAllArticles,
  findArticleById,
  removeArticle,
  updateArticle} = require('./article');
  
const {
  createCategory,
  findAllCategories,
  findCategoryById,
  removeCategory,
  updateCategory } = require('./category');

module.exports = {
  createArticle,
  findAllArticles,
  findArticleById,
  removeArticle,
  updateArticle,
  createCategory,
  findAllCategories,
  findCategoryById,
  removeCategory,
  updateCategory
};