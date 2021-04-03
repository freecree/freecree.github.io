$(function(){
 
$('.menu__btn').on('click', function() {
    $('.menu__list').toggleClass('menu__list--active')
});
$('body').on('click', function(e){

var $menu = $('.menu'),
    $target = $(e.target),
    $menu_link = $('.menu__item');

if (!$menu.find($target).length ||
    $menu_link.find($target).length) {
        console.log("click");
        $('.menu__list').removeClass('menu__list--active');
    }
});
$('.menu__btn-exit').on('click', function(){
    $('.menu__list').removeClass('menu__list--active');
});

 //form popup
$(function(){
    $(".form-link").fancybox({
        margin: 0,
        padding: 20,
        maxWidth: 300,
        autoScale: true,
        transitionIn: 'none',
        transitionOut: 'none',
        type: 'inline',
        helpers: {
        overlay: {
          locked: false
        }
    },
    // 'afterOpen' : function() {
    //   $(".header__form").hide();
    // },
        'afterClose' : function() {
            $(".top__form").show();
        }, 

    });
    $("thanks").fancybox({
        margin: 0,
        padding: 20,
        maxWidth: 300,
        autoScale: true,
        transitionIn: 'none',
        transitionOut: 'none',
        type: 'inline',
        helpers: {
        overlay: {
          locked: false
        }
    },
    // 'afterOpen' : function() {
    //   $(".header__form").hide();
    // },
        'afterClose' : function() {
            $(".top__form").show();
        }, 

    });

});
$('.header__btn').mousedown(function(event){
    $(".top__form").hide();
});

$(window).on('load resize', function() {
    if ($(window).width() < 935) {
        $('.why-us__blocks:not(.slick-initialized)').slick({
            centerMode: false,
            dots: false,
            arrows: false,
            infinite: true,
            speed: 100,
            slidesToShow: 1,
            });
    } else {
        $(".why-us__blocks.slick-initialized").slick("unslick");
    }
});
$(window).on('load resize', function() {
    if ($(window).width() < 1020) {
        $('.services__packages:not(.slick-initialized)').slick({
            centerMode: true,
            dots: false,
            arrows: true,
            infinite: false,
            speed: 100,
            slidesToShow: 1,
            initialSlide: 1,
            variableWidth: true,
            prevArrow: '<img class="left-arrow" src="images/left-arrow.svg" alt="">',
            nextArrow: '<img class="right-arrow" src="images/right-arrow.svg" alt="">',
            // adaptiveHeight: true,
            // variableHeight: true,
            responsive: [
            {
            breakpoint: 476,
            settings: {
              //variableWidth: false,
              //customPaging: 0,
              //centerPadding: 60
              variableWidth: false,
              centerMode: false,
            }
        },
        ]
    
      //centerPadding: 60,
      //customPaging: 50
      //adaptiveHeight: false,
    });
    } else {
        $(".services__packages-initialized").slick("unslick");
    }
});
$(".services__packages").on('setPosition', function (event, slick) {
    slick.$slides.css('height', slick.$slideTrack.height() + 'px');
});

  // slider
var rev = $('.works__slider');
rev.on('init', function(event, slick, currentSlide) {
    var
    cur = $(slick.$slides[slick.currentSlide]),
    next = cur.next(),
    prev = cur.prev();
    prev.addClass('slick-sprev');
    next.addClass('slick-snext');
    cur.removeClass('slick-snext').removeClass('slick-sprev');
    slick.$prev = prev;
    slick.$next = next;
}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
//console.log('beforeChange');
    var
    cur = $(slick.$slides[nextSlide]);
    //console.log(slick.$prev, slick.$next);
    slick.$prev.removeClass('slick-sprev');
    slick.$next.removeClass('slick-snext');
    next = cur.next(),
    prev = cur.prev();
    prev.prev();
    prev.next();
    prev.addClass('slick-sprev');
    next.addClass('slick-snext');
    slick.$prev = prev;
    slick.$next = next;
    cur.removeClass('slick-next').removeClass('slick-sprev');
});

rev.slick({
    speed: 1000,
    arrows: true,
    dots: false,
    focusOnSelect: true,
    prevArrow: '<img class="left-arrow" src="images/left-arrow.svg" alt="">',
    nextArrow: '<img class="right-arrow" src="images/right-arrow.svg" alt="">',
    infinite: true,
    centerMode: true,
    //initialSlide: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesPerRow: 1,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: '50',
    swipe: true,
    customPaging: function(slider, i) {
      return '';
    },
    /*infinite: false,*/
});

$(".package__list").each(function(indx){
    //console.log($(".package__list").height());
});  

//Cards
function showCards() {
    var containerWidth = $(".container").width();
    var cardWidth = $(".works__card").width();
    var leftPos = 0;
    var leftAdd = 40;
    var cardsAmount = $('.works__card').length;
    var leftDefoult = (containerWidth - ((cardsAmount-1)*leftAdd+cardWidth))/2;
    console.log(cardsAmount*leftAdd+cardWidth);
    console.log("container: "+containerWidth);
    //var cardsBlockW = cardsAmount*cardWidth - translAdd*(cardsAmount-1);
    //var margLeft = (containerWidth - cardsBlockW)/2
    $(".works__card").each(function(indx){
        $(this).css( { left : leftDefoult + leftPos+"px" } );
        leftPos += leftAdd;
    });
} 
showCards();


function cardFront(element) {
    $(element).addClass("card-half-rotated");
    window.rotatetimout = setTimeout(function(element){
       $(element).addClass("card-rotated"); 
    }, 300, element);
    //window.mytimeout = setTimeout(cardHalf, 300, this);
    
}

function cardBack(element) {
    $(element).removeClass("card-rotated");
    $(element).removeClass("card-half-rotated");   
    // $(element).addClass("card-half-unrotated");
    // $(element).css("transform", `translateX(-100px)`);
    // window.backRotatetimout = setTimeout(function(element){
    //     $(element).css("transform", `translateX(0px)`);
    //    //$(element).removeClass("card-half-unrotated");
       
    // }, 500, element);
   
} 
$('.works__card').hover(function(){
    window.mytimeout = setTimeout(cardFront, 300, this);
    console.log("hover()");
},
function() {
    clearTimeout(window.mytimeout);
    clearTimeout(window.rotatetimout);
    //clearTimeout(window.backRotatetimout);
    cardBack(this);
}); 

$('.card-image').mousedown(function(event){
  //console.log("click"+$(this).parent().index());
    $('.works__slider').slick("slickGoTo",$(this).parent().index());
});

var formSubject = "";

$("form").submit(function() { //Change
    //alert("here");
    var th = $(this);
    $.ajax({
        type: "POST",
        url: "mail.php", //Change
        data: th.serialize()
    }).done(function() {
        $("#thanks").fancybox().trigger('click');
        //alert("Thank you1!");
        setTimeout(function() {
            // Done Functions
            th.trigger("reset");
        }, 1000);
    });
    return false;
}); 


});


