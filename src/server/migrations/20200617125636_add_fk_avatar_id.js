exports.up = function (knex) {
  return knex.schema.table('users', function (table) {
    table.integer('fk_avatar_id').unsigned().notNullable();
    table.foreign('fk_avatar_id').references('id').inTable('avatars');
  });
};

exports.down = function (knex) {
  return knex.schema.table('users', function (table) {
    table.dropForeign('fk_avatar_id');
    table.dropColumn('fk_avatar_id');
  });
};
