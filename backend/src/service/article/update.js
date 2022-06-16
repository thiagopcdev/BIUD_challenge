const { Article, Category } = require('../../database/models');

const update = async (id, obj) => {
  const { categoryId: category_id } = obj;
  const articleExist = await Article.findByPk(id);
  if (!articleExist) return { message: 'This ID does not exist'};

  const categoryExists = await Category.findByPk(category_id);
  if (!categoryExists) return { message: 'Category does not exist'}

  const articleUpdated = await Article.update(obj, {where: {id}});
  if (!articleUpdated) return { message: 'Not updated, something is wrong'};
  return obj;
}

module.exports = update;