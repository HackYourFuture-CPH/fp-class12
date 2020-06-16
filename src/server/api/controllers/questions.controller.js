const knex = require('../../config/db');

const getQuestions = async () => {
  try {
    return await knex('questions')
      .join('game_factory', 'questions.fk_game_id', '=', 'game_factory.id')
      .select('questions.question');
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getQuestions,
};
