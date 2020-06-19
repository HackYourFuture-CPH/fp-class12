exports.up = function (knex) {
    return knex.schema.table('game_scores', (table) => {
      table.integer('game_timer');
      
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('game_scores');
  };