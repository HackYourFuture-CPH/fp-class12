const express = require('express');

const router = express.Router();

const modulesRouter = require('./modules.router');
const possibleanswerRouter = require('./possibleanswer.router');

router.use('/modules', modulesRouter);
router.use('/answer_choices', possibleanswerRouter);

const questionsRouter = require('./questions.router');

router.use('/questions', questionsRouter);

module.exports = router;
