const knex = require('../../config/db');

const createGameInstance = async (body) => {
  await knex('game_instances').insert({
    fk_game_id: body.fk_game_id,

  });

  return {
    successful: true,
  };
};

module.exports = {
  createGameInstance,
};
