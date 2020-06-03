exports.up = function (knex) {
  return knex.schema.createTable('user_roles', (table) => {
    table.increments();
    table.integer('fk_role_id').notNullable();
    table.integer('fk_user_id').notNullable();
    table.datetime('createdAt').notNullable();
    table.datetime('updatedAt').notNullable();
    table.datetime('deletedAt');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('user_roles');
};
