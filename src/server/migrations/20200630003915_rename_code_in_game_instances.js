exports.up = function (knex) {
  return knex.schema.table('game_instances', function (table) {
    table.renameColumn('code', 'game_code');
  });
};

exports.down = function (knex) {
  return knex.schema.table('game_instances', function (table) {
    table.renameColumn('game_code', 'code');
  });
};
