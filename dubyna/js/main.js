(function($) {
    $('.navbar-button').on('click', e => {
        //console.log("Logo");
        // $('.navbar').css('display', 'block');
        $('.navbar').toggleClass('navbar-mobile');
        console.log("Logo");
    });
    $(document).click( function(e){
        // if(window.screen.availWidth < 992 + 'px') {
            if ($(e.target).closest('.navbar-button').length) {
                // клик внутри элемента
                return;
            }
            // клик снаружи элемента
            $('.navbar').removeClass('navbar-mobile');
        // }
    });

    $(function() {
        $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
            console.log("click");
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.products__tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });
    });
})(jQuery);
