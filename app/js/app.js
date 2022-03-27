// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

/*jshint esversion: 6 */

document.addEventListener('DOMContentLoaded', () => {

	'use strict';

	//Top Menu

	let topMenu = document.querySelector('.menu-top'),
		map = document.querySelector('.menu-top__map_img'),
		phone = document.querySelector('.menu-top__phone_img'),
		mapContent = document.querySelector('.hidden-addres'),
		phoneContent = document.querySelector('.hidden-phone'),
		menuItems = document.querySelectorAll('.menu-top__items'),
		menuCenter = document.querySelector('.menu-top__center');


	function hideTopMenuContent() {
		menuCenter.classList.remove('show');
		menuCenter.classList.add('hide');
		for (let i = 0; i < menuItems.length; i++) {
			menuItems[i].classList.remove('show');
			menuItems[i].classList.add('hide');
		}
	}

	function showTopMenuContent() {
		if (menuCenter.classList.contains('hide'))
			menuCenter.classList.remove('hide');
		menuCenter.classList.add('show');
		for (let i = 0; i < menuItems.length; i++) {
			menuItems[i].classList.remove('hide');
			menuItems[i].classList.add('show');
		}
	}

	function showTopMenuAddres() {
		if (phoneContent.classList.contains('hide')) {
			mapContent.classList.remove('hide');
			mapContent.classList.add('show');
		} else {
			hideTopMenuPhone();
			showTopMenuAddres();
		}

	}

	function hideTopMenuAddres() {
		if (mapContent.classList.contains('show')) {
			mapContent.classList.remove('show');
			mapContent.classList.add('hide');
		}
	}

	function showTopMenuPhone() {
		if (mapContent.classList.contains('hide')) {
			phoneContent.classList.remove('hide');
			phoneContent.classList.add('show');
		} else {
			hideTopMenuAddres();
			showTopMenuPhone();
		}
	}

	function hideTopMenuPhone() {
		if (phoneContent.classList.contains('show')) {
			phoneContent.classList.remove('show');
			phoneContent.classList.add('hide');
		}
	}

	map.addEventListener('mouseenter', function () {
		hideTopMenuContent();
		showTopMenuAddres();
	});

	phone.addEventListener('mouseenter', function () {
		hideTopMenuContent();
		showTopMenuPhone();
	});

	topMenu.addEventListener('mouseleave', function () {
		showTopMenuContent();
		hideTopMenuAddres();
		hideTopMenuPhone();
	});


	// Bottom menu

	$('.menu-bottom__item').hover(function () {
		let bg_image_url = $(this).attr('data-image'),
			main_block = $('.header');
		main_block.attr('style', 'background-image: url(' + bg_image_url + '); background-size: cover;');

		$(this).children('div').stop(false, true).fadeIn(900);
		$('.menu-top').addClass('menu-top_whited');
		$('.header').addClass('whited');

	}, function () {
		$(this).children('div').stop(false, true).fadeOut(900);
	});


	$('.round-button__menu').click(function () {
		let bg_image_url = $(this).attr('data-image'),
			main_block = $('.header');
		console.log('lol');
		main_block.attr('style', 'background-image: url(' + bg_image_url + ')');
		$('.menu-top').removeClass('menu-top_whited');
		$('.main-heading__text').removeClass('main-heading_whited');
		$('.header').removeClass('whited');
	});

	$('.threesome__item').hover(function() {
		$(this).children('div').attr('style', 'opacity: 1');
	}, function() {
		$(this).children('div').attr('style', 'opacity: 0');
	});

	$('.panes__side').hover(function() {
		$(this).children('div').attr('style', 'opacity: 1');
	}, function() {
		$(this).children('div').attr('style', 'opacity: 0');
	});

	// Custom JS

});