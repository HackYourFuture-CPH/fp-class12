const knex = require('../../config/db');
const moment = require('moment-timezone');

// Creating user in users table
const createUser = async (body) => {
  await knex('users')
    .insert({
      id: body.id,
      uid: body.uid,
      name: body.name,
      email: body.email,
      created_at: moment(body.created_at).format(),
      updated_at: moment(body.updated_at).format(),
      deleted_at: moment(body.deleted_at).format(),
    })
    // For that particular created user, creating an entry in users_roles table
    .returning('id')
    .into('users')
    .then(async (id) => {
      await knex('user_roles').insert({
        id: body.id,
        fk_role_id: body.fk_role_id,
        fk_user_id: id,
        created_at: moment(body.created_at).format(),
        updated_at: moment(body.updated_at).format(),
        deleted_at: moment(body.deleted_at).format(),
      });
    });
  return {
    successfull: true,
  };
};

module.exports = { createUser };
