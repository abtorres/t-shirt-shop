exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(tbl) {
    tbl.increments()

    tbl
      .string('user_name')
      .notNullable()

    tbl
      .string('email')
      .notNullable()

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};