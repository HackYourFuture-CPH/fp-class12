const knex = require('../../config/db');

const createNewGameInstance = async (body) => {
  await knex('game_scores').insert({
    fk_user_id: body.fk_user_id,
    game_timer: body.game_timer,
  });

  return {
    successful: true,
  };
};


module.exports = {
  createNewGameInstance,
};
