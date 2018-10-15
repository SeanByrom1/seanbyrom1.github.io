$(".nav_toggle").click(function() {
  $("#mynav").slideToggle();
  $(this).toggleClass("act_state");
  $("#hamburger").toggleClass("fa-times");
  $("#hamburger").toggleClass("fa-bars");
});