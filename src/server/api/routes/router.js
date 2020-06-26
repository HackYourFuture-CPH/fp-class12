const express = require('express');

const router = express.Router();

const modulesRouter = require('./modules.router');
const mapcoordinatesRouter = require('./mapcoordinates.router');

router.use('/modules', modulesRouter);

router.use('/mapcoordinates', mapcoordinatesRouter);

const questionsRouter = require('./questions.router');
const allUsersRouter = require('./allUsers.router');
const qrRouter = require('./qr.router');

const possibleanswerRouter = require('./GameQuestionAnswerOptions.router');

const gameInstancesRouter = require('./gameInstances.router');

router.use('/gameInstances', gameInstancesRouter);

const createUserProfilesRouter = require('./create-user-profiles.router');
const createUserRolesRouter = require('./create-user-roles.router');

router.use('/modules', modulesRouter);
router.use('/answer_choices', possibleanswerRouter);
router.use('/createUserProfiles', createUserProfilesRouter);
router.use('/createUserRoles', createUserRolesRouter);
router.use('/questions', questionsRouter);
router.use('/allUsers', allUsersRouter);
router.use('/qr', qrRouter);

module.exports = router;
