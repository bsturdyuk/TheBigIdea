$(document).ready(function(){
  // Nav Functionality
 $('.menu-toggle').on('click', function(){
   $('.full-menu').toggleClass('full-menu--open');
 });

 $('button#nav-icon').click(function(){
   $(this).toggleClass('full-menu--open');
 });


 $(".parent-link").click(function() {
    var value = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(value).offset().top
    }, 1000);

    $('.full-menu').toggleClass('full-menu--open');
    $('button#nav-icon').toggleClass('full-menu--open');
  });

  new WOW().init();
  
});
