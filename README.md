# xPressy
jQuery-like express

# how to use
The `index.js` file exports the `const $`, which can be used in order to write express applications in jQuery style.

Examples can be found at `examples/`

# current functionality
I just woke up and wrote something, this is by no means close to what you could do with express, yet.

Right now all you can do is the equivalent of `app.all, app.get, app.post and app.listen`, but you can use parameters and the kind, as shown in the `hello-world.js` example

# example

```
const $ = require( '../index.js' );

$( '/home/:name' ).get(function(){
  this.res.send( 'Hello ' + this.req.params.name + '!' );
});

$.listen( 80, function( err ){
  console.log( 'listening to 80! Try localhost/home/World' );
} );
```
