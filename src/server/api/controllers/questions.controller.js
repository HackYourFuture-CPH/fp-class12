const knex = require('../../config/db');

const getQuestions = async () => {
  try {
    return await knex('questions')
      .join(
        'game_factory',
        'questions.fk_game_factory_id',
        '=',
        'game_factory.id',
      )
      .select('questions.question');
  } catch (error) {
    return error.message;
  }
};

const getQuestionById = async (gameFactoryId) => {
  try {
    const question = await knex('questions')
      .innerJoin(
        'game_factory',
        'questions.fk_game_factory_id',
        '=',
        'game_factory.id',
      )
      .select('questions.question')
      .where({ 'questions.fk_game_factory_id': gameFactoryId });
    if (question.length === 0) {
      throw new Error(`Incorrect entry with the id of ${gameFactoryId}`, 404);
    }
    return question;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getQuestions,
  getQuestionById,
};
