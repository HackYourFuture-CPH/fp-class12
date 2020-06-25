const knex = require('../../config/db');

const getQuestionById = async (gameFactoryId, questionId) => {
  try {
    const questions = await knex('questions')
      .join('game_factory', 'questions.fk_game_factory_id', 'game_factory.id')
      .select('questions.question')
      .where('game_factory.id', gameFactoryId)
      .where('questions.id', questionId);
    if (questions.length === 0) {
      throw new Error(
        `incorrect entry with the id of ${gameFactoryId} and ${questionId}`,
        404,
      );
    }
    return questions[0];
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getQuestionById,
};
