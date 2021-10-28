$(document).ready(function(){
	$("input[name=phone]").inputmask("+38 (999) 999-9999",{
		"onincomplete": function(){ $(this).addClass('false'); },
		"onKeyValidation": function(){ $(this).addClass('false'); },
		"oncomplete": function(){ $(this).removeClass('false');}
	});
	$(document).on('click', '.navbar-toggle', function(){
		$('.b-menu__main.navbar-collapse').toggleClass('in');
	})	
	//срабатывание ссылки в главном меню если есть подменю
    $('.navbar .dropdown-toggle').on('click.location',function(){
        var $parent = $(this).parent();
        if($parent.hasClass('open')){
            window.location = $(this).attr('href');
            return false;
        }
    })

    //Выбор городов
    $('#changeCity').on('change', function() {
        var url = $(this).val(); // get selected value
        if( url ) { // require a URL
            window.location = url; // redirect
        }
        return false;
    });
	

	/* Rewiew Slider */

    // var reviewSlider = $reviewSlider = $('.owl-slider-rewiew'),
    //     reviewSliderAutoplay = reviewSlider.attr('data-autoplay'),
    //     reviewSliderAutoplayTimeout = reviewSlider.attr('data-autoplay-timeout');

    //     if( reviewSliderAutoplay == "true" ) { reviewSliderAutoplay = true; } else { reviewSliderAutoplay = false; }
    // $('.owl-slider-rewiew').owlCarousel({
    //     margin:31,
    //     nav : true,
    //     navText : ["",""],
    //     responsiveClass:true,
    //     navContainerClass : "owl-nav owl-nav_rewiews",
    //     dotsClass : "owl-dots owl-dots_rewiews",
    //     loop : false,
    //     autoHeight : true,
    //     rewind : true,
    //     autoplay : reviewSliderAutoplay,
    //     autoplayTimeout : reviewSliderAutoplayTimeout,
    //     responsive:{
    //         0:{
    //             items:1,
    //             nav:false,
    //             autoHeight: true
    //         },
    //         769:{
    //             items:1,
    //             nav:true,
    //             autoHeight: true
    //         },
    //         1000:{
    //             items:2,
    //             nav:true,
    //         },
    //         1300:{
    //             autoplayHoverPause : true,
    //             items:3,
    //             nav:true,
    //         }
    //     }
    // })

/* Rewiew Slider */
	
	$("input[name=email]").inputmask("email");
	
	$(document).on('click', '.scroll-link', function(){
		event.preventDefault();
		
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
	})
	$(document).on('click', '#scroll-to-top', function(){
		event.preventDefault();
	
        $('body,html').animate({scrollTop: 0}, 1500);
	})
	$(document).on('click', '.navigation a', function(){
		event.preventDefault();
		
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
	})
	
	
	$(document).on('click', '.btn', function(){
		var remodal = $(this).data('remodal-target'),
		dataFrom = $(this).data('from');
		if(remodal){	
			$('#'+remodal).find('input[name=from]').val(dataFrom);
		}
	})
	
	var $status1 = $('.slider-products-nav .counter');
	var $slickElement1 = $('.slider-products');

	$slickElement1.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
		//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
		var i = (currentSlide ? currentSlide : 0) + 1;
		$status1.html('<b>' + i + '</b>' + ' &nbsp;&nbsp;из&nbsp;&nbsp; ' + '<span>' + slick.slideCount + '</span>');
	});
	
	$('.slider-products').slick({
		appendArrows: '.slider-products-nav',
		adaptiveHeight: true,
	})
	
	var $status2 = $('.slider-stend-nav .counter');
	var $slickElement2 = $('.slider-stend');

	$slickElement2.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
		//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
		var i = (currentSlide ? currentSlide : 0) + 1;
		$status2.html('<b>' + i + '</b>' + ' &nbsp;&nbsp;из&nbsp;&nbsp; ' + '<span>' + slick.slideCount + '</span>');
	});

	
	
	$('.slider-stend').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		appendArrows: '.slider-stend-nav',
		responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
		  }
		},
		{
		  breakpoint: 550,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
		  }
		},
		]
	})
	
	$('.slider-cert').slick({
		slidesToShow: 3,
		arrows: false,
		dots: true,
		responsive: [
		{
		  breakpoint: 960,
		  settings: {
			slidesToShow: 3,
			dots: true,
		  }
		},
		{
		  breakpoint: 700,
		  settings: {
			slidesToShow: 2,
			dots: true,
			
		  }
		},
		{
		  breakpoint: 500,
		  settings: {
			slidesToShow: 1,
			dots: true,
			
		  }
		},
		]
	})
	
	$('.toggle-menu, .mobile-bg').on('click', function (){
		toggleMenu();
	})
	
	$('.mobile-menu .nav a').on('click', function(){
		toggleMenu();
	})
	
	$('.tabs-roi-head a').tabs();
	
	$(document).on('click', '.tabs-roi .btn-step', function(e){
		e.preventDefault();
		var btn = $(this);
		
		$('.tabs-roi-head a').each(function(){
			var obj = $(this); 
		
			$(obj.attr('href')).hide();
			
			$('.tabs-roi-head a').each(function(i, element) {
					$($(element).attr('href')).hide();
				});
			//console.log(btn.attr('href'));
				$(btn.attr('href')).show();
		})
	})
	
	$('.field-progress input').forceNumbericOnly();
	$('input[name=inn]').forceNumbericOnly();
	$('input[name=phone]').forceNumbericOnly();
	
	/*$('.field-progress input').on('change paste', function() {
		var item = $(this).closest('.field-progress');
		var value = parseInt($(this).val());
		
		var min = parseInt(item.find('.diapazon .min').html());
		var max = parseInt(item.find('.diapazon .max').html());
		
		if(value < min){
			$(this).val(min)
		}
		if(value > max){
			$(this).val(max)
		}
		
		var progressbar = $(this).closest('.field-progress').find('.progressbar i');
		
		var progress = (value * 100) / max;
		progressbar.css('width', progress + '%');
		
	});*/
	
	rangeSlider();
	
	$('.lang').on('click', function(){
		$(this).toggleClass('active');
	})
	
	new WOW().init();
	
	$('.popup-link').magnificPopup({type:'image'});
	
	$("html").niceScroll({
		cursorcolor: "#DC0C15",
		cursorborder: 'none',
		cursorwidth: '8px',
		zindex: 99999,
		horizrailenabled: false,
	});
	
	$(document).on('click', '.remodal[data-remodal-id="modal-callback"] .btn[data-remodal-action="close"]', function (e) {
		$(this).closest('.form-content').html(
		'<div class="form-name">' +
            '<b>Заполните форму,</b><br/>' +
            'и мы свяжемся с Вами' +
           ' в течение 5 минут' +
      '</div>' +
        '<div class="form-body">' +
            '<form action="mail.php" method="POST">' +
                '<div class="field"><input type="text" name="name" required placeholder="Ваше имя"/></div>' +
                '<div class="field"><input type="tel" name="phone" required placeholder="Ваш телефон" value="+380"/></div>' +
                '<input type="hidden" name="from" value=""/>' +
                '<div class="button"><a href="#" class="btn">отправить заявку</a></div>' +
            '</form>' +
        '</div>'
		)
		$('input[name=phone]').forceNumbericOnly();
	});
	
	$(document).on('click', '.remodal[data-remodal-id="modal-rassrochka"] .btn[data-remodal-action="close"]', function (e) {
		$(this).closest('.form-content').html(
		'<div class="form-name">' +
            '<b>Заполните форму,</b><br/>' +
            'и мы свяжемся с Вами' +
           ' в течение 5 минут' +
      '</div>' +
        '<div class="form-body">' +
            '<form action="mail.php" method="POST">' +
                '<div class="field"><input type="text" name="name" required placeholder="Ваше имя"/></div>' +
                '<div class="field"><input type="tel" name="phone" required placeholder="Ваш телефон" value="+380"/></div>' +
				'<div class="field"><input type="email" name="email" required placeholder="Ваш email"/></div>' +
                '<div class="field"><input type="text" name="city" required placeholder="Населенный пункт"/></div>' +
                '<div class="field"><input type="text" name="inn" required placeholder="Идентификационный код"/></div>' +
                '<input type="hidden" name="from" value="Форма рассрочки"/>' +
                '<div class="button"><a href="#" class="btn">отправить заявку</a></div>' +
            '</form>' +
        '</div>'
		)
		$('input[name=phone]').forceNumbericOnly();
		$("input[name=email]").inputmask("email");
	});
	
	$(document).on('click', '.remodal[data-remodal-id="modal-roi"] .btn[data-remodal-action="close"]', function (e) {
		$(this).closest('.form-content').html(
		'<form action="roi.php" method="POST">' +
            '<div class="tabs-roi">' +
			'<div class="tabs-roi-head"><a href="#roi-1"></a><a href="#roi-2"></a><a href="#roi-3"></a></div>' +
			'<div id="roi-1" class="tab-roi">' +
                    '<div class="form-name"><b>Выберите подходящий комплект</b></div>' +
                    '<div class="form-body">' +
                        '<div class="option-area">' +
                            '<b>Легковые авто</b>' +
                            '<div class="field-option">' +
                                '<input type="radio" checked name="avto" id="avto-1" value="Эконом (2150 $)"/>' +
                                '<label for="avto-1">Эконом (2150 $)</label>' +
                            '</div>' +
                            '<div class="field-option">' +
                                '<input type="radio" name="avto" id="avto-2" value="Стандарт (2950 $)"/>' +
                                '<label for="avto-2">Стандарт (2950 $)</label>' +
                            '</div>' +
                            '<div class="field-option">' +
                                '<input type="radio" name="avto" id="avto-3" value="Премиум (4850 $)"/>' +
                                '<label for="avto-3">Премиум (4850 $)</label>' +
                            '</div>' +
                        '</div>' +
                        '<div class="option-area">' +
                            '<b>Грузовые авто</b>' +
                            '<div class="field-option">' +
                                '<input type="radio" name="avto" id="avto-4" value="Грузовой (8500 $)"/>' +
                                '<label for="avto-4">Грузовой (8500 $)</label>' +
                            '</div>' +
                            '<div class="field-option">' +
                                '<input type="radio" name="avto" id="avto-5" value="Сельхоз (10500 $)"/>' +
                                '<label for="avto-5">Сельхоз (10500 $)</label>' +
                            '</div>' +
                        '</div>' +
                        '<div class="button"><a href="#roi-2" class="btn-step">Шаг 2</a></div>' +
                    '</div>' +
                '</div>' +
                '<div id="roi-2" class="tab-roi">' +
                    '<div class="form-name"><b>Определите интенсивность потока и стоимость услуги</b></div>' +
                    '<div class="form-body">' +
                       ' <div class="field field-progress">' +
                            '<label>Стоимость шиномонтажа 4 колес (грн.)</label>' +
                            '<input type="text" class="range-cost" name="cost" placeholder="100" value="100"/>' +
                            '<input type="text" class="js-range-slider js-range-cost" data-min="100" data-max="2000" data-from="100"/>' +
                        '</div>' +
                        '<div class="field field-progress">' +
                            '<label>Интенсивность потока клиентов (чел.)</label>' +
                            '<input type="text" class="range-potok" name="potok" placeholder="70" value="1"/>' +
                            '<input type="text" class="js-range-slider js-range-potok" data-min="1" data-max="100" data-from="1"/>' +
                        '</div>' +
                        '<div class="button"><a href="#roi-3" class="btn-step">Шаг 3</a></div>' +
                    '</div>' +
                '</div>' +
                '<div id="roi-3" class="tab-roi">' +
                    '<div class="form-name">' +
                        '<b>Бесплатно узнайте точные сроки окупаемости</b>' +
                    '</div>' +
                    '<div class="form-body">' +
                        '<div class="field"><input type="text" name="name" required placeholder="Ваше имя"/></div>' +
                        '<div class="field"><input type="tel" name="phone" required placeholder="Ваш телефон" value="+380"/></div>' +
                        '<input type="hidden" name="from" value="Расчет окупаемости"/>' +
                        '<div class="button"><a href="#" class="btn">отправить заявку</a></div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</form>'
		)
		$('input[name=phone]').forceNumbericOnly();
		$('.field-progress input').forceNumbericOnly();
		$('input[name=inn]').forceNumbericOnly();
		rangeSlider();
	});
	
	$('.phones-mob').on('click', function(){
		$('.drop-phones').slideToggle(200);
	})
	
	$(document).on('closed', '.modal-callback', function (e) {
		var field = $(this).find('input[required]');
		
		field.each(function(e){
			$(this).val('');
		})
		$('input[name=phone]').val('+380');
		
	});
	
	$(document).on('closed', '.modal-roi', function (e) {
		var field = $(this).find('input[required]');
		
		field.each(function(e){
			$(this).val('');
		})
		
		$('.tab-roi').each(function(){
			$(this).fadeOut(200);
		})
		$('#roi-1').fadeIn(200);
		
		$('input[name=phone]').val('+380');
	});
	
	$('a[href=#]').click(function(e){ e.preventDefault(); });

});

