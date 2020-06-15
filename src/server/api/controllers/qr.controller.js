const knex = require('../../config/db');
const moment = require('moment-timezone');

const get = async (game) => {
  try {
    const now = moment().format();
    const instance = await knex('game_instances').insert({
      score: 0,
      created_at: now,
      updated_at: now,
      fk_game_id: game,
    });

    return {
      qr: `${instance[0]}-${now}`,
    };
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  get,
};
