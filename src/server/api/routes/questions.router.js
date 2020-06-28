const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const questionsController = require('../controllers/questions.controller');

/**
 * @swagger
 * /questions:
 *  get:
 *    summary: Get all questions
 *    description:
 *      Will return all questions of an ongoing game.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  questionsController
    .getQuestions()
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /questions/game_factory/{ID}:
 *  get:
 *    summary: Get question by ID
 *    description:
 *      Will return single question with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       type: integer
 *       required: true
 *       description: The ID of the module to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */

router.get('/game_factory/:id', (req, res, next) => {
  questionsController
    .getQuestionById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
