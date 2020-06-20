exports.up = function (knex) {
  return knex.schema.createTable('game_scores', (table) => {
    table.increments('id');
    table.integer('score');
    table.integer('fk_user_id').unsigned().notNullable();
    table.foreign('fk_user_id').references('id').inTable('users');
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('deleted_at');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('game_scores');
};
