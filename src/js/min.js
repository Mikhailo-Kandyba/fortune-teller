
$(".btn-menu").on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".mobile-menu-navigation").toggleClass('show-menu');
});