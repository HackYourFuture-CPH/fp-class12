const knex = require('../../config/db');

const getFirstQuestion = async (id) => {
  try {
    const modules = await knex('questions')
      .join('game_factory', 'questions.fk_game_id', '=', 'game_factory.id')
      .select('questions.question')
      .where({ id });
    if (modules.length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    return modules;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getFirstQuestion,
};
