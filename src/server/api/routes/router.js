const express = require('express');

const router = express.Router();

const modulesRouter = require('./modules.router');
const possibleAnswersRouter = require('./possibleanswers.router');

const questionsRouter = require('./questions.router');

router.use('/modules', modulesRouter);
router.use('/possibleAnswers', possibleAnswersRouter);
router.use('/questions', questionsRouter);
module.exports = router;
