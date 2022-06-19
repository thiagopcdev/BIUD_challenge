const cors = require('cors');
const express = require('express');
const { articleRouter, categoryRouter } = require('../router');

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['POST', 'GET', 'PUT', 'DELETE'],
};

const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use('/articles', articleRouter);
app.use('/categories', categoryRouter);
app.use(require('../middleware/error'));

module.exports = app;
