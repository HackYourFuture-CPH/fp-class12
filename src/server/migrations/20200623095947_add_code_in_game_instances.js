exports.up = function (knex) {
  return knex.schema.table('game_instances', function (table) {
    table.string('code');
  });
};

exports.down = function (knex) {
  return knex.schema.table('game_instances', function (table) {
    table.dropColumn('code');
  });
};
