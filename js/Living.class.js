
/*
	Define the CLASS Living
*/

function Living(x,y)
{
	//-- properties

	this.age = 0;
	this.maxAge = Math.round(Math.random()*100) + 100;
	this.stomach = Math.round(Math.random()*50) + 50;
	this.movable = true;
	this.alive = true;
	this.x = x;
	this.y = y;
	this.uuid = UID();

	//-- methods

	this.update = function()
	{
		// betting older

		this.age++; // always increments, as it allow us to let a dead body lie before removing it...

		if( this.alive )
		{
			if( this.age >= this.maxAge )
			{
				this.die(this.constructor.name + ' ('+this.uuid+') is dead from his old age !');
			}
		}
		else
		{
			return;
		}

		// moving

		if( this.movable )
		{
			this.move();
		}
		// digesting

		if( this.stomach>0 )
		{
			this.stomach--;

			if( this.stomach <= 0 )
			{
				this.die(this.constructor.name + ' ('+this.uuid+') is dead of hunger !');
			}
			if( this.stomach > 2000 )
			{
				this.die(this.constructor.name + ' ('+this.uuid+') is dead of indigestion !');
			}
		}
	}


	/*
		Simulating heritage by placing a copy of update() in parent_update()
	*/
	this.parent_update = this.update;




	this.setPos = function(x, y)
	{
		this.x = x;
		this.y = y;
	}


	this.die = function( msg )
	{
		this.alive = false;
		this.movable = false;
		console.log(msg);
	}

	/*
		return an array of JSON describing the positions around this
		 - exclude_here : if false, the array contains the current object position
	*/
	this.getPositionsAround = function(exclude_here)
	{
		var pos = [];

		if(this.x>1)		pos.push({x:this.x-1, y:this.y}); 
		if(this.x<width-1)	pos.push({x:this.x+1, y:this.y}); 
		if(this.y>1)		pos.push({y:this.y-1, x:this.x}); 
		if(this.x<height-1)	pos.push({y:this.y+1, x:this.x}); 
		pos.push({y:this.y, x:this.x})

		return pos;
	}

	this.move = function()
	{
		var newPos = this.getPositionsAround(false).rand();
		this.x = newPos.x;
		this.y = newPos.y;
	}

	this.reproduce = function(quantity)
	{
		// Security limit, to prevent memory surcharge...
		if( w.objects.length > 200 ) return;

		var pos = this.getPositionsAround(true).shuffle();
		var j=0;

		for( var i=0 ; i<quantity ; i++)
		{
			var child = new window[this.constructor.name]( pos[j].x, pos[j].y );
			w.objects.push(child);
			console.log(' New ' + this.constructor.name + ' !');
			j = j>=i?0:i;
		}
	}

	this.isAlive = function()
	{
		return this.alive;
	}

	this.toHtml = function()
	{
		return '<img src="" alt="A living being" class="'+this.uuid+'"/>';
	}

	this.toHtmlList = function()
	{
		return '<div class="'+(this.isAlive()?'alive':'dead')+'" id="'+this.uuid+'">'
			+ '		<h1>' + this.constructor.name + '</h1> ' 
			+ '		<p><b>ID</b>' + this.uuid + '</p>' 
			+ '		<p><b>coords</b>(' + this.x + ',' + this.y + ')</p>' 
			+ '		<p><b>age</b>' + this.age + '</p>' 
			+ '		<p><b>maxAge</b>' + this.maxAge + '</p>' 
			+ '		<p><b>stomach</b>' + this.stomach + '</p>' 
			+ '		<p><b>alive ?</b>' + (this.isAlive()?'yes !':'nooo..') + '</p>' 
			+ '</div>';
	}

	this.debug = function()
	{
		console.log(this);
	}
}


