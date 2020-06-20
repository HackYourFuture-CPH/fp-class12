const express = require('express');

const router = express.Router();

const modulesRouter = require('./modules.router');
const questionsRouter = require('./questions.router');
const allUsersRouter = require('./allUsers.router');

router.use('/modules', modulesRouter);
router.use('/questions', questionsRouter);
router.use('/allUsers', allUsersRouter);

module.exports = router;
