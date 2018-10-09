

Array.prototype.shuffle = function()
{
  var i = this.length, j, temp;
  if ( i == 0 ) return this;
  while ( --i ) {
     j = Math.floor( Math.random() * ( i + 1 ) );
     temp = this[i];
     this[i] = this[j];
     this[j] = temp;
  }
  return this;
}

Array.prototype.rand = function()
{
	return this[Math.floor(Math.random() * this.length)];
}


// https://gist.github.com/gordonbrander/2230317

var UID = function()
{
  return '_' + Math.random().toString(36).substr(2, 9);
};



//-- new Console.log

var console2 = console.log;

console.log = function( msg )
{
	w.messages.push( msg );

	w.messages.splice(0, w.messages.length-30);
	console2( msg );
}

