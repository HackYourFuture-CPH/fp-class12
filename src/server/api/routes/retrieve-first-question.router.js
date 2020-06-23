const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const firstQuestionController = require('../controllers/retrieve-first-question.controller');

/**
 * @swagger
 * /get_first_question/{ID}:
 *  get:
 *    summary: Get first question by ID
 *    description:
 *      Will return first question with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the module to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:id', (req, res, next) => {
  firstQuestionController
    .getFirstQuestionById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
