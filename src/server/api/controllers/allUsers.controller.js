const knex = require('../../config/db');

const getUsers = async () => {
  try {
    return await knex('users')
      .select('users.id', 'users.score')
      .orderBy('users.score', 'desc')
      .limit(15);
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getUsers,
};
