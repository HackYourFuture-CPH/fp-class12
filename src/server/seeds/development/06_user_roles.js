exports.seed = function (knex) {
  return knex('user_roles')
    .del()
    .then(function () {
      return knex('user_roles').insert([
        {
          fk_role_id: 1,
          fk_user_id: 1,
        },
      ]);
    });
};
