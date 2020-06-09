const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');
const moment = require('moment-timezone');

const getQuestions = async () => {
  try {
    return await knex('questions').select('questions.id', 'questions.question');
  } catch (error) {
    return error.message;
  }
};

const getQuestionById = async (id) => {
  try {
    const questions = await knex('questions')
      .select('questions.id as id', 'question')
      .where({ id });
    if (questions.length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    return questions;
  } catch (error) {
    return error.message;
  }
};

const editQuestion = async (questionId, updatedQuestion) => {
  return knex('questions')
    .where({ id: questionId })
    .update({
      question: updatedQuestion.question,
      latitude: updatedQuestion.latitude,
      longitude: updatedQuestion.longitude,
      points: updatedQuestion.points,
      created_at: moment(updatedQuestion.created_at).format(),
      deleted_at: moment(updatedQuestion.deleted_at).format(),
      updated_at: moment(updatedQuestion.updated_at).format(),
      fk_game_id: updatedQuestion.fk_game_id,
    });
};

const deleteQuestion = async (questionsId) => {
  return knex('questions').where({ id: questionsId }).del();
};

const createQuestion = async (body) => {
  await knex('questions').insert({
    question: body.question,
    latitude: body.latitude,
    longitude: body.longitude,
    points: body.points,
    created_at: moment(body.created_at).format(),
    deleted_at: moment(body.deleted_at).format(),
    updated_at: moment(body.updated_at).format(),
    fk_game_id: body.fk_game_id,
  });

  return {
    successful: true,
  };
};

module.exports = {
  getQuestions,
  getQuestionById,
  deleteQuestion,
  createQuestion,
  editQuestion,
};
