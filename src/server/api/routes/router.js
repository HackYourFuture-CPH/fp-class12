const express = require('express');

const router = express.Router();
const mapCoordinatesRouter = require('./map-coordinates.router');
const questionsRouter = require('./questions.router');
const allUsersRouter = require('./all-users.router');
const qrRouter = require('./qr.router');
const possibleAnswerRouter = require('./game-question-answer-options.router');
const gameInstancesRouter = require('./game-instances.router');
const createUserProfilesRouter = require('./create-user-profiles.router');
const createUserRolesRouter = require('./create-user-roles.router');
const getQuestionByIdRouter = require('./get-question-by-id.router');
const newGameRouter = require('./create-new-game.router');

router.use('/map-coordinates', mapCoordinatesRouter);
router.use('/game-instances', gameInstancesRouter);
router.use('/answer-choices', possibleAnswerRouter);
router.use('/create-user-profiles', createUserProfilesRouter);
router.use('/create-user-roles', createUserRolesRouter);
router.use('/questions', questionsRouter);
router.use('/all-users', allUsersRouter);
router.use('/qr', qrRouter);
router.use('/get-question-by-id', getQuestionByIdRouter);
router.use('/new-game', newGameRouter);

module.exports = router;
