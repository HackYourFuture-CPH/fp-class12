const knex = require('../../config/db');

const resolveQuestion = async (id) => {
  try {
    const nextQuestion = await knex('questions')
      .join(
        'answers_given',
        'questions.id',
        '>',
        'answers_given.fk_question_id',
      )
      .where('answers_given.id', '=', id)
      .select('questions.question', 'questions.id');
    if (nextQuestion.length === 0) {
      throw new Error(`Incorrect entry with the id of ${id}`, 404);
    }
    return nextQuestion[0];
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  resolveQuestion,
};
