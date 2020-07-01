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
 * /questions/game-factory/{id}:
 *  get:
 *    summary: Get question by id
 *    description:
 *      Will return single question with a matching id.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: id
 *       type: integer
 *       required: true
 *       description: The id of the module to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */

router.get('/game-factory/:id', (req, res, next) => {
  questionsController
    .getQuestionById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
