$(function () {

	// close and open header__btn
	$('.header__btn').on('click', function() {
		$('.rightside-menu').removeClass('rightside-menu--close');
	});
	$('.rightside-menu__close').on('click', function() {
		$('.rightside-menu').addClass('rightside-menu--close');
	});

})