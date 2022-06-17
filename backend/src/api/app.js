const express = require('express');
const { articleRouter, categoryRouter } = require('../router');

const app = express();

app.use(express.json());
app.use('/articles', articleRouter);
app.use('/categories', categoryRouter);
app.use(require('../middleware/error'));

module.exports = app;
