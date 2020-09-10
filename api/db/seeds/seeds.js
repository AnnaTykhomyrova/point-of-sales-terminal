exports.seed = function(knex) {
    // Deletes ALL existing entries
  return knex('products').del()
  
  .then(function () {
    return Promise.all([
      //set the auto increment id to 1
      knex.raw('ALTER SEQUENCE products_id_seq RESTART WITH 1'),
      // Inserts seed entries
  
  ///////////////////////////////////////////////////  -Products table-  //////////////////////////////////////////////////////
      knex('products').insert({
        id: 1, 
        name: 'white bread', 
        price: '3', 
        qty: 25, 
      })
    ]);
  });
};