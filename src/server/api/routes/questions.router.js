const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const questionsController = require('../controllers/questions.controller');

/**
 * @swagger
 * /questions/{ID}:
 *  get:
 *    summary: Get question by ID
 *    description:
 *      Will return single question with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: object
 *         required: true
 *         properties:
 *            latitude:
 *              type: float
 *            longitude:
 *              type: float
 *         description: The ID of the coordinates to get
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:id', (req, res, next) => {
  questionsController
    .getQuestionById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
