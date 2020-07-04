const knex = require('../../config/db');

const getQRCode = async (id) => {
  try {
    const game_instance = await knex('game_instances')
      .select('game_instances.game_code as QRCode')
      .where({ id });

    if (game_instance.length === 0) {
      throw new Error('There is no record');
    }
    return {
      QR: game_instance[0].QRCode,
    };
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getQRCode,
};
