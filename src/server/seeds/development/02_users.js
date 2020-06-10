exports.seed = function (knex) {
  return knex('users')
    .del()
    .then(function () {
      return knex('users').insert([
        {
          id: 1,
          uid: 'nothing_for_now',
          name: 'Test',
          email: 'test@test.com',
          created_at: '2020-03-16 21:03:57',
          updated_at: '2020-03-16 21:03:57',
          deleted_at: null,
        },
      ]);
    });
};
