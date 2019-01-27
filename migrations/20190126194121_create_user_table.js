
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function(table) {
      table.increments('id').primary()
      table.string('username').notNullable()
      table.string('password').notNullable()
      table.string('email').notNullable()
      table.timestamps(false, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user')
};
