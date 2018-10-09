
/*
	Define the CLASS Carnivorous
*/


var Carnivorous = function(x, y)
{
	Living.call(this, x, y);
	this.maxAge = Math.round(Math.random()*50) + 50;

	this.update = function()
	{
		// moving, getting older, digesting
		this.parent_update.call(this);

		// reproducing
		var neighborhood = w.getObjectsAt(this.x, this.y, 'Vegetarian', this.uuid);

		if( neighborhood.length )
		{
			if( this.age>50 && neighborhood[0].age>50 )
			{
				this.reproduce(2);
			}
		}

		// eating vegetarians
		var neighborhood = w.getObjectsAt(this.x, this.y, 'Vegetarian', this.uuid);

		for( var i=0 ; i<neighborhood.length ; i++ )
		{
			this.stomach += neighborhood[i].stomach / 2;
			neighborhood[i].die('Heaten y a dino !');
		}
	}


	this.toHtml = function()
	{
		if( ! this.isAlive() )
		{
			return '<img src="img/dino-dead.svg" alt="A Carnivorous" class="'+this.uuid+'"/>';
		}

		return this.age > 50
			? '<img src="img/dino.svg" alt="An old Carnivorous" class="'+this.uuid+'"/>'
			: '<img src="img/dino-young.svg" alt="A young Carnivorous" class="'+this.uuid+'"/>';
	}
}

