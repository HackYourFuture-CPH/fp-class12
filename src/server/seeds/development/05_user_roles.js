/* eslint-disable @typescript-eslint/camelcase */

exports.seed = function (knex) {
  return knex('user_roles')
    .del()
    .then(function () {
      return knex('user_roles').insert([
        {
          id: 1,
          fk_role_id: 1,
          fk_user_id: 1,
          created_at: '2020-03-16 21:03:57',
          updated_at: '2020-03-16 21:03:57',
          deleted_at: null,
        },
      ]);
    });
};
