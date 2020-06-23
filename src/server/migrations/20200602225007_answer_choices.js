exports.up = function (knex) {
  return knex.schema.createTable('answer_choices', (table) => {
    table.increments('id');
    table.string('answer_text');
    table.integer('fk_question_id').unsigned().notNullable();
    table.foreign('fk_question_id').references('id').inTable('questions');
    table.boolean('answer_correct');
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('deleted_at');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('answer_choices');
};
