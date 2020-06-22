exports.up = function (knex) {
  return knex.schema.table('game_instances', function (table) {
    table.renameColumn('Finished', 'finished');
    table.renameColumn('fk_game_id', 'fk_game_factory_id');
  });
};

exports.down = function (knex) {
  return knex.schema.table('game_instances', function (table) {
    table.renameColumn('finished', 'Finished');
    table.renameColumn('fk_game_factory_id', 'fk_game_id');
  });
};
