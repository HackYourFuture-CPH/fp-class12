/* eslint-disable @typescript-eslint/camelcase */

exports.seed = function (knex) {
  return knex('themes')
    .del()
    .then(function () {
      return knex('themes').insert([
        {
          id: 1,
          tile: 'Stamen Design',
          created_at: '2020-03-16 21:03:57',
          updated_at: '2020-03-16 21:03:57',
          deleted_at: null,
        },
        {
          id: 2,
          tile: 'CyclOSM',
          created_at: '2020-03-16 21:03:57',
          updated_at: '2020-03-16 21:03:57',
          deleted_at: null,
        },
      ]);
    });
};
