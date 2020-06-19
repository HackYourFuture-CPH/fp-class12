exports.seed = function (knex) {
  return knex('users')
    .del()
    .then(function () {
      return knex('users').insert([
        {
          fk_avatar_id: 1,
          uid: 'nothing_for_now',
          name: 'Test',
          email: 'test@test.com',
        },
      ]);
    });
};
