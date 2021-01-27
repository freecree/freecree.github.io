(function($) {
    $(function() {

        $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
            console.log("click: " + $(this).className);
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.products__tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });
        $('.navbar-button').on('click', e => {
            console.log("Logo");
            $('#navbar').css('display', 'block');
            console.log("Logo");
        });

        $('.gamburger_wrapper').click(function(event) {
            $(this).parent('.navbar').toggleClass('navbar_active');
        });

        $(document).click( function(e){
            if(window.screen.availWidth < 992 + 'px') {
                if ($(e.target).closest('.navbar-button').length) {
                    // клик внутри элемента
                    return;
                }
                // клик снаружи элемента
                $('#navbar').fadeOut();
            }
        });

    });
})(jQuery);