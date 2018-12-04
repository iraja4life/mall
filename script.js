$(document).ready(function() {
    $('.flexslider').flexslider({
      animation: "slide",
      directionNav:true
    });
  });

  $("#toggle").click(function() {
    $(this).toggleClass("on");
    $("#menu").slideToggle();
  });