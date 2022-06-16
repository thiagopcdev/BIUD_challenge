const router = require('express').Router();
const { create, findAll, findById, remove, update } = require('../controller/article');

router.get('/:id', findById);
router.get('/', findAll);
router.post('/', create);
router.update('/:id', update);
router.delete('/:id', remove);

module.exports = router;