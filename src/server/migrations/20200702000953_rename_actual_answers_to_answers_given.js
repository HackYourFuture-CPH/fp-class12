exports.up = function (knex) {
  return knex.schema.renameTable('actual_answers', 'answers_given');
};

exports.down = function (knex) {
  return knex.schema.renameTable('answers_given', 'actual_answers');
};
