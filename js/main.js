$('.slider-parents').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  variableWidth: true,
  adaptiveHeight: true,
  prevArrow: "<img src='./img/left-arrow.svg' class='slick-prev' alt='1'>",
  nextArrow: "<img src='./img/right-arrow.svg' class='slick-next' alt='2'>",
  responsive: [
  	{
  		breakpoint: 1300,
  		settings: {
  			
  			variableWidth: false,

  		}
  	}
  ],
  mobileFirst: false
});

