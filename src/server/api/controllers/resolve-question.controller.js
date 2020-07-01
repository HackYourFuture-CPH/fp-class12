const knex = require('../../config/db');

const resolveQuestion = async (id) => {
  try {
    const nextQuestion = await knex('questions')
      .join(
        'actual_answers',
        'questions.id',
        '=',
        'actual_answers.fk_question_id',
      )
      .join(
        'answer_choices',
        'answer_choices.id',
        '=',
        'actual_answers.fk_answer_id',
      )
      .select('questions.question')
      .where('answer_choices.answer_correct', '=', '1')
      .where('actual_answers.id', '=', id)
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
  resolveQuestion,
};
