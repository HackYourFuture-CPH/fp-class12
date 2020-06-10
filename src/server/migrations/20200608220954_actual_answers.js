// TODO: This is a sample migration for demonstration. Remove before adding real ones.

exports.up = function (knex) {
  return knex.schema.createTable('actual_answers', (table) => {
    table.increments('id');
    table.integer('fk_game_user_id').unsigned();
    table.foreign('fk_game_user_id').references('id').inTable('game_instances');
    table.integer('fk_question_id').unsigned();
    table.foreign('fk_question_id').references('id').inTable('questions');
    table.integer('fk_answer_id').unsigned();
    table.foreign('fk_answer_id').references('id').inTable('answer_choices');
    table.datetime('created_at').defaultTo(knex.fn.now()).notNullable();
    table.datetime('updated_at').defaultTo(knex.fn.now()).notNullable();
    table.datetime('deleted_at');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('actual_answers');
};
