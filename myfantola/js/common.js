$(document).ready(function() {

	if ($(".fun_slider").length > 0) {
		var swiper = new Swiper('.fun_slider', {
			// direction: 'vertical', // вертикальный слайдер
			slidesPerView: 1,
			spaceBetween: 120,
			// effect: 'fade', // анимация
			loop: true,
			autoHeight: true,
			observer: false, // помощь инициализации
			observeParents: false,
			slidesPerGroup: 1,
			slideToClickedSlide: false, // клик на слайд = переход на слайд
			watchOverflow: true, // уберет навигацию когда она не нужна
			// autoplay: {
		 //        delay: 2500,
		 //        disableOnInteraction: false,
	  //     	},
	      	navigation: {
		        nextEl: '.swiper-button-next',
		        prevEl: '.swiper-button-prev',
	      	},
		    breakpoints: {
		        1200: {
		          slidesPerView: 1,
		        },
		        768: {
		          slidesPerView: 1,
		        },
		        640: {
		          slidesPerView: 1,
		        }
	      	}
	    });
	}



	
 //    <div class="swiper-container">
	//     <div class="swiper-wrapper">
	//         <div class="swiper-slide"></div>
	//     </div>
	//     <div class="swiper-pagination"></div>
	//     <div class="swiper-button-prev"></div>
	//     <div class="swiper-button-next"></div>
	// </div>





	//Попап менеджер FancyBox
	// data-fancybox="gallery" создание галереи
	// data-caption="<b>Подпись</b><br>"  Подпись картинки
	// data-width="2048" реальная ширина изображения
	// data-height="1365" реальная высота изображения
	// data-type="ajax" загрузка контента через ajax без перезагрузки
	// data-type="iframe" загрузка iframe (содержимое с другого сайта)
	$(".fancybox").fancybox({
		hideOnContentClick: true,
		protect: false, //защита изображения от загрузки, щелкнув правой кнопкой мыши. 
		loop: true, // Бесконечная навигация по галерее
		arrows : true, // Отображение навигационные стрелки
		infobar : true, // Отображение инфобара (счетчик и стрелки вверху)
		toolbar : true, // Отображение панели инструментов (кнопки вверху)
		buttons : [ // Отображение панели инструментов по отдельности (кнопки вверху)
        // 'slideShow',
        // 'fullScreen',
        // 'thumbs',
        // 'share',
        //'download',
        //'zoom',
        'close'
    	],
    	touch: false,
    	animationEffect : "zoom-in-out", // анимация открытия слайдов "zoom" "fade" "zoom-in-out"
    	transitionEffect: 'slide', // анимация переключения слайдов "fade" "slide" "circular" "tube" "zoom-in-out" "rotate'
    	animationDuration : 500, // Длительность в мс для анимации открытия / закрытия
    	transitionDuration : 1366, // Длительность переключения слайдов
    	slideClass : '', // Добавить свой класс слайдам

	});





	//Плавный скролл до блока .div по клику на .scroll
	$('a[data-target="anchor"]').on('click', function(){
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top;
		$('body, html').animate({scrollTop: bl_top}, 700);
		return false;
	});

	// Скрыть - раскрыть блок
	$('.menuToggle').on('click', function() {
	   $(this).addClass('active');
       $('.menu').slideToggle(300, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
                $('.menuToggle').removeClass('active');
            }
            // if( $(this).css('display') === "block"){
            //     $(this).css('display', 'flex');
            // }

       });

    });


    // Боковое меню

    $('.menuToggle').on('click', function() {
        $('body').toggleClass('none-scroll');
        $('.menu-nav').toggleClass('active');
        $('.overlay-page').toggleClass('active');
    });

    $('.overlay-page').on('click', function() {
        $('body').removeClass('none-scroll');
        $('.menu-nav').removeClass('active');
        $('.menuToggle').removeClass('active');
        $(this).removeClass('active');

    });

	// аккордеон

	$(".open_toggle").on('click', function(e) {
        e.preventDefault();
        if($(this).next("div").is(":visible")){
            $(this).next("div").slideUp(200);
            $(this).removeClass("active");

        } else {
            $(".block_toggle").slideUp(200);
            $(this).next("div").slideDown(200);
            $(this).parents().siblings().children(".open_toggle").removeClass("active");
            $(this).addClass("active");


        }
    });


// табы
  	$('ul.tab_list a').click(function(e) {
        e.preventDefault();
        $('ul.tab_list .active').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.block_content').not(tab).css({'display':'none'});
        $(tab).fadeIn(400);
    });

// Конпка вверх
    $(window).scroll(function() {
	    if($(this).scrollTop() != 0) {
	    $('#toTop').fadeIn();
	    } else {
	    $('#toTop').fadeOut();
	    }
	});

	$('#toTop').click(function() {
	    $('body,html').animate({scrollTop:0},800);
	});



});




