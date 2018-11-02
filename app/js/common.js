$(function(){
		$('.top-line ul.sf-menu').superfish({
			cssArrows: false,
			hoverClass: 'no-class',
			pathClass:	'current',
			delay: 200
		});
	var owl = $('.slider');
	owl.owlCarousel({
		loop: true,
		items: 1,
		itemClass: "slide-wrap",
		navText: false
	});

	$('.next').on('click', function () {
      owl.trigger('next.owl.carousel', [500]);
  	});

 	$('.prev').on('click', function () {
      owl.trigger('prev.owl.carousel', [500]);
 	 });

	$('#my-menu').mmenu({
		extensions: [ 'effect-menu-slide', 'pagedim-black' ],
		offCanvas: {
			position: "right"
		 }
	});

	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function(){
		$('.hamburger').addClass('is-active');
	});
	api.bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	});

});