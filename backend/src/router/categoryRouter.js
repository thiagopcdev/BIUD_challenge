const router = require('express').Router();
const { create, find, findById, remove, update } = require('../controller/category');

router.get('/:id', findById);
router.get('/', find);
router.post('/', create);
router.update('/:id', update);
router.delete('/:id', remove);

module.exports = router;