exports.up = function (knex) {
  return knex.schema.createTable('user_roles', (table) => {
    table.increments('id');
    table.integer('fk_role_id').unsigned();
    table.foreign('fk_role_id').references('id').inTable('roles');
    table.integer('fk_user_id').unsigned();
    table.foreign('fk_user_id').references('id').inTable('users');
    table.datetime('created_at').defaultTo(knex.fn.now()).notNullable();
    table.datetime('updated_at').defaultTo(knex.fn.now()).notNullable();
    table.datetime('deleted_at');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('user_roles');
};
