$(document).ready(function() {	
	$(".first").click(function(){
		$(this).next().slideToggle("slow");
	});
	$(".caro").click(function(){
		$(this).nextAll().filter(".hiddenCaro").slideToggle("slow");
	});
	
});
