const express = require('express');

const router = express.Router({ mergeParams: true });

const createUserRolesController = require('../controllers/create-user-roles.controller');

/**
 * @swagger
 * /user_roles:
 *  post:
 *    summary: Create a user role
 *    description:
 *      Will create a specific role for a user.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: user roles
 *        description: The user roles to create.
 *        schema:
 *          type: object
 *          required:
 *            - fk_role_id
 *            - fk_user_id
 *          properties:
 *            fk_role_id:
 *              type: integer
 *            fk_user_id:
 *              type: integer
 *    responses:
 *      201:
 *        description: User roles created
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/', (req, res, next) => {
  createUserRolesController
    .createUserRoles(req.body)
    .then((result) => res.json(result))
    .catch(next)
    .catch((error) => {
      console.log(error);
      res.status(400).send('Bad request').end();
    });
});

module.exports = router;
