exports.up = function (knex) {
  return knex.schema.createTable('avatars', (table) => {
    table.increments('id');
    table.string('image_url');
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('deleted_at');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('avatars');
};
