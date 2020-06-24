const knex = require('../../config/db');

const get = async (id) => {
  try {
    const instances = await knex('game_instances')
      .select('game_instances.game_code as QRCode')
      .where({ id });

    if (instances.length === 0) {
      throw new Error('There is no record');
    }
    return {
      qr: instances[0].QRCode,
    };
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  get,
};
