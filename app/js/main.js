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

	//contact slider  // slick-slider
	$('.contact-slider').slick({
		slidesToShow: 10,
		slidesToScroll: 10,
		arrows: false,
		dots: true,
	});

	//blog slider  // slick-slider
	$('.article-slider__box').slick({
		prevArrow: '<button type="button" class="article-slider__arrow article-slider-arrowleft"><img src="images/arrow-back.svg" alt="arrow back"></button>',
		nextArrow: '<button type="button" class="article-slider__arrow article-slider-arrowright"><img src="images/arrow-next.svg" alt="arrow next"></button>',
		slideToShow: 1,
		slidesToScroll: 1,
	});

	//gallery // MixItUp
	var mixer = mixitup('.gallery__inner', {
		load: {
			filter: '.living',
		}
	});	
})