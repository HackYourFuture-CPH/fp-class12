exports.seed = function (knex) {
  return knex('roles')
    .del()
    .then(function () {
      return knex('roles').insert([
        {
          rol_name: 'CREATOR dummy',
        },
        {
          rol_name: 'HOST dummy',
        },
        {
          rol_name: 'PLAYER dummy',
        },
        {
          rol_name: 'DEV dummy',
        },
      ]);
    });
};
