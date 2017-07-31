var $brush = $('.brush');
var	$btn = $('#set-color');
var $input = $('#color-field');

var changeColor = function() {
	event.preventDefault();
	var newColor = $input.val();
	$brush.css("background-color", newColor);
};

$btn.click(function(){changeColor();});
$input.keypress(function(event){
	if (event.which === 13) {
		changeColor();
	}
});

