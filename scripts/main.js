$(function () {
	// menu
	$('.icon-menu2').tap(function () {
		$('.cover').removeClass('none');
		$('.wrapper').addClass('open');
		$('.menu').addClass('open');
	});
	$('.cover').tap(function () {
		$('.wrapper').removeClass('open');
		$('.menu').removeClass('open');
		$('.cover').addClass('none');
	});
	// end menu
	// slider
	var mySwipe = new Swipe(document.getElementById('slider'), {
		speed: 400,
		auto: 3000,
		continuous: true,
		disableScroll: false,
		stopPropagation: false,
		callback: function(index) {
			$('.bullet').each(function(){
				var dataIndex = $(this).data('index');
				if(parseInt(dataIndex) === index){
					$(this).addClass('active').siblings().removeClass('active');
				}
			});
		}
	});
	var num = $('.swipe-wrapper').children().length;
	for(var i = 0 ;i < num;i ++){
		$('<span class="bullet" data-index="'+ i +'"></span>').appendTo('.nav-bullets');
	}
	$('.bullet').first().addClass('active');
	// end slider
});