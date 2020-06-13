exports.seed = function (knex) {
  // Deletes ALL existing entr
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entri
      return knex('users').insert([
        {
          id: 1,
          score: 2,
          createdAt: '2020-05-10 00:00:00',
          updatedAt: '2020-05-15 00:00:00',
          deletedAt: '2020-05-20 00:00:00',
        },
        {
          id: 2,
          score: 5,
          createdAt: '2020-05-07 00:00:00',
          updatedAt: '2020-05-08 00:00:00',
          deletedAt: '2020-05-22 00:00:00',
        },
      ]);
    });
};
