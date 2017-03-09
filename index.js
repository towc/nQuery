const express = require( 'express' )
    , app = express();

const $ = function( str ){
  
  if( str[ 0 ] === '/' ){
    return new $.url( str );
  }
}

$.url = function( str ){
  this.url = str;
}
$.url.prototype.get = function( callback ){
  app.get( this.url, $.callback( this, callback ) );
}
$.callback = function( owner, fn ){
  return (function( req, res ){
    owner.req = req;
    owner.res = res;

    fn.bind( owner )();
  } ).bind( owner )
}
$.listen = function( port, callback ){
  app.listen( port, callback );
}

module.exports = $;
