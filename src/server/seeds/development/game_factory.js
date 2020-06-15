exports.seed = function (knex) {
  return knex('game_factory')
    .del()
    .then(function () {
      return knex('game_factory').insert([
        {
          id: 1,
          fk_map_id: 1,
          fk_theme_id: 1,
          fk_game_user_id: 1,
          max_players: 1,
          created_at: '2020-03-16 21:03:57',
          updated_at: '2020-03-16 21:03:57',
          deleted_at: null,
        },
      ]);
    });
};
