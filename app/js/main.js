$(function () {

	// close and open header__btn
	$('.header__btn').on('click', function() {
		$('.rightside-menu').removeClass('rightside-menu--close');
	});
	$('.rightside-menu__close').on('click', function() {
		$('.rightside-menu').addClass('rightside-menu--close');
	});

	//top slider  // slick-slider
	$('.top__slider').slick({
		arrows: false,
		dots: true,
		fade: true,
		autoplay: true
	});

})