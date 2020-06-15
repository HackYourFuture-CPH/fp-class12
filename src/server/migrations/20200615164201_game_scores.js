exports.up = function (knex) {
    return knex.schema.createTable('game_scores', (table) => {
        table.increments('id');
        table.integer('score');
        table.integer('fk_user_id');
        table.datetime('created_at').defaultTo(knex.fn.now()).notNullable();
        table.datetime('updated_at').defaultTo(knex.fn.now()).notNullable();
        table.datetime('deleted_at');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('game_scores');
};
