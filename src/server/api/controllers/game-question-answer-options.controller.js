const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');

const getPossibleAnswerById = async (id) => {
  try {
    const answerChoices = await knex('answer_choices')
      .select('answer_text')
      .where('fk_question_id', id);

    if (answerChoices.length === 0) {
      throw new Error(`Incorrect entry with the id of ${id}`, 404);
    }
    return answerChoices;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getPossibleAnswerById,
};
