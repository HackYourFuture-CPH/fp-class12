const knex = require('../../config/db');

// Creating user roles in user-roles table
const createUserRoles = async (body) => {
  await knex('user_roles').insert({
    fk_role_id: body.fk_role_id,
    fk_user_id: body.fk_user_id,
  });
  return {
    successful: true,
  };
};

module.exports = { createUserRoles };
