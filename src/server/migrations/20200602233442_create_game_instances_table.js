exports.up = function (knex) {
  return knex.schema.createTable('game_instances', (table) => {
    table.increments();
    table.integer('score');
    table.datetime('createdAt').defaultTo(knex.fn.now()).notNullable();
    table.datetime('updatedAt').defaultTo(knex.fn.now()).notNullable();
    table.datetime('deletedAt').defaultTo(knex.fn.now()).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('game_instances');
};
