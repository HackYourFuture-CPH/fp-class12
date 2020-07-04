exports.up = function (knex) {
  return knex.schema.table('users', function (table) {
    table.renameColumn('name', 'user_name');
  });
};

exports.down = function (knex) {
  return knex.schema.table('users', function (table) {
    table.renameColumn('user_name', 'name');
  });
};
