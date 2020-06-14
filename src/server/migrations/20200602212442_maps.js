exports.up = function (knex) {
  return knex.schema.createTable('maps', (table) => {
    table.increments('id');
    table.float('lat_top_left');
    table.float('long_top_left');
    table.float('lat_top_right');
    table.float('long_top_right');
    table.float('lat_bottom_left');
    table.float('long_bottom_left');
    table.float('lat_bottom_right');
    table.float('long_bottom_right');
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('deleted_at');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('maps');
};
