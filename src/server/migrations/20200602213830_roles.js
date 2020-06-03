exports.up = function (knex) {
  return knex.schema.createTable('roles', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.datetime('created_at').notNullable();
    table.datetime('updated_at').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('roles');
};
