/* TODO: This is an example controller to illustrate a server side controller.
Can be deleted as soon as the first real controller is added. */

const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');
// const moment = require('moment-timezone');

const getpossibleAnswersRouter = async () => {
  try {
    return await knex('answer_choices').select(
      'answer_choices.id',
      'answer_text',
    );
  } catch (error) {
    return error.message;
  }
};

const getpossibleAnswersById = async (id) => {
  try {
    const answerChoices = await knex('answer_choices')
      .select('answer_choices.id as id', 'choices')
      .where({ id });
    if (answerChoices.length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    return answerChoices;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getpossibleAnswersRouter,
  getpossibleAnswersById,
};
