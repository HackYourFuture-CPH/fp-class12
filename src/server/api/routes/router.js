const express = require('express');

const router = express.Router();

const modulesRouter = require('./modules.router');
const questionsRouter = require('./questions.router');
const allUsersRouter = require('./allUsers.router');
const qrRouter = require('./qr.router');
const possibleanswerRouter = require('./GameQuestionAnswerOptions.router');

const gameInstancesRouter = require('./gameInstances.router');

router.use('/gameInstances', gameInstancesRouter);

const createUserProfilesRouter = require('./create-user-profiles.routes');
const createUserRolesRouter = require('./create-user-roles.routes');

router.use('/modules', modulesRouter);
router.use('/answer_choices', possibleanswerRouter);
router.use('/createUserProfiles', createUserProfilesRouter);
router.use('/createUserRoles', createUserRolesRouter);
router.use('/questions', questionsRouter);
router.use('/allUsers', allUsersRouter);
router.use('/qr', qrRouter);

module.exports = router;
