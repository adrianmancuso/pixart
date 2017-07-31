var $brush = $('.brush');
var	$btn = $('#set-color');
var $input = $('#color-field');
var $body = $('body');
var color = 'green';

var $movieInput = $('#movie-field');
var $movieBtn = $('#set-movie');
var $poster = $('.poster');


var tool = 'paint';
var wallPaper = '';


for (var i = 0; i < 3000; i++) {
	$body.append("<div class='square'></div>");
}

$movieBtn.click(function(event){
	event.preventDefault();

	var settings = {
		url: "http://omdbapi.com/",
		data: { 
			s: $movieInput.val(), 
			apikey: '2f6435d9'
		}
	}
	$.ajax(settings).done(function(response){
		wallPaper = response.Search[0].Poster;
	});
});

var changeColor = function() {
	event.preventDefault();
	color = $input.val();
	$brush.css("background-color", color);
}

$body.mouseover(function(event){
	if (event.target.className === 'square') {
		if (tool === 'paint') {	
			$(event.target).css("background-color", color);
		} else {
			$(event.target).css("background-image", 'url(' + wallPaper + ')');
		}
	}
});


$btn.click(function(){changeColor();});

$input.keypress(function(event){
	if (event.which === 13) {
		changeColor();
	}
});

$('#paint-select').click(function(){
	tool = 'paint';
});

$('#stamp-select').click(function(){
	tool = 'stamp';
});