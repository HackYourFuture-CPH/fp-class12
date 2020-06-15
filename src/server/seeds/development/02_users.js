exports.seed = function (knex) {
  return knex('users')
    .del()
    .then(function () {
      return knex('users').insert([
        {
          uid: 'nothing_for_now',
          name: 'Test',
          email: 'test@test.com',
        },
      ]);
    });
};
