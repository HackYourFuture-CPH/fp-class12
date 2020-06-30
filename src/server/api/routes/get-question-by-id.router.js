const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const getQuestionByIdController = require('../controllers/get-question-by-id.controller');

/**
 * @swagger
 * /game-factories/{ID}/questions/{QUESTIONID}:
 *  get:
 *    summary: Get question by game-factory ID by question ID
 *    description:
 *      Will return first question with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the game-factory
 *     - in: path
 *       name: QUESTIONID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the question
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
