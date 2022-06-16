const { StatusCodes } = require('http-status-codes');
const { removeArticle } = require('../../service');

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const removed = await removeArticle(id);
    if (removed.message) return res.status(StatusCodes.NOT_FOUND).json({message: removed.message});
    return res.status(StatusCodes.NO_CONTENT).end();
  } catch (e) {
    console.log(e.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
  }
};

module.exports = remove;