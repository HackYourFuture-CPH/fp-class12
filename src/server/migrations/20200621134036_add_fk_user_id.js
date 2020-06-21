exports.up = function (knex) {
  return knex.schema.table('game_instances', function (table) {
    table.integer('fk_user_id').unsigned().notNullable();
    table.foreign('fk_user_id').references('id').inTable('users');
  });
};

exports.down = function (knex) {
  return knex.schema.table('game_instances', function (table) {
    table.dropForeign('fk_user_id');
    table.dropColumn('fk_user_id');
  });
};
