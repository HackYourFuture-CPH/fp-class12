const knex = require('../../config/db');
const moment = require('moment-timezone');

// Creating user in users table
const createUser = async (body) => {
  await knex('users').insert({
    id: body.id,
    uid: body.uid,
    name: body.name,
    email: body.email,
    created_at: moment(body.created_at).format(),
    updated_at: moment(body.updated_at).format(),
    deleted_at: moment(body.deleted_at).format(),
  });
  return {
    successfull: true,
  };
};

module.exports = { createUser };
