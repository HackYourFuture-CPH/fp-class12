const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const resolveQuestionsController = require('../controllers/resolve-question.controller');

/**
 * @swagger
 * /resolve-question/{actual_answer.ID}:
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
  resolveQuestionsController
    .resolveQuestion(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
