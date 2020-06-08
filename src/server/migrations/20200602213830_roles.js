exports.up = function (knex) {
  return knex.schema.createTable('roles', (table) => {
    table.increments('id');
    table.string('name').notNullable();
    table.datetime('created_at').defaultTo(knex.fn.now()).notNullable();
    table.datetime('updated_at').defaultTo(knex.fn.now()).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('roles');
};
