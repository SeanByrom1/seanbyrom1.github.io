jQuery( document ).ready(function() {
   jQuery('.fa-bars').click(function(){
	jQuery('.fa-bars').css("display", "none");
	jQuery('.fa-chevron-left').css("display", "block");
	jQuery('.main_nav').css("margin-left", "0px");
});

jQuery('.fa-chevron-left').click(function(){
	jQuery('.fa-bars').css("display", "block");
	jQuery('.fa-chevron-left').css("display", "none");
	jQuery('.main_nav').css("margin-left", "-144px");
	}); 
});

//Scroll Effects

// Customizing a reveal set
sr.reveal('.head_logo', { duration: 1200 });

sr.reveal('.work_example', { duration: 1500 }, 200);