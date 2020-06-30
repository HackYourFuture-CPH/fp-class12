const express = require('express');

const router = express.Router();

const modulesRouter = require('./modules.router');
const mapCoordinatesRouter = require('./map-coordinates.router');

router.use('/modules', modulesRouter);

router.use('/mapcoordinates', mapCoordinatesRouter);

const questionsRouter = require('./questions.router');
const allUsersRouter = require('./all-users.router');
const qrRouter = require('./qr.router');

const nextQuestion = require('./next-questions.router');
const possibleAnswerRouter = require('./game-question-answer-options.router');

const gameInstancesRouter = require('./game-instances.router');

router.use('/gameInstances', gameInstancesRouter);

const createUserProfilesRouter = require('./create-user-profiles.router');
const createUserRolesRouter = require('./create-user-roles.router');

router.use('/answer_choices', possibleAnswerRouter);
router.use('/createUserProfiles', createUserProfilesRouter);
router.use('/createUserRoles', createUserRolesRouter);
router.use('/next_question', nextQuestion);
router.use('/questions', questionsRouter);
router.use('/allUsers', allUsersRouter);
router.use('/qr', qrRouter);

module.exports = router;
