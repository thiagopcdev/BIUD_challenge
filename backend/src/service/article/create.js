const { Article, Category } = require('../../database/models');

const createNewArticle = async (obj) => {
  const { title, description, categoryId: category_id } = obj;

  const articleExists = await Article.findOne({ where: { title } });
  if (articleExists) return { message: 'Article already exists'};

  const categoryExists = await Category.findByPk(category_id);
  if (!categoryExists) return { message: 'Category does not exist'}
  
  const newArticle = Article.create({title, description, category_id});
  return newArticle;
}

module.exports = createNewArticle;