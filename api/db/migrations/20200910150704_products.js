exports.up = function(knex) {
    return Promise.all([
      knex.schema
        .createTable('products', function(table){
          table.increments('id').primary();
          table.string('name');          
          table.integer('price');
          table.integer('qty');          
          table.text('order_id');  
          table.text('total_price');
          table.text('credit_limit');
        })
    ]);
  };
  
  exports.down = function(knex) {
    return Promise.all([
      knex.schema
        .dropTable('products')
    ]);
  };