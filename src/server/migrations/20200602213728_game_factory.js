exports.up = function (knex) {
  return knex.schema.createTable('game_factory', (table) => {
    table.increments('id');
    table.integer('fk_map_id').unsigned();
    table.foreign('fk_map_id').references('id').inTable('maps');
    table.integer('fk_theme_id').unsigned();
    table.foreign('fk_theme_id').references('id').inTable('themes');
    table.integer('max_players');
    table.timestamp('created_at').notNullable();
    table.timestamp('updated_at').notNullable();
    table.timestamp('deleted_at');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('game_factory');
};
