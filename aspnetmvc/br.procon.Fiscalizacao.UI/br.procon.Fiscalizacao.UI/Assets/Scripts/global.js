//BUSCA TOPO
	
	( function() {
		$('#btn-search').on('click', function(e) {
			e.preventDefault();
			$('#search').animate({width: 'toggle'}).focus();
			$('#buscar').fadeToggle(200);

		});
		
		$('#btn-config').on('click', function(e) {
			e.preventDefault();
			$('.secaoHeaderConfig').fadeToggle(200);

		});
		} () 
	);
//MENU TOPO
(function($) {
	$.fn.menumaker = function(options) {  
	 var cssmenu = $(this), settings = $.extend({
	   format: "dropdown",
	   sticky: false
	 }, options);
	 return this.each(function() {
	   $(this).find(".button").on('click', function(){
		 $(this).toggleClass('menu-opened');
		 var mainmenu = $(this).next('ul');
		 if (mainmenu.hasClass('open')) { 
		   mainmenu.slideToggle().removeClass('open');
		 }
		 else {
		   mainmenu.slideToggle().addClass('open');
		   if (settings.format === "dropdown") {
			 mainmenu.find('ul').show();
		   }
		 }
	   });
	   cssmenu.find('li ul').parent().addClass('has-sub');
	multiTg = function() {
		 cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
		 cssmenu.find('.submenu-button').on('click', function() {
		   $(this).toggleClass('submenu-opened');
		   if ($(this).siblings('ul').hasClass('open')) {
			 $(this).siblings('ul').removeClass('open').slideToggle();
		   }
		   else {
			 $(this).siblings('ul').addClass('open').slideToggle();
		   }
		 });
	   };
	   if (settings.format === 'multitoggle') multiTg();
	   else cssmenu.addClass('dropdown');
	   if (settings.sticky === true) cssmenu.css('position', 'fixed');
	resizeFix = function() {
	  var mediasize = 700;
		 if ($( window ).width() > mediasize) {
		   cssmenu.find('ul').show();
		 }
		 if ($(window).width() <= mediasize) {
		   cssmenu.find('ul').hide().removeClass('open');
		 }
	   };
	   resizeFix();
	   return $(window).on('resize', resizeFix);
	 });
	  };
	})(jQuery);

	//(function($){
	//	$(document).ready(function(){
	//		$("#cssmenu").menumaker({
	//		   format: "multitoggle"
	//		});
	//		//SLIDE
	//		$(".carousel-inner").swipe( {
	//			//Generic swipe handler for all directions
	//			swipeLeft:function(event, direction, distance, duration, fingerCount) {
	//				$(this).parent().carousel('prev'); 
	//			},
	//			swipeRight: function() {
	//				$(this).parent().carousel('next'); 
	//			},
	//			//Default is 75px, set to 0 for demo so any distance triggers swipe
	//			threshold:0
	//		});
	//	});
	//})(jQuery);
