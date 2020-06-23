// TODO: This is a sample migration for demonstration. Remove before adding real ones.

exports.up = function (knex) {
  return knex.schema.createTable('game_instances', (table) => {
    table.increments('id');
    table.integer('score');
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('deleted_at');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('game_instances');
};
