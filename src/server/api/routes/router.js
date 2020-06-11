const express = require('express');

const router = express.Router();

const modulesRouter = require('./modules.router');
const gameRouter = require('./game_instances.router');

router.use('/modules', modulesRouter);
router.use('/games', gameRouter);

module.exports = router;
