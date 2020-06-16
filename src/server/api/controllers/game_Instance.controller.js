const knex = require('../../config/db');

const createGameInstance = async (body) => {
  await knex('game_instances').insert({
    id: body.id,
    max_players: body.max_players,

  });

  return {
    successful: true,
  };
};

module.exports = {
  createGameInstance,
};
