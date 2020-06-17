const knex = require('../../config/db');

const createGameInstance = async (body) => {
  await knex('game_instances').insert({
    fk_game_id: body.fk_game_id,
    timer_mode: body.time_mode,
  });

  return {
    successful: true,
  };
};

module.exports = {
  createGameInstance,
};
