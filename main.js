// Mobile navigation

$(".hamburger-menu").click(function () {
    var nav = $(".nav-menu");
    var icon = $(".hamburger");
    
    nav.slideToggle(200);
});

// Smooth scroll

$(function() {
  $('.smoothScroll').click(function() {
      
    if ($(window).width() < 480) {
        $(".nav-menu").slideToggle();
    }  
      
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 700);
        return false;
      }
    }
  });
});

var folder = "img/portfolio/";

$.ajax({
  url : folder,
  success: function (data) {
      $(data).find("a").attr("href", function (i, val) {
          if( val.match(/\.(jpe?g|png|gif)$/) ) { 
              $("portfolio").append( "<img src='"+ folder + val +"'>" );
          } 
      });
  }
});