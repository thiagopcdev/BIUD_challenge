const router = require('express').Router();
const { create, findAll, findById, remove, update } = require('../controller/category');

router.get('/:id', findById);
router.get('/', findAll);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;