const express = require('express');

const router = express.Router();

const modulesRouter = require('./modules.router');
const questionsRouter = require('./questions.router');

router.use('/modules', modulesRouter);
router.use('/questions', questionsRouter);

module.exports = router;
