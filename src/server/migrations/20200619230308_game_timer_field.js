exports.up = function (knex) {
  return knex.schema.table('game_scores', (table) => {
    table.time('game_timer');
  });
};

exports.down = function (knex) {
  return knex.schema.table('game_scores', (table) => {
    table.dropColumn('game_timer');
  });
};
