$(function() {
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });

    var wow = new WOW({
        mobile: false  // trigger animations on mobile devices (default is true)
    });
    wow.init();
});