$(window).on('scroll', function(){
	if($(window).scrollTop() >= 1300){
		$('#scroll-to-top').fadeIn(200)
	}else{
		$('#scroll-to-top').fadeOut(200)
	}
})

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

$.fn.forceNumbericOnly = function() {
    return this.each(function()
    {
        $(this).keydown(function(e)
        {
            var key = e.charCode || e.keyCode || 0;
            return ( key == 43 || key == 8 || key == 9 || key == 46 ||(key >= 37 && key <= 40) ||(key >= 48 && key <= 57) ||(key >= 96 && key <= 105) || key == 107 || key == 109 || key == 173|| key == 61  ); });
    });
};

$.fn.tabs = function() {
	var selector = this;
	this.each(function() {
		var obj = $(this); 
		
		$(obj.attr('href')).hide();
		obj.click(function() {
			$(selector).removeClass('selected');
			
			$(this).addClass('selected');
			
			$($(this).attr('href')).fadeIn();
			$(selector).not(this).each(function(i, element) {
				$($(element).attr('href')).hide();
			});
			return false;
			
		});
	});
	$(this).show();
	$(this).first().click();
};
function toggleMenu(){
	$('.toggle-menu').toggleClass('open');
	$('.mobile-menu').toggleClass('open');
	$('.mobile-bg').fadeToggle(200);
	$('html').toggleClass('no-scroll');
}

function rangeSlider() {
	/* range slider Cost*/
	var $rangeCost = $(".js-range-cost");
	$rangeCost.ionRangeSlider();
	$rangeCost.on("change", function () {
        var $inp = $(this);
        var from = $inp.prop("value"); // reading input value
		$('.range-cost').val(from);
    });
	
	$('.range-cost').on('keyup', function(){
		
		var count = parseInt($(this).val());
		let my_range_cost = $(".js-range-cost").data("ionRangeSlider");
    
		my_range_cost.update({
			from: count,
		});
	})
	
	/* range slider Potok*/
	var $rangePotok = $(".js-range-potok");
	$rangePotok.ionRangeSlider();
	$rangePotok.on("change", function () {
        var $inp = $(this);
        var from = $inp.prop("value"); // reading input value
		if(from < 1){
			$('.range-potok').val(1);
			//console.log(from)
		}else{
			$('.range-potok').val(from);
		}
		
    });
	
	$('.range-potok').on('keyup', function(){
		
		var count = parseInt($(this).val());
		let my_range_potok = $(".js-range-potok").data("ionRangeSlider");
    
		my_range_potok.update({
			from: count,
		});
	})
}