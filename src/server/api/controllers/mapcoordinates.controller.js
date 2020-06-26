const knex = require('../../config/db');

const getMapCoordinates = async () => {
  try {
    return await knex('maps').select(
      'maps.lat_top_left',
      'maps.long_top_left',
      'maps.lat_top_right',
      'maps.long_top_right',
      'maps.lat_bottom_left',
      'maps.long_bottom_left',
      'maps.lat_bottom_right',
      'maps.lat_bottom_right',
    );
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getMapCoordinates,
};
