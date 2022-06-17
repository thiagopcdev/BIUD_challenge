const router = require('express').Router();
const {
  create, findAll, findById, remove, update,
} = require('../controller/article');
const articleIsValid = require('../middleware/articleIsValid');

router.get('/:id', findById);
router.get('/', findAll);
router.post('/', articleIsValid, create);
router.put('/:id', articleIsValid, update);
router.delete('/:id', remove);

module.exports = router;
