$(function() {
    var SCROLL_DELTA = 80;
    var SCROLL_TIME = 100;

    $('.tab-header.left-arrow').on('click', function(e) {
        scrollHeader(-SCROLL_DELTA);
        e.preventDefault();
    });

    $('.tab-header.right-arrow').on('click', function(e) {
        scrollHeader(SCROLL_DELTA);
        e.preventDefault();
    });

    function scrollHeader(delta) {
        var headers = $('.tab-headers-inner');
        var oldPosition = headers.scrollLeft();
        headers.animate({scrollLeft: oldPosition + delta}, SCROLL_TIME);
    }

    $('.tab-headers a').on('click', function switchTab(e) {
        var selectedTab = $(this).attr('href');

        $(this).parent('.tab-header').addClass('active').siblings().removeClass('active');
        $(selectedTab + '_tab').addClass('active').siblings().removeClass('active');

        e.preventDefault();
    });
});
