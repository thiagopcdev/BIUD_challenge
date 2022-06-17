const router = require('express').Router();
const {
  create, findAll, findById, remove, update,
} = require('../controller/category');
const categoryIsValid = require('../middleware/categoryIsValid');

router.get('/:id', findById);
router.get('/', findAll);
router.post('/', categoryIsValid, create);
router.put('/:id', categoryIsValid, update);
router.delete('/:id', remove);

module.exports = router;
