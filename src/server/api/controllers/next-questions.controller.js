const knex = require('../../config/db');

const getNextQuestions = async (id) => {
  try {
    const nextQuestion = await knex('questions')
      .join(
        'actual_answers',
        'questions.id',
        '>',
        'actual_answers.fk_question_id',
      )
      .join(
        'answer_choices',
        'answer_choices.id',
        '=',
        'actual_answers.fk_answer_id',
      )
      .select('questions.question', 'questions.id')
      .where('answer_choices.answer_correct', '=', '1')
      .where('actual_answers.id', '=', id)
      .limit(1);

    if (nextQuestion.length === 0) {
      throw new Error(`wrong answer ${id} `, 404);
    }
    return nextQuestion;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getNextQuestions,
};
