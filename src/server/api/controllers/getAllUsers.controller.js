const knex = require('../../config/db');

const getAllUsers = async () => {
  try {
    return await knex('users')
      .join('game_instances', 'users.id', '=', 'game_instances.fk_user_id')
      .join('game_scores', 'users.id', '=', 'game_scores.fk_user_id')
      .select('users.name', 'game_scores.score')
      .where ('game_instances.finished', '=', '1')
      .orderBy('game_scores.score', 'desc');
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getAllUsers,
};
