const express = require('express');

const router = express.Router();

const modulesRouter = require('./modules.router');
const mapcoordinatesRouter = require('./map-coordinates.router');

router.use('/modules', modulesRouter);

router.use('/mapcoordinates', mapcoordinatesRouter);

const questionsRouter = require('./questions.router');
const allUsersRouter = require('./all-users.router');
const qrRouter = require('./qr.router');

const possibleanswerRouter = require('./game-question-answer-options.router');

const gameInstancesRouter = require('./game-instances.router');

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
const newGameRouter = require('./create-new-game.router');

router.use('/modules', modulesRouter);
router.use('/new-game', newGameRouter);

const getQuestionByIdRouter = require('./getQuestionById.router');

router.use('/getQuestionById', getQuestionByIdRouter);

module.exports = router;
