exports.up = function (knex) {
  return knex.schema.table('game_instances', function (table) {
    table.boolean('Finished');
  });
};

exports.down = function (knex) {
  return knex.schema.table('game_instances', function (table) {
    table.dropColumn('Finished');
  });
};
