
/*
	Define the CLASS Vegetal
*/


var Vegetal = function(x, y)
{
	Living.call(this, x, y);

	this.movable = false;

	this.update = function()
	{
		// moving, getting older, digesting
		this.parent_update.call(this);

		if( ! this.alive) return;

		// reproducing
		if( Math.random()>.99 )
		{
			this.reproduce(1);
		}
	}


	this.toHtml = function()
	{
		return this.alive
			? '<img src="img/grass.svg" alt="A vegetal" class="'+this.uuid+'"/>'
			: '<img src="img/grass-dead.svg" alt="A vegetal" class="'+this.uuid+'"/>';
	}
}