exports.up = function (knex) {
  return knex.schema.createTable('questions', (table) => {
    table.increments('id');
    table.integer('fk_game_id').unsigned().notNullable();
    table.foreign('fk_game_id').references('id').inTable('game_factory');
    table.string('question').notNullable();
    table.float('latitude').notNullable();
    table.float('longitude').notNullable();
    table.integer('points');
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('deleted_at');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('questions');
};
