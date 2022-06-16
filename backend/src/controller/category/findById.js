const { StatusCodes } = require('http-status-codes');
const { findCategoryById } = require('../../service');

const findByID = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await findCategoryById(id);
    if (!category) return res.status(StatusCodes.NOT_FOUND).end();
    return res.status(StatusCodes.OK).json(category);
  } catch (e) {
    console.log(e.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
  }
};

module.exports = findByID;