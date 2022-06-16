const { StatusCodes } = require('http-status-codes');
const { updateArticle } = require('../../service');

const update = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updated = await updateArticle(id, req.body);
    if (updated.message) return res.status(StatusCodes.NOT_FOUND).json({message: updated.message});
    return res.status(StatusCodes.OK).json(updated);
  } catch (e) {
    next(e);
  }
};

module.exports = update;