const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');

const getFirstQuestionById = async (id) => {
  try {
    const modules = await knex('questions')
      .innerJoin('game_factory', 'questions.fk_game_id', '=', 'game_factory.id')
      .select('questions.question')
      .where('questions.id', id);
    if (modules.length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    return modules;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getFirstQuestionById,
};
