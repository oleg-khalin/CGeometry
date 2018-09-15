$(document).ready(function() {

	$('.s_save .save_container button').animated('fadeInUp', 'fadeOutDown');
// Клик на часть в Портфолио
	$('#functions_grid').mixItUp();

	$('.s_functions li').click(function() {
		$('.s_functions li').removeClass('active');
		$(this).addClass('active');
	});

// Увелечение фото при нажатии в Обо мне
	$('.popup').magnificPopup({type:'image'});
	$('.popup_content').magnificPopup({type:'inline', showCloseBtn: true});
// Анимация при скролле
	$('.top_text h1').animated('fadeInDown', 'fadeOutUp');
	$('.top_text p, .section_header').animated('fadeInUp', 'fadeOutDown');

// Анимация в Обо мне
	$('.animation_left').animated('fadeInLeft', 'fadeOutDown');
	$('.animation_center').animated('flipInY', 'fadeOutDown');
	$('.animation_right').animated('fadeInRight', 'fadeOutDown');
// Анимация в резюме
	$('.theory_container .theory_item .teory').animated('zoomIn', 'zoomOut');
// Анимация для паралакса
	function heightDetect() {
		$('.main_head').css('height', $(window).height())
	};

	heightDetect();

	$(window).resize(function() {
		heightDetect();
	});

// Анимация для клика на иконку меню
	$('.toggle_mnu').click(function() {
		$('.sandwich').toggleClass('active');
	});

	$('.top_mnu ul a').click(function() {
		$('.top_mnu').fadeOut(600);
		$('.sandwich').toggleClass('active');
		$('.top_text').css('opacity', '1');
	}).append('<span>');

	$('.toggle_mnu').click(function() {
		if ($('.top_mnu').is(':visible')) {
			$('.top_text').removeClass('h_opacify');
			$('.top_mnu').fadeOut(600);
			$('.top_mnu li a').removeClass('fadeInUp animated');
		} else {
			$('.top_text').addClass('h_opacify');
			$('.top_mnu').fadeIn(600);
			$('.top_mnu li a').addClass('fadeInUp animated');
		};
	});

// Добавление айдишников для плиток
	$('.functions_item').each(function(i) {
		$(this).find('a').attr('href', '#work_' + i);
		$(this).find('.port_descr').attr('id', 'work_' + i);
	});

// Форма
	$('input, select, textarea').jqBootstrapValidation();
	// Скрол меню
	$('.top_mnu ul a').mPageScroll2id();


	$('.logo_container a').mPageScroll2id();
});

var windowWidth = jQuery(window).width();
    if (windowWidth <= 759) {
             
						$('.animation_left').animated('fadeInUp', 'fadeOutDown');
						$('.animation_center').animated('flipInY', 'fadeOutDown');
						$('.animation_right').animated('fadeInUp', 'fadeOutDown');
    }

	$(window).load(function() { 
	$('.loader_inner').fadeOut(); 
	$('.loader').delay(400).fadeOut('slow'); 
});
