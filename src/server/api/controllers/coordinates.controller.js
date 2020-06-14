const knex = require('../../config/db');

const getCoordinates = async () => {
  try {
    return await knex('maps')
      .select('maps.*')
      .innerJoin('game_factory', 'maps.id', '=', 'game_factory.fk_map_id')
      .innerJoin(
        'game_instances',
        'game_factory.id',
        '=',
        'game_instances.fk_game_id',
      );
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getCoordinates,
};
