
$(window).load(function() {

	var max_h = 0;	
	//выравнивает блоки по высоте при разрешении > 768 когда все элементы группы находятся в одном ряду (4шт.)
	function my_equal_height(elenemts) {
		$(elenemts).each(function(){
			$(this).height("auto");

			var this_h = $(this).outerHeight();			
			if ( this_h>= max_h ) {
				max_h = this_h;
			}
		});
		$(elenemts).height(max_h);
		max_h=0;
	};
	//при ширине окна меньше 768 px группа из 4 элементов становится в два ряда, 
	//первая функция выравнивает по высоте первый ряд/
	function my_equal_height_1(elenemts) {
		$(elenemts).eq(0).height("auto");
		$(elenemts).eq(1).height("auto");

		var this_h_0 = $(elenemts).eq(0).height();
		var this_h_1 = $(elenemts).eq(1).height();					
		if ( this_h_0>= max_h ) {
			max_h = this_h_0;
		};
		if ( this_h_1>= max_h ) {
			max_h = this_h_1;
		};
		$(elenemts).eq(0).height(max_h);
		$(elenemts).eq(1).height(max_h);
		max_h=0;
	};
	//при ширине окна меньше 768 px группа из 4 элементов становится в два ряда, 
	// вторая функция второй ряд.
	function my_equal_height_2(elenemts) {
		$(elenemts).eq(2).height("auto");
		$(elenemts).eq(3).height("auto");
			var this_h_2 = $(elenemts).eq(2).height();
			var this_h_3 = $(elenemts).eq(3).height();				
			if ( this_h_2>= max_h ) {
				max_h = this_h_2;
			};
			if ( this_h_3>= max_h ) {
				max_h = this_h_3;
			};
		$(elenemts).eq(2).height(max_h);
		$(elenemts).eq(3).height(max_h);
		max_h=0;
	};

	window_w = $(window).width();
	// brends>brends_item
	my_equal_height(".brends_item");
	//main>content
	if (window_w>=768) {
		my_equal_height(".js_kozak_magazine .goods_descrip");
		my_equal_height(".js_spec_propouse .goods_descrip");
		my_equal_height(".js_top_goods .goods_descrip");
	};
	//main>content
	if (window_w<768) {
		my_equal_height_1(".js_kozak_magazine .goods_descrip");
		my_equal_height_2(".js_kozak_magazine .goods_descrip");
		my_equal_height_1(".js_spec_propouse .goods_descrip");
		my_equal_height_2(".js_spec_propouse .goods_descrip");
		my_equal_height_1(".js_top_goods .goods_descrip");
		my_equal_height_2(".js_top_goods .goods_descrip");
	};
	//asise>bottom
	if (window_w<=992 && window_w>=768) {
		my_equal_height(".js_aside_goods");
	};
	//asise>bottom
	if (window_w>992 && window_w<768) {
		$(".js_aside_goods").height("auto");
	};
	$(window).resize(function() {
		window_w = $(window).width();
		//main>content
		if (window_w>=768) {
			my_equal_height(".js_kozak_magazine .goods_descrip");
			my_equal_height(".js_spec_propouse .goods_descrip");
			my_equal_height(".js_top_goods .goods_descrip");
		};
		//main>content
		if (window_w<768) {
			my_equal_height_1(".js_kozak_magazine .goods_descrip");
			my_equal_height_2(".js_kozak_magazine .goods_descrip");
			my_equal_height_1(".js_spec_propouse .goods_descrip");
			my_equal_height_2(".js_spec_propouse .goods_descrip");
			my_equal_height_1(".js_top_goods .goods_descrip");
			my_equal_height_2(".js_top_goods .goods_descrip");
		};
		//asise>bottom
		if (window_w<=992 && window_w>=768) {
			my_equal_height(".js_aside_goods");
		};
		//asise>bottom
		if (window_w>992 || window_w<768) {
			$(".js_aside_goods").height("auto");
		};
	});
}); //end LOAD








