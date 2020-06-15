// TODO: This is a sample migration for demonstration. Remove before adding real ones.

exports.up = function (knex) {
  return knex.schema.createTable('game_instances', (table) => {
    table.increments('id');
    table.increments('fk_game_scores_id');
    table.increments('fk_user_id');
    table.increments('fk_game_id');
    table.datetime('created_at').defaultTo(knex.fn.now()).notNullable();
    table.datetime('updated_at').defaultTo(knex.fn.now()).notNullable();
    table.datetime('deleted_at');

  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('game_instances');
};
