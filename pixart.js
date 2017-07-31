var $brush = $('.brush');
var	$btn = $('#set-color');
var $input = $('#color-field');
var $body = $('body');

for (var i = 0; i < 20; i++) {
	$body.append("<div class='square'></div>");
}

var changeColor = function() {
	event.preventDefault();
	var newColor = $input.val();
	$brush.css("background-color", newColor);
}

var turnGreen = function() {
	console.log('green');
}

$body.click(function(event){
	if (event.target.className === 'square') {
		$(event.target).css("background-color", "green");
	}
});

$btn.click(function(){changeColor();});
$input.keypress(function(event){
	if (event.which === 13) {
		changeColor();
	}
});

