

var World = function( x, y, nb_vegetals, nb_vegetarians, nb_carnivorous )
{
	//-- properties / constructor

	this.x = x;
	this.y = y;
	this.objects = [];
	this.messages = [];


	function rnd(max)
	{
		return Math.ceil(Math.random()*max-1);
	}

	for( var i=0 ; i<nb_vegetals ; i++)
	{
		this.objects.push( new Vegetal(rnd(this.x), rnd(this.y)) );
	}

	for( var i=0 ; i<nb_vegetarians ; i++)
	{
		this.objects.push( new Vegetarian(rnd(this.x), rnd(this.y)) );
	}

	for( var i=0 ; i<nb_carnivorous ; i++)
	{
		this.objects.push( new Carnivorous(rnd(this.x), rnd(this.y)) );
	}


	//-- methods

	this.toHtml = function()
	{
		//-- generating an empty grid (a 2D array of size x*y, filled with null values)

		var grid = [];

		for( var i=0 ; i<this.y ; i++ )
		{
			grid.push([]);
		}

		//-- inserting the objects in the grid

		for( var i=0 ; i<this.objects.length ; i++ )
		{
			var o = this.objects[i];
			grid[o.x][o.y] = o;
		}

		//-- generating HTML

		$('table').empty();

		for( var i=0 ; i<this.x ; i++ )
		{
			var row = $('<tr/>').appendTo('table');

			for( var j=0 ; j<this.y ; j++ )
			{
				if( grid[i][j] != null)
					var cel = $('<td>' + grid[i][j].toHtml() + '</td>').appendTo(row);
				else
					var cel = $('<td></td>').appendTo(row);
			}
		}
	}

	this.toHtmlList = function()
	{
		var html = '';

		for( var i=0 ; i<this.objects.length ; i++ )
		{
			html += this.objects[i].toHtmlList();
		}
		$('#list').empty().html(html);
	}

	this.toHtmlLog = function()
	{
		var html = '';

		for( var i=0 ; i<this.messages.length ; i++ )
		{
			html += '<p>' + this.messages[i] + '</p>';
		}
		$('#log').empty().html(html);
	}


	/*
		Returns the list of objects which exists at the given coordinates. 
		 - type : The type of objects to return (ex : Vegetal, Vegetarian or Carnivorous)
		 	not used if null
		 - exclude_uuid : a uuid which will be excluded from the result list
		 	not used if null
	*/
	this.getObjectsAt = function(x, y, type, exclude_uuid)
	{
		var list = [];

		for( var i=0 ; i<this.objects.length ; i++ )
		{
			if( this.objects[i].uuid==exclude_uuid )
			{
				continue;
			}

			if( this.objects[i].constructor.name!=type
				&& type!=null )
			{
				continue;
			}

			if( this.objects[i].x==x 
				&& this.objects[i].y==y )
			{
				list.push(this.objects[i]);
			}
		}
		return list;
	}


	this.update = function()
	{
		//-- update the objects

		for( var i=0 ; i<this.objects.length ; i++)
		{
			this.objects[i].update();
		}

		//-- refresh the HTML page

		this.toHtml();
		this.toHtmlLog();
		this.toHtmlList();

		this.garbageCollector();
	}


	this.garbageCollector = function()
	{
		for( var i=0 ; i<this.objects.length ; i++)
		{
			if( this.objects[i].age - this.objects[i].maxAge > 10 )
			{
				this.objects.splice(i, 1);
			}
		}
	}

}