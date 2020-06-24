const express = require('express');

const router = express.Router();

const modulesRouter = require('./modules.router');
const possibleanswerRouter = require('./GameQuestionAnswerOptions.router');

const gameInstancesRouter = require('./gameInstances.router');

router.use('/modules', modulesRouter);
router.use('/gameInstances', gameInstancesRouter);
router.use('/answer_choices', possibleanswerRouter);

const createUserProfilesRouter = require('./create-user-profiles.routes');
const createUserRolesRouter = require('./create-user-roles.routes');

router.use('/modules', modulesRouter);
router.use('/createUserProfiles', createUserProfilesRouter);
router.use('/createUserRoles', createUserRolesRouter);

const questionsRouter = require('./questions.router');

router.use('/questions', questionsRouter);

module.exports = router;
