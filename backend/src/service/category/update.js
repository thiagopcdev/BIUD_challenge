const { Category } = require('../../database/models');

const update = async (id, description) => {
  const categoryExist = await Category.findByPk(id);
  if (!categoryExist) return { message: 'This ID does not exist'};
  const categoryUpdated = await Category.update({ description }, {where: {id}});
  if (!categoryUpdated) return { message: 'Not updated, something is wrong'};
  return description;
}

module.exports = update;