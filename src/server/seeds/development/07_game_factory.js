exports.seed = function (knex) {
  return knex('game_factory')
    .del()
    .then(function () {
      return knex('game_factory').insert([
        {
          fk_map_id: 1,
          fk_theme_id: 1,
          fk_game_user_id: 1,
          max_players: 10,
        },
      ]);
    });
};
