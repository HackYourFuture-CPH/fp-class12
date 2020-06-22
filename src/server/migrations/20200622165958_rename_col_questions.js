exports.up = function (knex) {
  return knex.schema.table('questions', function (table) {
    table.renameColumn('fk_game_id', 'fk_game_factory_id');
  });
};

exports.down = function (knex) {
  return knex.schema.table('questions', function (table) {
    table.renameColumn('fk_game_factory_id', 'fk_game_id');
  });
};
