const express = require('express');

const router = express.Router();

// Router imports
const modulesRouter = require('./modules.router');
<<<<<<< HEAD
const newGameRouter = require('./newGame.router');
=======
const questionsRouter = require('./questions.router');
>>>>>>> develop

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
router.use('/newGame', newGameRouter);

module.exports = router;
