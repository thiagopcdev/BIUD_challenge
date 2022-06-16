const { Article } = require('../../database/models');

const remove = async (id) => {
  const articleExist = await Article.findByPk(id);
  if (!articleExist) return { message: 'This ID does not exist'};
  const articleDeleted = await Article.destroy({where: { id }});
  return articleDeleted;
}

module.exports = remove;