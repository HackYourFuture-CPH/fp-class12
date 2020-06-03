// TODO: This is a sample migration for demonstration. Remove before adding real ones.

exports.up = function (knex) {
  return knex.schema.createTable('actual_answers', (table) => {
    table.increments();
    table.integer('game_user_id').unsigned();
    table.foreign('game_user_id').references('id').inTable('game_instances');
    table.datetime('created_at').defaultTo(knex.fn.now()).notNullable();
    table.datetime('updated_at').defaultTo(knex.fn.now()).notNullable();
    table.datetime('deleted_at');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('actual_answers');
};
