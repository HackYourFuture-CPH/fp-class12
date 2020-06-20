const express = require('express');

const router = express.Router();

const modulesRouter = require('./modules.router');
const newGameRouter = require('./newGame.router');

router.use('/modules', modulesRouter);
router.use('/newGame', newGameRouter);

module.exports = router;
