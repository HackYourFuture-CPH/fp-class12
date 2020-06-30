const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const nextQuestionsController = require('../controllers/next-questions.controller');

/**
 * @swagger
 * /next-question/{actual_answer.ID}:
 *  get:
 *    summary: Get next question
 *    description:
 *      Will return next question  if answered correct with parameter for the actual answer ID
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: actual_answer.ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the question to get the next one.
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:id', (req, res, next) => {
  nextQuestionsController
    .getNextQuestions(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
