$(document).ready(function(){

	var $row = $('.zone');
	$row.each(function(){
		$(this).children().matchHeight();
	});

});