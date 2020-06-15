const express = require('express');

const router = express.Router();

const modulesRouter = require('./modules.router');
const possibleanswerRouter = require('./possibleanswer.router');

router.use('/modules', modulesRouter);
router.use('/answer_choices', possibleanswerRouter);

module.exports = router;
