exports.seed = function (knex) {
  return knex('themes')
    .del()
    .then(function () {
      return knex('themes').insert([
        {
          tile: 'Stamen Design',
        },
        {
          tile: 'CyclOSM',
        },
      ]);
    });
};
