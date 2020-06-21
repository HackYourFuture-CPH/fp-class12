const knex = require('../../config/db');

const getNextQuestions = async (id) => {
  try {
    const nextQuestion = await knex('questions')
      .join(
        'actual_answers',
        'actual_answers.fk_question_id',
        '=',
        'questions.id',
      )
      .join(
        'answer_choices',
        'answer_choices.id',
        '=',
        'actual_answers.fk_answer_id',
      )
      .select('questions.question')
      // .where('answer_choices.answer_correct', '=', '1')
      .where('questions.id', '>', id)
      .limit('1');

    if (nextQuestion.length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    return nextQuestion;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getNextQuestions,
};
