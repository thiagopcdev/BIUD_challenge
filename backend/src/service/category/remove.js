const { Category } = require('../../database/models');

const remove = async (id) => {
  const categoryExist = await Category.findByPk(id);
  if (!categoryExist) return { message: 'This ID does not exist'};
  const categoryDeleted = await Category.destroy({where: { id }});
  return categoryDeleted;
}

module.exports = remove;