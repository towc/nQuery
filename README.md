# xPressy
jQuery-like express

In jQuery, you don't pass parameters to callbacks, and neither does xPressy. Despite this not being meant to be used seriously, a string-query based syntax can allow for a lot of potential in customization and similar.

I will occasionally add functionalities, as I can't see this actually being used in production environments and despite appearences, I don't enjoy wasting too much time. But feel free to open issues and contribute yourself :)

# how to use
The `index.js` file exports the `const $`, which can be used in order to write express applications in jQuery style.

Examples can be found at `examples/`

# current functionality
Right now all you can do is the equivalent of `app.all`, `app.get`, `app.post` and `app.listen`, but you can use parameters and the kind, as shown in the `hello-world.js` example

# example

```js
const $ = require( '../index.js' );

$( '/home/:name' ).get(function(){
  this.res.send( 'Hello ' + this.req.params.name + '!' );
});

$( 80 ).listen(function(){
  console.log( 'listening to 80! Try localhost/home/World' );
} );
```
