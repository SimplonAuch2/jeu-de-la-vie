
/*
	Define the CLASS Vegetarian
*/


var Vegetarian = function(x, y)
{
	Living.call(this, x, y);


	this.update = function()
	{
		// moving, getting older, digesting
		this.parent_update.call(this);

		// reproducing
		var neighborhood = w.getObjectsAt(this.x, this.y, 'Vegetarian', this.uuid);

		if( neighborhood.length
			&& this.age>15
			&& Math.random()>.9 )	// 1 chance on 10
		{
			this.reproduce(1);
		}

		// eating vegetables
		var neighborhood = w.getObjectsAt(this.x, this.y, 'Vegetal', this.uuid);

		for( var i=0 ; i<neighborhood.length ; i++ )
		{
			neighborhood[i].stomach -= 10;
			this.stomach += 10;
			//console.log('Eat vegetables !');
		}
	}

	this.toHtml = function()
	{
		return this.isAlive()
			? '<img src="img/pig.svg" alt="A vegetarian" class="'+this.uuid+'"/>'
			: '<img src="img/pig-dead.svg" alt="A vegetarian" class="'+this.uuid+'"/>';
	}
}

