const knex = require('../../config/db');

const createNewGameInstance = async (body) => {
  await knex('game_instances').insert({
    code: body.code,
    fk_user_id: body.fk_user_id,
    fk_game_factory_id: body.fk_game_factory_id,
    fk_game_scores_id: body.fk_game_scores_id,
  });

  return {
    successful: true,
  };
};

module.exports = {
  createNewGameInstance,
};
