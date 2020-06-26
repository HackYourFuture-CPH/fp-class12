const express = require('express');

const router = express.Router();

// Router imports
const modulesRouter = require('./modules.router');
const mapcoordinatesRouter = require('./mapcoordinates.router');
const possibleanswerRouter = require('./GameQuestionAnswerOptions.router');

const createUserProfilesRouter = require('./create-user-profiles.router');
const createUserRolesRouter = require('./create-user-roles.router');
const questionsRouter = require('./questions.router');
const allUsersRouter = require('./allUsers.router');
const qrRouter = require('./qr.router');

const gameInstancesRouter = require('./gameInstances.router');

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: '1.0',
      title: 'Final project',
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
router.use('/modules', modulesRouter);
router.use('/mapcoordinates', mapcoordinatesRouter);
router.use('/answer_choices', possibleanswerRouter);

router.use('/users', createUserProfilesRouter);
router.use('/user_roles', createUserRolesRouter);
router.use('/questions', questionsRouter);
router.use('/allUsers', allUsersRouter);
router.use('/qr', qrRouter);

router.use('/game-instances', gameInstancesRouter);

module.exports = router;
