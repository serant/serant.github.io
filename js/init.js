$(document).ready(function() {
    $(window).scroll(function() {
        $('.fade-on-scroll').each(function(i) {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > 0.9*bottom_of_element) {
                $(this).animate({'opacity': '1'}, 2000);
            }
        });
    });
});

$(document).ready(function() {
    $('.fade-on-load').animate({'opacity': '1'}, 3000);
});