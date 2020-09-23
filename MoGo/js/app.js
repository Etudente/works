$(function() {
	var header = $('#header'),
		introH = $('#intro').innerHeight(),
		scrollOffset = $(window).scrollTop();

	/*FIXED HEADER*/
	cheakScroll(scrollOffset);

	$(window).on('scroll', function() {
		scrollOffset = $(this).scrollTop();

		cheakScroll(scrollOffset);
	});

	function cheakScroll(scrollOffset) {
		if (scrollOffset >= introH) {
			header.addClass('fixed');
		} else {
			header.removeClass('fixed');
		}
	}

	/*SMOOTH SCROLL*/
	$('[data-scroll]').on('click', function(event) {
		event.preventDefault();
		var $this = $(this),
			blockId = $this.data('scroll'),
			blockOffset = $(blockId).offset().top;

		$('#nav a').removeClass('active');
		$this.addClass('active');

		$('html, body').animate(
			{
				scrollTop: blockOffset
			},
			500
		);
	});

	/*NAV TOOGLE*/
	$('#nav_toggle').on('click', function(event) {
		event.preventDefault();

		$(this).toggleClass('active');
		$('#nav').toggleClass('active');
	});

	/*COLLAPSE*/
	$('[data-collapse]').on('click', function(event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('collapse');

		$this.toggleClass('active');

		//$(blockId).slideToggle();
	});

	/*SLIDER*/
	$('[data-slider]').slick({
		infinite: true,
		fade: false,
		slidesToShow: 1,
		slidesToScroll: 1
	});
});
