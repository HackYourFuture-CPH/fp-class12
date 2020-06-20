exports.up = function (knex) {
  return knex.schema.createTable('game_factory', (table) => {
    table.increments('id');
    table.integer('fk_map_id').unsigned().notNullable();
    table.foreign('fk_map_id').references('id').inTable('maps');
    table.integer('fk_theme_id').unsigned().notNullable();
    table.foreign('fk_theme_id').references('id').inTable('themes');
    table.integer('fk_game_user_id').unsigned().notNullable();
    table.foreign('fk_game_user_id').references('id').inTable('users');
    table.integer('max_players');
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('deleted_at');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('game_factory');
};
