const express = require('express');

const router = express.Router();

const modulesRouter = require('./modules.router');
const questionsRouter = require('./questions.router');
const allUsersRouter = require('./allUsers.router');
const possibleanswerRouter = require('./GameQuestionAnswerOptions.router');

router.use('/modules', modulesRouter);
router.use('/answer_choices', possibleanswerRouter);

const createUserProfilesRouter = require('./create-user-profiles.routes');
const createUserRolesRouter = require('./create-user-roles.routes');

router.use('/modules', modulesRouter);
router.use('/createUserProfiles', createUserProfilesRouter);
router.use('/createUserRoles', createUserRolesRouter);

const questionsRouter = require('./questions.router');

router.use('/questions', questionsRouter);
router.use('/allUsers', allUsersRouter);

module.exports = router;
