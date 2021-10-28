
$(function(){
    
	$('.slider-cert').slick({
		slidesToShow: 4,
		arrows: false,
		dots: true,
		responsive: [
		{
		  breakpoint: 960,
		  settings: {
			slidesToShow: 3,
			
		  }
		},
		{
		  breakpoint: 700,
		  settings: {
			slidesToShow: 2,
			
		  }
		},
		{
		  breakpoint: 500,
		  settings: {
			slidesToShow: 1,
			
		  }
		},
		]
	})  
});    