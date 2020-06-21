exports.up = function (knex) {
  return knex.schema.table('game_instances', function (table) {
    table.integer('fk_game_id').unsigned().notNullable();
    table.foreign('fk_game_id').references('id').inTable('game_scores');
  });
};

exports.down = function (knex) {
  return knex.schema.table('game_instances', function (table) {
    table.dropForeign('fk_game_id');
    table.dropColumn('fk_game_id');
  });
};
