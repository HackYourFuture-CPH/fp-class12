const express = require('express');

const router = express.Router();

const modulesRouter = require('./modules.router');
const coordinatesRouter = require('./coordinates.router');

router.use('/modules', modulesRouter);
router.use('/coordinates', coordinatesRouter);

module.exports = router;
