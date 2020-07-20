const knex = require('../../config/db');

const answerResult = async (id) => {
  try {
    const checkAnswerResult = await knex('answer_choices')
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
      throw new Error(`wrong answer`, 404);
    }
    return checkAnswerResult[0];
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  answerResult,
};
