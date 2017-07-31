var $brush = $('.brush');
var	$btn = $('#set-color');
var $input = $('#color-field');

$btn.click(function() {
	event.preventDefault();
	var newColor = $input.val();
	$brush.css("background-color", newColor);
});