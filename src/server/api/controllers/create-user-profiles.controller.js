const knex = require('../../config/db');

// Creating user in users table
const createUser = async (body) => {
  await knex('users').insert({
    fk_avatar_id: body.fk_avatar_id,
    uid: body.uid,
    name: body.name,
    email: body.email,
  });
  return {
    successfull: true,
  };
};

module.exports = { createUser };
