exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('migration2', function (table) {
      table.increments('id').primary();
      table.string('description').notNullable();
      table.date('date_achieved');
    })
  ]);
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('migration2');
};