const { Article } = require('../../database/models');

const findAll = async () => {
  const articleList = await Article.findAll({
    attributes: { exclude: ['category_id'] },
  });
  return articleList;
};

module.exports = findAll;
