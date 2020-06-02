exports.up = function (knex) {
  return knex.schema.createTable('themes', (table) => {
    table.increments('id');
    table.string('title');
    table.timestamp('created_at').notNullable();
    table.timestamp('updated_at').notNullable();
    table.timestamp('deleted_at');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('themes');
};