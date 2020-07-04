const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const nextQuestionsController = require('../controllers/next-questions.controller');

/**
 * @swagger
 * /next-question/{answer-given.id}:
 *  get:
 *    summary: Get next question
 *    description:
 *      Will return next question  if answered correct with parameter for the actual answer id
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: answer-given.id
 *       schema:
 *         type: integer
 *         required: true
 *         description: The id of the question to get the next one.
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
