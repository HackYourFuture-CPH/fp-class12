exports.up = function (knex) {
  return knex.schema.createTable('game_instances', (table) => {
    table.increments('id');
    table.integer('fk_game_scores_id');
    table.foreign('fk_game_scores_id').references('id').inTable('game_scores');
    table.integer('fk_user_id');
    table.foreign('fk_user_id').references('id').inTable('users');
    table.integer('fk_game_id');
    table.foreign('fk_game_id').references('id').inTable('game_factory');
    table.datetime('created_at').defaultTo(knex.fn.now()).notNullable();
    table.datetime('updated_at').defaultTo(knex.fn.now()).notNullable();
    table.datetime('deleted_at');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('game_instances');
};
