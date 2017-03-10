const express = require( 'express' )
    , app = express();

const $ = function( argument ){
  
  if( argument.constructor === String ){
    if( argument[ 0 ] === '/' ){
      return new $.url( argument );
    }
  }

  if( argument.constructor === Number ){
    if( argument % 1 === 0 ){
      return new $.integer( argument );
    }
  }
}

$.url = function( str ){
  this.url = str;
}

$.methods = [ 'all', 'get', 'post', 'put', 'delete' ];
$.methods.map( function( method ){
  $.url.prototype[ method ] = function( argument ){

    if( argument.constructor === Function )
      app[ method ]( this.url, $.callback( this, argument ) );

    if( argument.constructor === Array )
      argument.map( ( handler ) =>
        app[ method ]( this.url, $.callback( this, handler ) )
      );
  }
});
$.callback = function( owner, fn ){
  return (function( req, res, next ){
    owner.req = req;
    owner.res = res;
    owner.next = next;

    fn.bind( owner )();
  } ).bind( owner )
}
$.integer = function( num ){
  this.num = num;
}
$,integer.prototype.listen = function(  callback ){
  app.listen( port, callback );
}

module.exports = $;
