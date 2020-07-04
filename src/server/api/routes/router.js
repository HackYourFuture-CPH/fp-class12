const express = require('express');

const router = express.Router();
const mapcoordinatesRouter = require('./map-coordinates.router');
const questionsRouter = require('./questions.router');
const allUsersRouter = require('./all-users.router');
const qrRouter = require('./qr.router');
const possibleanswerRouter = require('./game-question-answer-options.router');
const gameInstancesRouter = require('./game-instances.router');
const createUserProfilesRouter = require('./create-user-profiles.router');
const createUserRolesRouter = require('./create-user-roles.router');
const getQuestionByIdRouter = require('./getQuestionById.router');
const newGameRouter = require('./create-new-game.router');
const nextQuestionRouter = require('./next-questions.router');
const resolveQuestionRouter = require('./resolve-question.router');

router.use('/mapcoordinates', mapcoordinatesRouter);
router.use('/gameInstances', gameInstancesRouter);
router.use('/answer_choices', possibleanswerRouter);
router.use('/createUserProfiles', createUserProfilesRouter);
router.use('/createUserRoles', createUserRolesRouter);
router.use('/next-question', nextQuestionRouter);
router.use('/questions', questionsRouter);
router.use('/allUsers', allUsersRouter);
router.use('/qr', qrRouter);
router.use('/getQuestionById', getQuestionByIdRouter);
router.use('/new-game', newGameRouter);
router.use('/resolve-question', resolveQuestionRouter);

module.exports = router;
