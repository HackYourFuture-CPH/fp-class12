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
      .select('questions.question');
    if (nextQuestion.length === 0) {
      throw new Error(`Incorrect entry with the id of ${id}`, 404);
    }
    const answerResult = await knex('answer_choices')
      .join(
        'answers_given',
        'answer_choices.id',
        '=',
        'answers_given.fk_answer_id',
      )
      .select('answer_choices.answer_correct')
      .where('answers_given.id', '=', id)
      .where('answer_choices.answer_correct', '=', true);
    if (answerResult.length === 0) {
      throw new Error(`Incorrect entry with the id of ${id}`, 404);
    }
    return [
      { nextQuestion: nextQuestion[0] },
      { answerResult: answerResult[0] },
    ];
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  resolveQuestion,
};
