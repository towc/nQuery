const $ = require( '../index.js' );

$( '/home/:name' ).get(function(){
  this.res.send( 'Hello ' + this.req.params.name + '!' );
});

$.listen( 80, function( err ){
  console.log( 'listening to 80! Try localhost/home/World' );
} );
