jQuery(document).ready(function($) {

	/**
	 * Moves the sidebar menu into the hamburger menu when the screen is smaller then 768 pixels or is resized
	 * and moves them back if it's bigger.
	 *
	 * Took me a long time to make..
	 *
	 * @todo Fix the bug that keeps popping up where the content is copied more than once.
	 */
	function responsiveMenu() {
		if(window.innerWidth <= 768) {
			$('.koningsschutters-site-sidebar ul').addClass('alien').detach().appendTo('.koningsschutters-navbar-collapse ul.navbar-nav');
			$('.koningsschutters-navbar-collapse ul.navbar-nav li.koningsschutters-site-label').addClass('hidden');
		}
		else {
			$('.koningsschutters-navbar-collapse ul.navbar-nav ul.alien').detach().removeClass('alien').appendTo('.koningsschutters-site-sidebar');
			$('.koningsschutters-site-sidebar li.hidden').removeClass('hidden');
		}
	}

	var loginForm = $('form.user-login-form');
	loginForm.find('div.description').detach().remove();

	if('placeholder' in (document.createElement('input'))) {
		loginForm.find('input').each(function() {
			if($(this).attr('type') == 'text' || $(this).attr('type') == 'password') {
				var id = $(this).attr('id'),
					placeholderText = loginForm.find('label[for="' + id + '"]').text();

				loginForm.find('label[for="' + id + '"]').detach().remove();
				$(this).attr('placeholder', placeholderText);
			}
		});
	}

	if($('table')) {
		$('table').addClass('table table-striped');
	}

	$('main.col-md-9 h1').first().removeAttr('class').detach().appendTo('div.koningsschutters-site-header div.container');

	/*
	 * FIX BUGS first
	 */
	//responsiveMenu();

	// $(window).resize(function() {
	// 	 responsiveMenu();
	// });
});