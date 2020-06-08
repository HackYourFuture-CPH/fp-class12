// TODO: This is a sample seed file for demonstration. Remove before adding real ones.

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('game_instances')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('game_instances').insert([
        {
          score: 3,
        },
        {
          score: 5,
          created_at: '2020-05-07 00:00:00',
          updated_at: '2020-05-08 00:00:00',
        },
      ]);
    });
};
