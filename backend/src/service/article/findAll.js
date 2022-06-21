const { Article, Category } = require('../../database/models');

const findAll = async () => {
  const articleList = await Article.findAll({
    include: { model: Category, as: 'categories', attributes: { exclude: ['id'] } },
    attributes: { exclude: ['category_id'] },
  });
  return articleList;
};

module.exports = findAll;
