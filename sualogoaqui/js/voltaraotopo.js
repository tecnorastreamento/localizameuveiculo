$(document).ready(function(){ 
	$(function() {
	  $('a#toTop').bind('click',function(event){
		  var $anchor = $(this);
		
		  $('html, body').stop().animate({
			  scrollTop: $($anchor.attr('href')).offset().top}, 800,'easeInOutExpo');
		  /*
		  if you don't want to use the easing effects:
		  $('html, body').stop().animate({
			  scrollTop: $($anchor.attr('href')).offset().top
		  }, 1000);
		  */
		  event.preventDefault();
	  });
	});
});

jQuery(window).scroll(function() {
	var position = jQuery(window).scrollTop();
	if ( position > 60 )  {
		jQuery( '#toTop' ).fadeIn( 350 );
	} else { 
		jQuery( '#toTop' ).fadeOut( 350 );
	}
});