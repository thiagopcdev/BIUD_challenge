const { Article } = require('../../database/models');

const findByID = async (id) => {
  const article = await Article.findByPk(id, {
    attributes: { exclude: ['category_id'] },
  });
  return article;
};

module.exports = findByID;
