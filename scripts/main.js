$(function () {
	// menu
	$('.icon-menu2').click(function () {
		$('.wrapper').addClass('open');
		$('.cover').removeClass('none');
		$('.menu').addClass('open');
	});
	$('.cover').click(function () {
		$('.wrapper').removeClass('open');
		$('.cover').addClass('none');
		$('.menu').removeClass('open');
	});
	// end menu
	// slider
	var mySwipe = new Swipe(document.getElementById('slider'), {
		speed: 400,
		auto: 3000,
		continuous: true,
		disableScroll: false,
		stopPropagation: false
	});
	// end slider
});