exports.seed = function (knex) {
  return (
    knex('roles')
      // .del()
      .then(function () {
        return knex('roles').insert([
          {
            id: 1,
            name: 'CREATOR dummy',
            created_at: '2020-03-16 21:03:57',
            updated_at: '2020-03-16 21:03:57',
          },
          {
            id: 2,
            name: 'HOST dummy',
            created_at: '2020-03-16 21:03:57',
            updated_at: '2020-03-16 21:03:57',
          },
          {
            id: 3,
            name: 'PLAYER dummy',
            created_at: '2020-03-16 21:03:57',
            updated_at: '2020-03-16 21:03:57',
          },
          {
            id: 4,
            name: 'DEV dummy',
            created_at: '2020-03-16 21:03:57',
            updated_at: '2020-03-16 21:03:57',
          },
        ]);
      })
  );
};
