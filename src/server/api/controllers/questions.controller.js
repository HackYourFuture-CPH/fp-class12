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

const getQuestionById = async (gameFactoryId) => {
  try {
    const modules = await knex('questions')
      .innerJoin(
        'game_factory',
        'questions.fk_game_factory_id',
        '=',
        'game_factory.id',
      )
      .select('questions.question')
      .where({ 'questions.fk_game_factory_id': gameFactoryId });
    if (modules.length === 0) {
      throw new Error(`incorrect entry with the id of ${gameFactoryId}`, 404);
    }
    return modules;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getQuestions,
  getQuestionById,
};
