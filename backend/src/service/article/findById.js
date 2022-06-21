const { Article, Category } = require('../../database/models');

const findByID = async (id) => {
  const article = await Article.findByPk(id, {
    include: { model: Category, as: 'categories', attributes: { exclude: ['id'] } },
    attributes: { exclude: ['category_id'] },
  });
  return article;
};

module.exports = findByID;
