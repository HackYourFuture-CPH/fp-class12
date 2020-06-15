exports.seed = function (knex) {
  return knex('roles')
    .del()
    .then(function () {
      return knex('roles').insert([
        {
          name: 'CREATOR dummy',
        },
        {
          name: 'HOST dummy',
        },
        {
          name: 'PLAYER dummy',
        },
        {
          name: 'DEV dummy',
        },
      ]);
    });
};
