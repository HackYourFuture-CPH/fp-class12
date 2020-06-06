exports.up = function (knex) {
  return knex.schema.createTable('questions', (table) => {
    table.increments('id');
    table.integer('fk_game_id');
    table.string('questions').notNullable();
    table.float('latitude').notNullable();
    table.float('longitude').notNullable();
    table.integer('points');
    table.timestamp('created_at').notNullable();
    table.timestamp('updated_at').notNullable();
    table.timestamp('deleted_at');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('questions');
};
