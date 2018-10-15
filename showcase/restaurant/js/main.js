$(".nav_toggle").click(function() {
  $("#main_nav").slideToggle();
  $(this).toggleClass("act_state");
  $("#hamburger").toggleClass("fa-times");
  $("#hamburger").toggleClass("fa-bars");
});