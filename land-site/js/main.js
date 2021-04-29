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
        $('.menu__list').removeClass('menu__list--active');
    }
});
$('.menu__btn-exit').on('click', function(){
    $('.menu__list').removeClass('menu__list--active');
});

$(".menu").on("click","a", function (event) {

    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top+30;
    if ($(window).width() < 600) {
        top -= 30;
    }    
    //console.log(id);
    if (id == "#top") top=0;
    $('body,html').animate({scrollTop: top}, 1500);
});


 //form popup

$(".form-link").fancybox({
    margin: 0,
    padding: 20,
    maxWidth: 300,
    autoScale: true,
    touch: false,
    transitionIn: 'none',
    transitionOut: 'none',
    type: 'inline',
    helpers: {
    overlay: {
      locked: false
    }

    },
    'afterClose' : function() {
        $("form").removeClass("chosen");
        $(".top__form").show();
    }, 

});

$('.header__btn').mousedown(function(event){
    $(".top__form").hide();
});

// $(window).on('load resize', function() {
//     console.log("load");
if ($(window).width() < 935) {
    
    $('.why-us__blocks:not(.slick-initialized)').slick({
        centerMode: false,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        });
} else {
    $(".why-us__blocks.slick-initialized").slick("unslick");
}
if ($(window).width() < 1056) {
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
        responsive: [
        {
        breakpoint: 476,
        settings: {
        variableWidth: false,
        centerMode: false,
        //adaptiveHeight: true
        }
    },
    ]
});
} else {
    $(".services__packages-initialized").slick("unslick");
}

//});

// $(".services__packages").on('setPosition', function (event, slick) {
//     slick.$slides.css('height', slick.$slideTrack.height() + 'px');
// });

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
    var
    cur = $(slick.$slides[nextSlide]);
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
});

//Cards
function showCards() {
    var containerWidth = $(".container").width();
    var cardWidth = $(".works__card").width();
    var leftPos = 0;
    var leftAdd = 40;
    var cardsAmount = $('.works__card').length;
    var leftDefoult = (containerWidth - ((cardsAmount-1)*leftAdd+cardWidth))/2;
    $(".works__card").each(function(indx){
        $(this).css( { left : leftDefoult + leftPos+"px" } );
        leftPos += leftAdd;
    });
} 
showCards();

let cardFront_x, cardFront_r, cardBack_r;

function cardFront(element) {
    let card_front = $(element).children(".card-image");
    let card_back = $(element).children(".card-back");
    $(element).css('zIndex', '1');
    gsap.to(card_back, {duration: 1, rotationY: 180,
       onUpdate: function() {
        let elem = this.targets()[0];
        cardBack_r = gsap.getProperty(elem, "rotationY");
        //console.log("r: "+cardFront_r);
        } 

    });
    gsap.to(card_front, {duration: 0,  x: 205 });
    cardFront_x = 205;
    gsap.to(card_front, {duration: 1, rotationY: 360,
    onUpdate: function() {
        let elem = this.targets()[0];
        cardFront_r = gsap.getProperty(elem, "rotationY");
        //console.log("r: "+cardFront_r);
        }    

    });
    gsap.to(card_front, {duration: 1, x: 20, delay: .5,
        onUpdate: function() {
            let elem = this.targets()[0];
            cardFront_x = gsap.getProperty(elem, "x");
            //console.log("x: "+cardFront_x);
        }   

    });
}

function cardBack(element) {
    let card_front = $(element).children(".card-image");
    let card_back = $(element).children(".card-back");
    
    $(element).css('zIndex', '0');
    if (cardFront_r == 360) {
       gsap.to(card_back, {duration: 0,  x: cardFront_x-185 }); 
       //console.log(cardFront_r);
    }
    gsap.to(card_front, {duration: 1, rotationY: 180,
    onUpdate: function() {
            let elem = this.targets()[0];
            cardFront_x = gsap.getProperty(elem, "x");
            //console.log("x: "+cardFront_x);
        }  
    });
    gsap.to(card_back, {duration: 1, rotationY: 0});
    gsap.to(card_back, {duration: 1,  x: 0, delay: .3});
} 
$('.works__card').hover(function(){
    cardFront_r = 0;
    window.mytimeout = setTimeout(cardFront, 300, this);
},
function() {
    clearTimeout(window.mytimeout);
    clearTimeout(window.rotatetimout);
    cardBack(this);
    //cardFront_r = 0;
}); 

// $('.card-image').mousedown(function(event){
//     $('.works__slider').slick("slickGoTo",$(this).parent().index());
// });

var formSubject = "";

$('.consultation-order').mousedown(function(event){
    formSubject = "Заказать консультацию";
    $("#form-popup .form-subject").val(formSubject);
}); 
$('.package__btn').mousedown(function(event){
    var service = $(this).parents(".services__package");
    formSubject = service.attr('data-package');
    $("#form-popup .form-subject").val(formSubject);
});
$('.form-mobile__btn').mousedown(function(event){
    formSubject = "Форма на главной";
    $("#form-popup .form-subject").val(formSubject);
}); 


function setContactInp(name, inp) {
    iconClass = "contact-input-"+name;
    $(inp).attr("type", "text");
    $(inp).attr("name", name);
    $(inp).addClass(iconClass);
}

$(".form__contacts-img").mousedown(function(event){
    $(this).parents("form").addClass("chosen");
    var name  = $(this).attr('data-contact');
    var inp = $(this).parents("form").children(".contact-input");
    setContactInp(name, inp);
});    


$("form").submit(function() { //Change
    var form = this; 
    $(form).addClass("_sending");
    var th = $(this);
    $.ajax({
        type: "POST",
        url: "mail.php", //Change
        data: th.serialize()
    }).done(function() {
        $(form).removeClass("_sending");
        $.fancybox.open({
            src  : '#thanks',
            type : 'inline',
            'afterOpen': function(){
                setTimeout( function() {$.fancybox.close(); },3000); // 3000 = 3 secs
            }
        });
        
        setTimeout(function() {
            // Done Functions
            $(form).removeClass("chosen");
            $(form).children(".contact-inp").removeClass("contact-input-telegram contact-input-viber contact-input-whatsapp");

            $.fancybox.close(true);
            th.trigger("reset");
        },  3000);
    });
    return false;
}); 

function calcDate() {
    const MONTHS = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    let now = new Date();
    let m = now.getMonth() + 1;
    let y = now.getMonth();
    let days = new Date(y, m-1, 0).getDate();
    let monthName = MONTHS[m-1];
    m = m < 10 ? '0' + m : m;
    days = days < 10 ? '0' + days : days;
    let stockDate = days+"."+m;//`${days}.${m}`;
    $("#stock_month").text(monthName);
    $("#stock_date").text(stockDate);
    //alert(monthName+stockDate);

}

calcDate();


});
