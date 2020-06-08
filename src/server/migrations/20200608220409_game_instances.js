// TODO: This is a sample migration for demonstration. Remove before adding real ones.

exports.up = function (knex) {
  return knex.schema.createTable('game_instances', (table) => {
    table.increments('id');
    table.integer('score');
    table.integer('fk_user_id').unsigned();
    table.foreign('fk_user_id').references('id').inTable('users');
    table.integer('fk_game_id').unsigned();
    table.foreign('fk_game_id').references('id').inTable('game_factory');
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('deleted_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('game_instances');
};
