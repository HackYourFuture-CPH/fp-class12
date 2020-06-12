const express = require('express');

const router = express.Router();

const modulesRouter = require('./modules.router');

const gameInstancesRouter = require('./gameInstances.router');

router.use('/modules', modulesRouter);
router.use('/gameInstances', gameInstancesRouter);

module.exports = router;
