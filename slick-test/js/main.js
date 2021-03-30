$(function(){
	$(window).on('load resize', function() {
		if ($(window).width() < 1600) {
			$('.why-us__blocks:not(.slick-initialized)').slick({
				centerMode: false,
				dots: false,
				arrows: false,
				infinite: true,
				speed: 100,
				slidesToShow: 1
			});
		} else {
		$(".why-us__blocks.slick-initialized").slick("unslick");
	  }
	});
});
