const knex = require('../../config/db');

const getNextQuestions = async (id) => {
  try {
    const nextQuestion = await knex('questions')
      .join(
        'answers_given',
        'questions.id',
        '>',
        'answers_given.fk_question_id',
      )
      .join(
        'answer_choices',
        'answer_choices.id',
        '=',
        'answers_given.fk_answer_id',
      )
      .select('questions.question')
      .where('answer_choices.answer_correct', '=', '1')
      .where('answers_given.id', '=', id)
      .limit(1);

    if (nextQuestion.length === 0) {
      throw new Error(`wrong answer`, 404);
    }
    return nextQuestion[0];
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getNextQuestions,
};