$(document).ready(function(){

	// navigation submenu hide/show > 992px
	var w_width = $(window).width();
	if (w_width>992) {
		$('.nav_item').on('mouseenter', function() {
			$(this).find('.nav_submenu').show();
		});
		$('.nav_item').on('mouseleave', function() {
			$(this).find('.nav_submenu').hide();
		});
	};

	//ACTION - RESIZE //

	//!!!!!!!!!!!!!сразу взять все переменные высота ширина и вынести их  в реади, а там пусть перещитывает.
	$(window).resize(function() {
		var w_width = $(window).width();
		var w_height = $(window).height();
		
		if (w_width>768) {
			$('.slider_img_wrap').outerHeight('auto');
			$('.slider_content').outerHeight('auto');

			$('.slider_img_wrap').each(function(i) {
				var img_h = $(this).outerHeight();
				var cont_h = $('.slider_content').eq(i).outerHeight();	
				var max_h;
				if (img_h>=cont_h) {
					max_h = img_h;
				}
				else {
					max_h = cont_h;
				};
				$('.slider_content').eq(i).outerHeight(max_h);
				// var slider_content_h = $('.slider_content').eq(i).outerHeight();
				$(this).outerHeight(max_h);
			});
		}
		else {
			$('.slider_img_wrap').outerHeight('auto');
			$('.slider_content').outerHeight('auto');
		};
	});


	
	//nav < 992
	$('.nav_item').on('mouseenter', function() {	
		$(this).find('.nav_submenu').show();
		if (w_width<992) {$(this).addClass('submenu_triangle')};
		$(window).resize(function() {
			w_width = $(window).width();
			if (w_width<992) {$(this).addClass('submenu_triangle')};
		});
	});

	$('.nav_item').on('mouseleave', function() {
		$(this).find('.nav_submenu').hide();
		if (w_width<992) {$(this).removeClass('submenu_triangle')};
		$(window).resize(function() {
			w_width = $(window).width();
			if (w_width<992) {$(this).removeClass('submenu_triangle')};
		});
	});
	


	//header bxslider
	$('.bxslider').bxSlider({
		controls:true,
		pagerActiveClass:"bxpagerlinkactive",
	});

	// в слайдере контент и картинка одинаковой высоты
	$('.slider_img_wrap').each(function(i) {
		var slider_content_h = $('.slider_content').eq(i).outerHeight();
		$(this).outerHeight(slider_content_h);
	});


	//popup
	$('.link_magnif_popup').magnificPopup({type:'image'});




	// toggle menu in top_line 
	$(".btn_top_menu").click(function() {
		//прячем навигацию если открыта и меняем внешний вид toggle navigation
		pos_menu = $('.nav_menu').css("right");
		if (pos_menu=="0px") {
			//эффекты самой кнопки toggle navigation
			setTimeout( function() {
				$('.btn_middle_line').toggle();
				$('.btn_top_line').toggleClass('rotate_line_top');
				$('.btn_bottom_line').toggleClass('rotate_line_bottom');
			}	
			,100);
			$('.nav_menu').animate({right:"-300px"},500,'swing');
			$('body').css("overflow", "visible");
		};
		
		//hide/show menu top line <768px
		var top_menu_l = parseInt($('.top_menu').css("left"));
		if (top_menu_l==-200) {
			$('.top_menu').css("left",-30);
		}
		else {
			$('.top_menu').css("left",-200);
		}
	});



	//toggle navigation
	$(".btn_nav").click(function() {
		
		//эффекты самой кнопки по еtoggle navigation
		setTimeout( function() {
			$('.btn_middle_line').toggle();
			$('.btn_top_line').toggleClass('rotate_line_top');
			$('.btn_bottom_line').toggleClass('rotate_line_bottom');
		}	
		,100);
		
		//прячем меню top_line если открыто
		$('.top_menu').css("left",-200);
		
		//меню выезжает слева на всю высоту окна
		var winHeight = $(window).height();
		$('.nav_menu').css("height", winHeight);
		var pos_menu = $('.nav_menu').css("right");
		if (pos_menu=="-300px") {
			$('.nav_menu').animate({right:"0px"},500,'swing');
		}
		else {
			$('.nav_menu').animate({right:"-300px"},500,'swing');
		};


		//при появлении навингации фон скролится/нескролится
		var overflowBody = $('body').css("overflow");
		if (overflowBody=='visible') {
			$('body').css("overflow", "hidden");
		}
		else {
			$('body').css("overflow", "visible");
		};	
	});

	$(window).resize(function() {
		// if (d_width<989) {
		// 	$('body').css("overflow","visible");
		// };

		var d_width = $(document).width();
		var w_width = $(window).width();

		var delta_w = w_width-d_width;

		var w_height = $(window).height();
		if (d_width<(992+delta_w)) {
			//устанавливаем высоту боковой красной навигации
			$('.nav_menu').css("height", w_height);
		}
		else {
			//убираем класс с  боковыми треугольниками при ховере, который добавился при <992px
			$('.nav_item').removeClass('submenu_triangle');
			//задаем меню высоту авто 
			// console.log(w_width); 
			$('.nav_menu').css("height","auto");
			var nav_menu_right = $('.nav_menu').css("right");
			

			if (nav_menu_right=="0px") {
				//возвращаем на начальную позицию, т.к. появляется стнадартные настройки меню
				$('.nav_menu').css("right","-300px");
				// возвращаем вид кнопки навигации в начальный вид
				setTimeout( function() {
					$('.btn_middle_line').toggle();
					$('.btn_top_line').toggleClass('rotate_line_top');
					$('.btn_bottom_line').toggleClass('rotate_line_bottom');
				}	
				,100);
				//возвращаем скролл страницы
				$('body').css("overflow","visible");
			};
		};
	});


	
//ACTION - SCROLL
	// top_line opacity and fixed then scroll
	$(window).scroll(function() {
		var top_line_h = $('.top_line').height();
		var top_line_w = $('.top_line').outerWidth();
		var win_scroll = $(window).scrollTop();
		var win_width = $(window).width();
		// && win_width<=992
		if (win_scroll>=top_line_h) {
			$('.top_line').addClass("top_line_fixed");
		}
		else {
			$('.top_line').removeClass("top_line_fixed");
		}
	});
})	 // end /Ready	


