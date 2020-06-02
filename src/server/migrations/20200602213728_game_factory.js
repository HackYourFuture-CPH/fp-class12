exports.up = function (knex) {
  return knex.schema.createTable('game_factory', (table) => {
    table.increments('id');
    table.integer('fk_map_id');
    table.integer('fk_theme_id').notNullable();
    table.integer('fk_game_user_id').notNullable();
    table.integer('max_players');
    table.timestamp('created_at').notNullable();
    table.timestamp('updated_at').notNullable();
    table.timestamp('deleted_at');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('game_factory');
};
