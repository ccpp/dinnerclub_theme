(function ($, root, undefined) {

	$(function () {

		'use strict';

		$(document).ready(function(){

			var $navbar = $('nav.navbar');
			var $logocontainer = $('.logo-container');
			var $headerlogo = $('.header-logo');
			var initialtop = $navbar.offset().top;
			var initialheight;

			var onscroll = function(ev) {
				if (!initialheight) {
					initialheight = $logocontainer.height();
					if (!initialheight) {
						// Not loaded yet?
						return;
					}
				}

				if (window.pageYOffset <= initialtop) {
					$navbar.css({
						position: 'static',
						zIndex: 'auto'
					});
					$logocontainer.css({
						position: 'fixed'
					});
				} else {
					var newheight = Math.max($navbar.height(), initialheight - window.pageYOffset + initialtop);

					$navbar.css({
						position: 'fixed',
						top: 0,
						width: '100%',
						zIndex: 100,
					});
					$logocontainer.css({
						position: 'fixed',
						textAlign: 'center',
						zIndex: 101,
						height: newheight,
						width: 'auto'
					});
					$headerlogo.css({
						height: newheight,
						marginTop: 'auto'
					});
				}
			};

			$(window).scroll(onscroll);
			onscroll();

			  $('.navbar-toggle').on("click", function() {
			    $('.logo-container').slideToggle('fast');
			  });

			    $(".navbar-toggle").on("click", function () {
			        $(this).toggleClass("active");
			    });

		});


	});

})(jQuery, this);
