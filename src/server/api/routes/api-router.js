const express = require('express');

const router = express.Router();

// Router imports
const mapCoordinatesRouter = require('./map-coordinates.router');
const possibleAnswerRouter = require('./game-question-answer-options.router');
const createUserProfilesRouter = require('./create-user-profiles.router');
const createUserRolesRouter = require('./create-user-roles.router');
const questionsRouter = require('./questions.router');
const allUsersRouter = require('./all-users.router');
const qrRouter = require('./qr.router');
const nextQuestionRouter = require('./next-questions.router');
const gameMapCoordinatesRouter = require('./game-map-coordinates.router');
const createNewGameRouter = require('./create-new-game.router');
const gameInstancesRouter = require('./game-instances.router');
const getQuestionByIdRouter = require('./get-question-by-id.router');

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: '1.0',
      title: 'Final Project',
      description: 'API documentation for the final project',
      contact: {},
    },
    host: '',
    basePath: '/api',
  },
  securityDefinitions: {},
  apis: ['./src/server/api/routes/*.js'],
};

const swaggerDocument = swaggerJsDoc(swaggerOptions);

// Route for Swagger API Documentation
router.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Application routes
router.use('/map-coordinates', mapCoordinatesRouter);
router.use('/answer-choices', possibleAnswerRouter);
router.use('/next-question', nextQuestionRouter);
router.use('/users', createUserProfilesRouter);
router.use('/user-roles', createUserRolesRouter);
router.use('/questions', questionsRouter);
router.use('/all-users', allUsersRouter);
router.use('/qr', qrRouter);
router.use('/game-instances', gameInstancesRouter);
router.use('/new-game', createNewGameRouter);
router.use('/game_factories', getQuestionByIdRouter);
router.use('/map-coords', gameMapCoordinatesRouter);

module.exports = router;
