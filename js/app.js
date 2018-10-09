


// Building the world

var width = 25;
var height = 17;
var w = new World( height, width, 30, 10, 3);
w.update();

setInterval(function(){ w.update(); }, 500);




// "Convenient" data visualization on mouse over

$('table').delegate('img', 'mouseover', function()
{
	uuid = this.className;
	$('#'+uuid).css('display','inline-block');
});

