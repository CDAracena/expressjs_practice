
exports.up = function(knex, Promise) {
  return knex.schema.table('user', function(t) {
     t.string('email').notNullable()
  } )
};

exports.down = function(knex, Promise) {
  return knex.schema.table('user',function(t){
     t.dropColumn('email') 
  } )
};
