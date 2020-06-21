exports.seed = function (knex) {
  return knex('avatars')
    .del()
    .then(function () {
      return knex('avatars').insert([
        {
          image_url: 'client/assets/images/avatars/girl-avatar.png',
        },
      ]);
    });
};
