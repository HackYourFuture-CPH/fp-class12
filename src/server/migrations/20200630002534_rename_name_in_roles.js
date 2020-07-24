exports.up = function (knex) {
  return knex.schema.table('roles', function (table) {
    table.renameColumn('name', 'rol_name');
  });
};

exports.down = function (knex) {
  return knex.schema.table('roles', function (table) {
    table.renameColumn('rol_name', 'name');
  });
};
