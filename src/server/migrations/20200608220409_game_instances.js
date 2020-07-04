exports.up = function (knex) {
  return knex.schema.createTable('game_instances', (table) => {
    table.increments('id');
    table.integer('score');
    table.integer('fk_game_factory_id').unsigned().notNullable();
    table
      .foreign('fk_game_factory_id')
      .references('id')
      .inTable('game_factory');
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('deleted_at');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('game_instances');
};
