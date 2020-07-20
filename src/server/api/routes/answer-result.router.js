const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const answerResultController = require('../controllers/answer-result.controller');

/**
 * @swagger
 * /answer-result/{answer-given.id}:
 *  get:
 *    summary: get answer result
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
  answerResultController
    .answerResult(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
