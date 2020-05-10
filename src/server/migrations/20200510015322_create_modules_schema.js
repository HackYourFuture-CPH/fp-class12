// TODO: This is a sample migration for demonstration. Remove before adding real ones.

exports.up = function(knex) {
  return knex.schema.createTable('modules', (table) => {
    table.increments();
    table.string('title').notNullable();
    table.datetime('startdate').notNullable();
    table.datetime('enddate').notNullable();
    table.string('classid').notNullable();
    table
      .datetime('created_at')
      .defaultTo(knex.fn.now())
      .notNullable();
    table
      .datetime('updated_at')
      .defaultTo(knex.fn.now())
      .notNullable();
    table.datetime('deleted_at');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('modules');
};
