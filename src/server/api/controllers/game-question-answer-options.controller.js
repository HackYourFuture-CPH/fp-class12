const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');

const getPossibleanswerById = async (id) => {
  try {
    const modules = await knex('answer_choices')
      .select('answer_text')
      .where('fk_question_id', id);

    if (modules.length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    return modules;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getPossibleanswerById,
};
