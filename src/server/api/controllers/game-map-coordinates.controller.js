const knex = require('../../config/db');

const gameMapCoordinates = async (id) => {
  try {
    const mapCoords = await knex('maps')
      .join('game_factory', 'game_factory.fk_map_id', '=', 'maps.id')
      .select(
        'maps.lat_top_left',
        'maps.long_top_left',
        'maps.lat_top_right',
        'maps.long_top_right',
        'maps.lat_bottom_left',
        'maps.long_bottom_left',
        'maps.lat_bottom_right',
        'maps.long_bottom_right',
      )
      .where('game_factory.id', '=', id);

    if (mapCoords.length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    return mapCoords;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  gameMapCoordinates,
};
