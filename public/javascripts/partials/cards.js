$(document).ready(function(){

	var $row = $('.cards');
	$row.each(function(){
		$(this).children().matchHeight();
	});

});