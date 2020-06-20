const knex = require('../../config/db');

const getAllUsers = async () => {
  try {
    return await knex('game_scores')
      .select('game_scores.fk_user_id', 'game_scores.score')
      .orderBy('game_scores.score', 'desc')
      .limit(2);
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getAllUsers,
};
