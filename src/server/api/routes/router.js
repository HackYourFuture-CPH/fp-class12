const express = require('express');

const router = express.Router();

const modulesRouter = require('./modules.router');
const questionsRouter = require('./questions.router');
const nextQuestion = require('./nextQuestions.router');

router.use('/modules', modulesRouter);
router.use('/questions', questionsRouter);
router.use('/next_question', nextQuestion);

module.exports = router;
