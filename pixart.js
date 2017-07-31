var $brush = $('.brush');
var	$btn = $('#set-color');
var $input = $('#color-field');
var $body = $('body');
var color = 'green';

for (var i = 0; i < 3000; i++) {
	$body.append("<div class='square'></div>");
}

var changeColor = function() {
	event.preventDefault();
	color = $input.val();
	$brush.css("background-color", color);
}

$body.mouseover(function(event){
	if (event.target.className === 'square') {
		$(event.target).css("background-color", color);
	}
});

$btn.click(function(){changeColor();});
$input.keypress(function(event){
	if (event.which === 13) {
		changeColor();
	}
});

