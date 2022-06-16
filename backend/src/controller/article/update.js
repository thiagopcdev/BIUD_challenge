const { StatusCodes } = require('http-status-codes');
const { updateArticle } = require('../../service');

const update = async (req, res) => {
  const { id } = req.params;
  try {
    const updated = await updateArticle(id);
    if (updated.message) return res.status(StatusCodes.NOT_FOUND).json({message: updated.message});
    return res.status(StatusCodes.OK).json(updated);
  } catch (e) {
    console.log(e.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
  }
};

module.exports = update;