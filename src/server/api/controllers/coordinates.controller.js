const knex = require('../../config/db');

const getCoordinates = async () => {
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

const getCoordinatesById = async (id) => {
    try {
        const coordinates = await knex('maps')
            .select(
                'maps.lat_top_left',
                'maps.long_top_left',
                'maps.lat_top_right',
                'maps.long_top_right',
                'maps.lat_bottom_left',
                'maps.long_bottom_left',
                'maps.lat_bottom_right',
                'maps.lat_bottom_right',
            )
            .where({ id });
        if (coordinates.length === 0) {
            throw new Error(`incorrect entry with the id of ${id}`, 404);
        }
        return coordinates;
    } catch (error) {
        return error.message;
    }
};

module.exports = {
    getCoordinates,
    getCoordinatesById,
};
