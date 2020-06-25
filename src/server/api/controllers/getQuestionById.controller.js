const knex = require('../../config/db');

const getQuestionById = async (id) => {
  try {
    const modules = await knex('questions')
      .join('game_factory', 'questions.fk_game_factory_id', 'game_factory.id')
      .join(
        'game_instances',
        'game_factory.id',
        'game_instances.fk_game_factory_id',
      )
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
  getQuestionById,
};
