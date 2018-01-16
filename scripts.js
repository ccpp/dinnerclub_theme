$(document).ready(function(){

	  $('.navbar-toggle').on("click", function() {
	    $('.logo-container').slideToggle('fast');
	  });

	    $(".navbar-toggle").on("click", function () {
	        $(this).toggleClass("active");
	    });

		$(".form-hide").click(function(){
			event.preventDefault();
			$("#form_activator").show();
			$("#form_activator_guest").hide();
			$("#form_activator_help").hide();
			$('.login-guest').css('box-shadow', '0px 0px 10px 0px rgb(221, 152, 8)');
			$('.login-cook').css('box-shadow', '0px 0px 10px 0px rgba(0, 0, 0, 0.38)');
			$('.login-help').css('box-shadow', '0px 0px 10px 0px rgba(0, 0, 0, 0.38)');
		});

		$(".form-hide_guest").click(function(){
			event.preventDefault();
			$("#form_activator_guest").show();
			$("#form_activator").hide();
			$("#form_activator_help").hide();
			$('.login-cook').css('box-shadow', '0px 0px 10px 0px rgb(221, 152, 8)');
			$('.login-guest').css('box-shadow', '0px 0px 10px 0px rgba(0, 0, 0, 0.38)');
			$('.login-help').css('box-shadow', '0px 0px 10px 0px rgba(0, 0, 0, 0.38)');

		});

		$(".form-hide_help").click(function(){
			event.preventDefault();
			$("#form_activator_help").show();
			$("#form_activator").hide();
			$("#form_activator_guest").hide();
			$('.login-cook').css('box-shadow', '0px 0px 10px 0px rgba(0, 0, 0, 0.38)');
			$('.login-guest').css('box-shadow', '0px 0px 10px 0px rgba(0, 0, 0, 0.38)');
			$('.login-help').css('box-shadow', '0px 0px 10px 0px rgb(221, 152, 8)');

		});
});
