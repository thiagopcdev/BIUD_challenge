const createArticle = require('./create');
const findAllArticles = require('./findAll');
const findArticleById = require('./findById');
const removeArticle = require('./remove');
const updateArticle = require('./update');

module.exports = {
  createArticle,
  findAllArticles,
  findArticleById,
  removeArticle,
  updateArticle,
};