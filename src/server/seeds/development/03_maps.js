exports.seed = function (knex) {
  return knex('maps')
    .del()
    .then(function () {
      return knex('maps').insert([
        {
          lat_top_left: 12.5771308,
          long_top_left: 55.6782507,
          lat_top_right: 12.5771308,
          long_top_right: 55.6782507,
          lat_bottom_left: 12.5771308,
          long_bottom_left: 55.6782507,
          lat_bottom_right: 12.5772595,
          long_bottom_right: 55.6782749,
        },
      ]);
    });
};
