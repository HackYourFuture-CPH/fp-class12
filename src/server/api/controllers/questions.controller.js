const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');

const getQuestionById = async (id) => {
  try {
    const questions = await knex('questions')
      .select('questions.id as id', 'latitude', 'longitude')
      .where({ id });
    if (questions.length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    return questions;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getQuestionById,
};
