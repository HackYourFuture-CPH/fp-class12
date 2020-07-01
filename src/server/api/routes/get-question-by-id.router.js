const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const getQuestionByIdController = require('../controllers/get-question-by-id.controller');

/**
 * @swagger
 * /game-factories/{id}/questions/{questionId}:
 *  get:
 *    summary: Get question by game-factory id by question id
 *    description:
 *      Will return first question with a matching id.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: integer
 *         required: true
 *         description: The id of the game-factory
 *     - in: path
 *       name: questionId
 *       schema:
 *         type: integer
 *         required: true
 *         description: The id of the question
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:id/questions/:questionid', (req, res, next) => {
  getQuestionByIdController
    .getQuestionById(req.params.id, req.params.questionid)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
