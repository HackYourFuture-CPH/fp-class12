const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const getQuestionByIdController = require('../controllers/getQuestionById.controller');

/**
 * @swagger
 * /getQuestionById/{ID}:
 *  get:
 *    summary: Get question by ID
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
  getQuestionByIdController
    .getQuestionById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
