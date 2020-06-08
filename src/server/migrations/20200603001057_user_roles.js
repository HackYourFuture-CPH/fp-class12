exports.up = function (knex) {
  return knex.schema.createTable('user_roles', (table) => {
    table.increments('id');
    table.integer('fk_role_id').notNullable();
    table.foreign('fk_role_id').references('id').inTable('roles');
    table.integer('fk_user_id').notNullable();
    table.foreign('fk_user_id').references('id').inTable('users');
    table.timestamp('createdAt').notNullable();
    table.timestamp('updatedAt').notNullable();
    table.timestamp('deletedAt');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('user_roles');
};
