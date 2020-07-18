$(function() {

    // Выпадающее меню

    $('.navbar__dogs').click(function(event) {
        $(this).children('.navbar-sub__dogs').toggleClass('navbar-sub__dogs-active');
    });
    $(document).click(function(event) {
        var nav = $(".navbar__dogs");
        if (!nav.is(event.target)
             && nav.has(event.target).length === 0) {
            $('.navbar-sub__dogs').removeClass('menu-sub-active');
        } else {
           $('.navbar-sub__dogs').toggleClass('menu-sub-active'); 
        }
    });
    $(document).click(function(event) {
        var nav = $(".gamburger");
        if (!nav.is(event.target)
             && nav.has(event.target).length === 0) {
            $('.navbar').removeClass('menu-sub-active');
        } else {
           $('.navbar').toggleClass('menu-sub-active'); 
        }
    });
    // плавный скролл
    function handler(event = 0) {
        if (event) {
            var myHash = event.target.hash;
        } else {
            var myHash = location.hash; //получаем значение хеша
        }

        location.hash = ''; //очищаем хеш
        if(myHash[1] != undefined){ //проверяем, есть ли в хеше какое-то значение
            $('html, body').animate(
                {scrollTop: $(myHash).offset().top}
                , 1000); 
            location.hash = myHash; //возвращаем хеш
        };
    }
    jQuery(document).ready(function($) {
        handler();
    });
    $('a[href*="#"]').click(function(event) {
        handler(event);
    });

    // play video

    $(".video-content").click(function() {
        console.log("video-content");
        var dataYoutube = $(this).attr('data-youtube');
        $(this).html('<iframe width=100% height=100% class="frame" src="https://www.youtube.com/embed/' + dataYoutube + '?autoplay=1&enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    });
    $('.slider-parents').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
        adaptiveHeight: true,
        prevArrow: "<img src='./img/arrow.svg' class='slick-prev' alt='1'>",
        nextArrow: "<img src='./img/arrow.svg' class='slick-next' alt='2'>",
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

                           /* tabs for video*/

    $('ul.tabs-caption').on('click', 'li:not(.active)', function() {
        console.log("click");
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('li.tab-content').removeClass('active').eq($(this).index()).addClass('active');
    });
});
 
