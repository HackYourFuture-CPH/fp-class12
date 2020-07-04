const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const resolveQuestionController = require('../controllers/resolve-question.controller');

/**
 * @swagger
 * /resolve-question/{answer-given.id}:
 *  get:
 *    summary: Get next question
 *    description:
 *      Will return next question with parameter for the answer given id
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
  resolveQuestionController
    .resolveQuestion(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
