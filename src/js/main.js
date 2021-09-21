
// $(".btn-menu").on('click', function(e) {
//     e.preventDefault();
//     $(this).toggleClass("active");
//     $(".mobile-menu-navigation").toggleClass('show-menu');
//     $("body").toggleClass('overflow-hidden');
// });


$(".btn-menu").on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".menu-navigation-wrap").toggleClass('show-menu');
    $("body").toggleClass('overflow-hidden');
});