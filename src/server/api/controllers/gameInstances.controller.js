const knex = require('../../config/db');

const getGameInstances = async () => {
  try {
    return await knex('game_instances')
      .join('users', 'users.id', 'game_instances.fk_user_id')
      .select('game_instances.id', 'users.name', 'game_instances.score')
      .where({ 'users.id': 'game_instances.fk_user_id' });
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getGameInstances,
};
