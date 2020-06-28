exports.up = function (knex) {
  return knex.schema.table('game_instances', function (table) {
    table.dropColumn('score');
  });
};

exports.down = function (knex) {
  return knex.schema.table('game_instances', function (table) {
    table.integer('score');
  });
};
