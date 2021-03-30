$(function(){

  // $(function() {
  //   let header = $('.header');
  //   let hederHeight = header.height(); // вычисляем высоту шапки

  //   $(window).scroll(function() {
  //    if($(this).scrollTop() > 1) {
  //     header.addClass('header_fixed');
  //     $('body').css({
  //        'paddingTop': hederHeight+'px' // делаем отступ у body, равный высоте шапки
  //     });
  //    } else {
  //     header.removeClass('header_fixed');
  //     $('body').css({
  //      'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
  //     })
  //    }
  //   });
  // });
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
  });
  $('.header__btn').mousedown(function(event){
    $(".top__form").hide();
       
  });

$(window).on('load resize', function() {
  if ($(window).width() < 950) {
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
      arrows: false,
      infinite: false,
      speed: 100,
      slidesToShow: 1,
      initialSlide: 1
      //centerPadding: 60,
      //customPaging: 50
      //adaptiveHeight: false,
    });
  } else {
    $(".services__packages-initialized").slick("unslick");
  }
});
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
    autoplay: false,
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
    console.log($(".package__list").height());
  });  

//Cards
function showCards() {
  var containerWidth = $(".container").width();
  var cardWidth = $(".works__card").width();
  var translX = 0;
  var translAdd = 120;
  var cardsAmount = $('.works__card').length;
  var cardsBlockW = cardsAmount*cardWidth - translAdd*(cardsAmount-1);
  var margLeft = (containerWidth - cardsBlockW)/2
  $(".works__card").eq(0).css( { marginLeft : margLeft+"px" } );
  $(".works__card").each(function(indx){
    $(this).css("transform", `translateX(${-translX}px)`);

    translX += translAdd;
    console.log(cardsAmount);
    console.log(cardWidth);
  });
} 
showCards();



function show(element) {
  console.log( "in show()" );
  $(element).children(".card-back").hide();
  $(element).children(".card-image").show();
  $(element).css("z-index",1);
}

var posx;
$('.works__card').hover(function(){
  //console.log("hov");
  var a = $(this).css('-webkit-transform').split(/[()]/)[1];
  posx = a.split(',')[4];
  $(this).css("transform", `translateX(${posx-30}px)`);
  window.mytimeout = setTimeout(show, 1000, this);
},function(){
  $(this).css("transform", `translateX(${posx}px)`);
  clearTimeout(window.mytimeout);  
  $(this).children(".card-back").show();
  $(this).children(".card-image").hide();
  $(this).css("zIndex",0);
     
  });
  $('.card-image').mousedown(function(event){
    //console.log("click"+$(this).parent().index());
    $('.works__slider').slick("slickGoTo",$(this).parent().index());
  });


});


