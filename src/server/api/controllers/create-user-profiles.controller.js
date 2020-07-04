const knex = require('../../config/db');

// Creating user in users table
const createUser = async (body) => {
  await knex('users').insert({
    fk_avatar_id: body.fk_avatar_id,
    uid: body.uid,
    user_name: body.user_name,
    email: body.email,
  });
  return {
    successful: true,
  };
};

module.exports = { createUser };
