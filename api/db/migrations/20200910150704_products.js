exports.up = function(knex) {
    return Promise.all([
      knex.schema
        .createTable('products', function(table){
          table.increments('id').primary();
          table.string('name');          
          table.integer('price');
          table.integer('qty');          
        })
    ]);
  };
  
  exports.down = function(knex) {
    return Promise.all([
      knex.schema
        .dropTable('products')
    ]);
  };