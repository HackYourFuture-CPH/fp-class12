const knex = require('../../config/db');
const moment = require('moment-timezone');

const createGameInstance = async (body) => {
  await knex('game_instances').insert({
    id: body.id,
    max_players: body.max_players,
    created_at: moment(body.created_at).format(),
    updated_at: moment(body.updated_at).format(),
  });

  return {
    successful: true,
  };
};

module.exports = {
  createGameInstance,
};
