const express = require('express');

const router = express.Router({ mergeParams: true });

const createUserProfilesController = require('../controllers/create-user-profiles.controller');

/**
 * @swagger
 * /users:
 *  post:
 *    summary: Create a user
 *    description:
 *      Will create a user.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: user
 *        description: The user to create.
 *        schema:
 *          type: object
 *          required:
 *            - id
 *            - uid
 *            - name
 *            - email
 *            - created_at
 *            - updated_at
 *            - deleted_at
 *          properties:
 *            id:
 *              type: integer
 *            uid:
 *              type: string
 *            name:
 *              type: string
 *            email:
 *              type: string
 *            created_at:
 *              type: string
 *              format: date-time
 *            updated_at:
 *              type: string
 *              format: date-time
 *            deleted_at:
 *              type: string
 *              format: date-time
 *    responses:
 *      201:
 *        description: User created
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/', (req, res) => {
  createUserProfilesController
    .createModule(req.body)
    .then((result) => res.json(result))
    .catch((error) => {
      console.log(error);

      res.status(400).send('Bad request').end();
    });
});

module.exports = router;
