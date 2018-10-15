$("#menu-toggle").click(function() {
  	$(".navlink").slideToggle();
  	$(this).toggleClass("act_state");
  	$("#hamburger").toggleClass("fa-times");
  	$("#hamburger").toggleClass("fa-bars");
}); 