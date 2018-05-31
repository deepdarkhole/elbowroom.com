$(document).ready(function(){
	
	$("#price").autoNumeric('init');
	
	$("*[data-tip]").click( function(){
		var price = $("#price").val();
		price = Number( price.replace(/[^0-9\.]+/g,""));
		
		$("#price")
			.val( price + $(this).data("tip") )
			.autoNumeric('update');
			
		return false;
	});
	
	$("a[href^='#']").on('click', function(e) {
	
	   // prevent default anchor click behavior
	   e.preventDefault();
	
	   var hash = this.hash;
	   
	   // animate
	   $('html, body').animate({
	       scrollTop: $(hash).offset().top
	     }, 300, function(){
	
	       // when done, add hash to url
	       // (default click behaviour)
	       window.location.hash = hash;
	     });
	     
	
	
	
	});



})