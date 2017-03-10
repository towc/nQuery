const $ = require( '../index.js' );

$( '/home/:name' ).get(function(){
  this.res.send( 'Hello ' + this.req.params.name + '!' );
});

$( 80 ).listen(function(){
  console.log( 'listening to 80! Try localhost/home/World' );
} );
