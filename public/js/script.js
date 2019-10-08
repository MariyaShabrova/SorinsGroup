/*анимация текста*/
/*var texts = [
    'ТВОРЧЕСКОЕ ПРОСТРАНСТВО',
    'БЕЗГРАНИЧНЫЕ ВОЗМОЖНОСТИ',
    'БЕЗУПРЕЧНОЕ ИСПОЛНЕНИЕ'
];

var currentTextId = texts.length - 1;

function getNextText(){

    currentTextId++;
    if(currentTextId == texts.length) {
        currentTextId = 0;
    }
return
texts[currentTextId];
    
}
var textEl = document.getElementById('text-animal');

textEl.innerHTML = 
getNextText ();
setInterval (function() {
    textEl.innerHTML = 
    getNextText();
}, 5000);*/

  // Closes responsive menu when a scroll trigger link is clicked
  
var myFlipster;

$(document).ready(function() {

	myFlipster = $('.my-flipster').flipster();


	$("#content div").hide(); // Скрываем содержание
	$("#tabs li:first").attr("id","current"); // Активируем первую закладку
	$("#content div:first").fadeIn(); // Выводим содержание

    $('#tabs a').click(function(e) {
        e.preventDefault();
        $("#content div").hide(); //Скрыть все сожержание
        $("#tabs li").attr("id",""); //Сброс ID
        $(this).parent().attr("id","current"); // Активируем закладку
        $('#' + $(this).attr('title')).fadeIn(); // Выводим содержание текущей закладки
    });
});


//Карусель вторая секция

			$(function() {

				$( '#mi-slider' ).catslider();

			});
	

;( function( $, window, undefined ) {

	'use strict';

	$.CatSlider = function( options, element ) {
		this.$el = $( element );
		this._init( options );
	};

	$.CatSlider.prototype = {

		_init : function( options ) {

			// Категории (ul)
			this.$categories = this.$el.children( 'ul' );
			// Навигация
			this.$navcategories = this.$el.find( 'nav > a' );
			var animEndEventNames = {
				'WebkitAnimation' : 'webkitAnimationEnd',
				'OAnimation' : 'oAnimationEnd',
				'msAnimation' : 'MSAnimationEnd',
				'animation' : 'animationend'
			};
			// Название анимации и события
			this.animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];
			// Поддержка анимаций и событий
			this.support = Modernizr.csstransforms && Modernizr.cssanimations;
			// Если анимация проводится
			this.isAnimating = false;
			// Текущая категория
			this.current = 0;
			var $currcat = this.$categories.eq( 0 );
			if( !this.support ) {
				this.$categories.hide();
				$currcat.show();
			}
			else {
				$currcat.addClass( 'mi-current' );
			}
			// Текущая категория навигации
			this.$navcategories.eq( 0 ).addClass( 'mi-selected' );
			// Инициализация событий
			this._initEvents();

		},
		_initEvents : function() {

			var self = this;
			this.$navcategories.on( 'click.catslider', function() {
				self.showCategory( $( this ).index() );
				return false;
			} );

			// Сброс при измении размеров окна
			$( window ).on( 'resize', function() {
				self.$categories.removeClass().eq( 0 ).addClass( 'mi-current' );
				self.$navcategories.eq( self.current ).removeClass( 'mi-selected' ).end().eq( 0 ).addClass( 'mi-selected' );
				self.current = 0;
			} );

		},
		showCategory : function( catidx ) {

			if( catidx === this.current || this.isAnimating ) {
				return false;
			}
			this.isAnimating = true;
			// Обновляем выбранную навигацию
			this.$navcategories.eq( this.current ).removeClass( 'mi-selected' ).end().eq( catidx ).addClass( 'mi-selected' );

			var dir = catidx > this.current ? 'right' : 'left',
				toClass = dir === 'right' ? 'mi-moveToLeft' : 'mi-moveToRight',
				fromClass = dir === 'right' ? 'mi-moveFromRight' : 'mi-moveFromLeft',
				// Текущая категория
				$currcat = this.$categories.eq( this.current ),
				// Новая категория
				$newcat = this.$categories.eq( catidx ),
				$newcatchild = $newcat.children(),
				lastEnter = dir === 'right' ? $newcatchild.length - 1 : 0,
				self = this;

			if( this.support ) {

				$currcat.removeClass().addClass( toClass );
				
				setTimeout( function() {

					$newcat.removeClass().addClass( fromClass );
					$newcatchild.eq( lastEnter ).on( self.animEndEventName, function() {

						$( this ).off( self.animEndEventName );
						$newcat.addClass( 'mi-current' );
						self.current = catidx;
						var $this = $( this );
						// Решение для ошибки в Chrome 
						self.forceRedraw( $this.get(0) );
						self.isAnimating = false;

					} );

				}, $newcatchild.length * 90 );

			}
			else {

				$currcat.hide();
				$newcat.show();
				this.current = catidx;
				this.isAnimating = false;

			}

		},
		// На основании http://stackoverflow.com/a/8840703/989439
		forceRedraw : function(element) {
			if (!element) { return; }
			var n = document.createTextNode(' '),
				position = element.style.position;
			element.appendChild(n);
			element.style.position = 'relative';
			setTimeout(function(){
				element.style.position = position;
				n.parentNode.removeChild(n);
			}, 25);
		}

	}

	$.fn.catslider = function( options ) {
		var instance = $.data( this, 'catslider' );
		if ( typeof options === 'string' ) {
			var args = Array.prototype.slice.call( arguments, 1 );
			this.each(function() {
				instance[ options ].apply( instance, args );
			});
		}
		else {
			this.each(function() {
				instance ? instance._init() : instance = $.data( this, 'catslider', new $.CatSlider( options, this ) );
			});
		}
		return instance;
	};

} )( jQuery, window );



// form feedback

$("#contact_form").submit(function(e){
e.preventDefault();
var form=$(this);
console.log(form.serialize())
form.addClass("disabled");
$.ajax({
  type: "POST",
  url: "/mail",
  data: form.serialize()
}).done(function() {
	form.removeClass("disabled");
	alert("success")
}).fail(function() {
  form.removeClass("disabled");
  alert('error!');
});
return false;
})


//Портфолио





//


//Услуги

const center = { x: 325, y: 175 };
const serv_dist = 250;
const pointer_dist = 172;
const pointer_time = 2;
const icon_size = 42;
const circle_radius = 38;
const text_top_margin = 18;
const tspan_delta = 16;

//name is used as the title for the bubble
//icon is the id of the corresponding svg symbol
const services_data = [
{ name: "Industries", icon: "industries" },
{ name: "Validation\n(C&Q and CSV)", icon: "validation" },
{ name: "Engineering", icon: "engineering" },
{ name: "Project\nManagement", icon: "management" },
{ name: "Manufacturing\nIT", icon: "manufacturing" },
{ name: "Technical\nServices", icon: "technical" },
{ name: "Process\nAutomation", icon: "process" }];


const services = document.getElementById("service-collection");
const nav_container = document.getElementById("circle-nav-services");
const symbol_copy = document.getElementById("circle-nav-copy");
const use_copy = document.querySelector("use.nav-copy");

//Keeps code DRY avoiding namespace for element creation
function createSVGElement(el) {
  return document.createElementNS("http://www.w3.org/2000/svg", el);
}

//Quick setup for multiple attributes
function setAttributes(el, options) {
  Object.keys(options).forEach(function (attr) {
    el.setAttribute(attr, options[attr]);
  });
}

//Service bubbles are created dynamically
function addService(serv, index) {
  let group = createSVGElement("g");
  group.setAttribute("class", "service serv-" + index);

  /* This group is needed to apply animations in
                                                          the icon and its background at the same time */
  let icon_group = createSVGElement("g");
  icon_group.setAttribute("class", "icon-wrapper");

  let circle = createSVGElement("circle");
  setAttributes(circle, {
    r: circle_radius,
    cx: center.x,
    cy: center.y });

  let circle_shadow = circle.cloneNode();
  setAttributes(circle, {
    class: 'shadow' });

  icon_group.appendChild(circle_shadow);
  icon_group.appendChild(circle);

  let symbol = createSVGElement("use");
  setAttributes(symbol, {
    'x': center.x - icon_size / 2,
    'y': center.y - icon_size / 2,
    'width': icon_size,
    'height': icon_size });

  symbol.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + serv.icon);
  icon_group.appendChild(symbol);

  group.appendChild(icon_group);

  let text = createSVGElement("text");
  setAttributes(text, {
    x: center.x,
    y: center.y + circle_radius + text_top_margin });


  let tspan = createSVGElement("tspan");
  if (serv.name.indexOf('\n') >= 0) {

    let tspan2 = tspan.cloneNode();
    let name = serv.name.split('\n');
    jQuery(tspan).text(name[0]);
    jQuery(tspan2).text(name[1]);

    setAttributes(tspan2, {
      x: center.x,
      dy: tspan_delta });


    text.appendChild(tspan);
    text.appendChild(tspan2);
  } else
  {
    jQuery(tspan).text(serv.name);
    text.appendChild(tspan);
  }

  group.appendChild(text);
  services.appendChild(group);

  let service_bubble = jQuery(".serv-" + index);

  //Uses tween to look for right position
  twn_pivot_path.seek(index);
  TweenLite.set(service_bubble, {
    x: pivot_path.x,
    y: pivot_path.y,
    transformOrigin: "center center" });


  service_bubble.click(serviceClick);
}

//Creates pointer
function createPointer() {
  let service_pointer = createSVGElement("circle");

  setAttributes(service_pointer, {
    cx: center.x - pointer_dist,
    cy: center.y,
    r: 12,
    class: "pointer" });


  nav_container.appendChild(service_pointer);

  service_pointer = document.querySelector("svg .pointer");

  let pointer_circle = [
  { x: 0, y: 0 },
  { x: pointer_dist, y: pointer_dist },
  { x: pointer_dist * 2, y: 0 },
  { x: pointer_dist, y: -pointer_dist },
  { x: 0, y: 0 }];


  twn_pointer_path.to(service_pointer, pointer_time, {
    bezier: {
      values: pointer_circle,
      curviness: 1.5 },
    ease: Power0.easeNone,
    transformOrigin: "center center" });


}

//Defines behavior for service bubbles
function serviceClick(ev) {

  //There's always an active service
  jQuery(".service.active").removeClass("active");

  let current = jQuery(ev.currentTarget);
  current.addClass("active");

  //There's a "serv-*" class for each bubble
  let current_class = current.attr("class").split(" ")[1];
  let class_index = current_class.split('-')[1];

  //Hides current text of the main bubble
  jQuery(use_copy).addClass("changing");

  //Sets pointer to the right position
  twn_pointer_path.tweenTo(class_index * (pointer_time / (2 * 6)));

  //After it's completely hidden, the text changes and becomes visible
  setTimeout(() => {
    let viewBoxY = 300 * class_index;
    symbol_copy.setAttribute("viewBox", "0 " + viewBoxY + " 300 300");
    jQuery(use_copy).removeClass("changing");
  }, 250);
}

//Array describes points for a whole circle in order to get
//the right curve
let half_circle = [
{ x: -serv_dist, y: 0 },
{ x: 0, y: serv_dist },
{ x: serv_dist, y: 0 },
{ x: 0, y: -serv_dist },
{ x: -serv_dist, y: 0 }];


//A simple object is used in the tween to retrieve its values
var pivot_path = { x: half_circle[0].x, y: half_circle[0].y };

//The object is animated with a duration based on how many bubbles
//should be placed
var twn_pivot_path = TweenMax.to(pivot_path, 12, {
  bezier: {
    values: half_circle,
    curviness: 1.5 },

  ease: Linear.easeNone });


services_data.reduce((count, serv) => {
  addService(serv, count);
  return ++count;
}, 0);

//The variable is modified inside the function
//but its also used later to toggle its class
var twn_pointer_path = new TimelineMax({ paused: true });
createPointer();

//Adding it immediately triggers a bug for the transform
setTimeout(() => jQuery("#service-collection .serv-0").addClass("active"), 200);


//


jQuery(document).ready(function($){
	var formModal = $('.cd-user-modal'),
		formLogin = formModal.find('#cd-login'),
		formSignup = formModal.find('#cd-signup'),
		formForgotPassword = formModal.find('#cd-reset-password'),
		formModalTab = $('.cd-switcher'),
		tabLogin = formModalTab.children('li').eq(0).children('a'),
		tabSignup = formModalTab.children('li').eq(1).children('a'),
		forgotPasswordLink = formLogin.find('.cd-form-bottom-message a'),
		backToLoginLink = formForgotPassword.find('.cd-form-bottom-message a'),
		mainNav = $('.main-nav');

	//open modal
	mainNav.on('click', function(event){
		$(event.target).is(mainNav) && mainNav.children('ul').toggleClass('is-visible');
	});

	//open sign-up form
	mainNav.on('click', '.cd-signup', signup_selected);
	//open login-form form
	mainNav.on('click', '.cd-signin', login_selected);

	//close modal
	formModal.on('click', function(event){
		if( $(event.target).is(formModal) || $(event.target).is('.cd-close-form') ) {
			formModal.removeClass('is-visible');
		}	
	});
	//close modal when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		formModal.removeClass('is-visible');
	    }
    });

	//switch from a tab to another
	formModalTab.on('click', function(event) {
		event.preventDefault();
		( $(event.target).is( tabLogin ) ) ? login_selected() : signup_selected();
	});

	//hide or show password
	$('.hide-password').on('click', function(){
		var togglePass= $(this),
			passwordField = togglePass.prev('input');
		
		( 'password' == passwordField.attr('type') ) ? passwordField.attr('type', 'text') : passwordField.attr('type', 'password');
		( 'Hide' == togglePass.text() ) ? togglePass.text('Show') : togglePass.text('Hide');
		//focus and move cursor to the end of input field
		passwordField.putCursorAtEnd();
	});

	//show forgot-password form 
	forgotPasswordLink.on('click', function(event){
		event.preventDefault();
		forgot_password_selected();
	});

	//back to login from the forgot-password form
	backToLoginLink.on('click', function(event){
		event.preventDefault();
		login_selected();
	});

	function login_selected(){
		mainNav.children('ul').removeClass('is-visible');
		formModal.addClass('is-visible');
		formLogin.addClass('is-selected');
		formSignup.removeClass('is-selected');
		formForgotPassword.removeClass('is-selected');
		tabLogin.addClass('selected');
		tabSignup.removeClass('selected');
	}

	function signup_selected(){
		mainNav.children('ul').removeClass('is-visible');
		formModal.addClass('is-visible');
		formLogin.removeClass('is-selected');
		formSignup.addClass('is-selected');
		formForgotPassword.removeClass('is-selected');
		tabLogin.removeClass('selected');
		tabSignup.addClass('selected');
	}

	function forgot_password_selected(){
		formLogin.removeClass('is-selected');
		formSignup.removeClass('is-selected');
		formForgotPassword.addClass('is-selected');
	}

	//REMOVE THIS - it's just to show error messages 
	formLogin.find('input[type="submit"]').on('click', function(event){
		event.preventDefault();
		formLogin.find('input[type="email"]').toggleClass('has-error').next('span').toggleClass('is-visible');
	});
	formSignup.find('input[type="submit"]').on('click', function(event){
		event.preventDefault();
		formSignup.find('input[type="email"]').toggleClass('has-error').next('span').toggleClass('is-visible');
	});

	//IE9 placeholder fallback
	//credits http://www.hagenburger.net/BLOG/HTML5-Input-Placeholder-Fix-With-jQuery.html
	/*if(!Modernizr.input.placeholder){
		$('[placeholder]').focus(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
		  	}
		}).blur(function() {
		 	var input = $(this);
		  	if (input.val() == '' || input.val() == input.attr('placeholder')) {
				input.val(input.attr('placeholder'));
		  	}
		}).blur();
		$('[placeholder]').parents('form').submit(function() {
		  	$(this).find('[placeholder]').each(function() {
				var input = $(this);
				if (input.val() == input.attr('placeholder')) {
			 		input.val('');
				}
		  	})
		});
	}*/

});
 // Портфолио

 jQuery(document).ready(function($){
	var gallery = $('.cd-gallery'),
		foldingPanel = $('.cd-folding-panel'),
		mainContent = $('.cd-main');
	/* open folding content */
	gallery.on('click', 'a', function(event){
		event.preventDefault();
		openItemInfo($(this).attr('href'));
	});

	/* close folding content */
	foldingPanel.on('click', '.cd-close', function(event){
		event.preventDefault();
		toggleContent('', false);
	});
	gallery.on('click', function(event){
		/* detect click on .cd-gallery::before when the .cd-folding-panel is open */
		if($(event.target).is('.cd-gallery') && $('.fold-is-open').length > 0 ) toggleContent('', false);
	})

	function openItemInfo(url) {
		var mq = viewportSize();
		if( gallery.offset().top > $(window).scrollTop() && mq != 'mobile') {
			/* if content is visible above the .cd-gallery - scroll before opening the folding panel */
			$('body,html').animate({
				'scrollTop': gallery.offset().top
			}, 100, function(){ 
	           	toggleContent(url, true);
	        }); 
	    } else if( gallery.offset().top + gallery.height() < $(window).scrollTop() + $(window).height()  && mq != 'mobile' ) {
			/* if content is visible below the .cd-gallery - scroll before opening the folding panel */
			$('body,html').animate({
				'scrollTop': gallery.offset().top + gallery.height() - $(window).height()
			}, 100, function(){ 
	           	toggleContent(url, true);
	        });
		} else {
			toggleContent(url, true);
		}
	}

	function toggleContent(url, bool) {
		if( bool ) {
			/* load and show new content */
			var foldingContent = foldingPanel.find('.cd-fold-content');
			foldingContent.load(url, function(event){
				setTimeout(function(){
					$('body').addClass('overflow-hidden');
					foldingPanel.addClass('is-open');
					mainContent.addClass('fold-is-open');
				}, 100);
				
			});
		} else {
			/* close the folding panel */
			var mq = viewportSize();
			foldingPanel.removeClass('is-open');
			mainContent.removeClass('fold-is-open');
			
			(mq == 'mobile' || $('.no-csstransitions').length > 0 ) 
				/* according to the mq, immediately remove the .overflow-hidden or wait for the end of the animation */
				? $('body').removeClass('overflow-hidden')
				
				: mainContent.find('.cd-item').eq(0).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
					$('body').removeClass('overflow-hidden');
					mainContent.find('.cd-item').eq(0).off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
				});
		}
		
	}

	function viewportSize() {
		/* retrieve the content value of .cd-main::before to check the actua mq */
		return window.getComputedStyle(document.querySelector('.cd-main'), '::before').getPropertyValue('content').replace(/"/g, "").replace(/'/g, "");
	}
});


//credits http://css-tricks.com/snippets/jquery/move-cursor-to-end-of-textarea-or-input/
jQuery.fn.putCursorAtEnd = function() {
	return this.each(function() {
    	// If this function exists...
    	if (this.setSelectionRange) {
      		// ... then use it (Doesn't work in IE)
      		// Double the length because Opera is inconsistent about whether a carriage return is one character or two. Sigh.
      		var len = $(this).val().length * 2;
      		this.focus();
      		this.setSelectionRange(len, len);
    	} else {
    		// ... otherwise replace the contents with itself
    		// (Doesn't work in Google Chrome)
      		$(this).val($(this).val());
    	}
	});
};


//nomber




$(function() {

	$({numberValue: 0}).animate({numberValue: 1000}, {
	
		duration: 500, // Скорость анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
		easing: "linear",
		
		step: function(val) {
		
			$(".price").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
			
		}
	});
	
});





var buttons = document.querySelectorAll('button[data-modal-trigger]');

for(var i=0; i < buttons.length; i++) {
	modalEvent(buttons[i]);
}

function modalEvent(button) {
	button.addEventListener('click', function() {
		var trigger = button.getAttribute('data-modal-trigger');
		var modal = document.querySelector('[data-modal=' + trigger + ']');
		var contentWrapper = modal.querySelector('.content-wrapper');
		var close = modal.querySelector('.close');

		close.addEventListener('click', function() { modal.classList.remove('open') });
		modal.addEventListener('click', function() { modal.classList.remove('open') });
		contentWrapper.addEventListener('click', function(e) { e.stopPropagation() });

		modal.classList.toggle('open');
	});
}




//Пример

$('.sliders').each(function() {
	var $this = $(this);
	var $group = $this.find('.slide_group');
	var $slides = $this.find('.slide');
	var bulletArray = [];
	var currentIndex = 0;
	var timeout;
	
	function move(newIndex) {
	  var animateLeft, slideLeft;
	  
	  advance();
	  
	  if ($group.is(':animated') || currentIndex === newIndex) {
		return;
	  }
	  
	  bulletArray[currentIndex].removeClass('active');
	  bulletArray[newIndex].addClass('active');
	  
	  if (newIndex > currentIndex) {
		slideLeft = '100%';
		animateLeft = '-100%';
	  } else {
		slideLeft = '-100%';
		animateLeft = '100%';
	  }
	  
	  $slides.eq(newIndex).css({
		display: 'block',
		left: slideLeft
	  });
	  $group.animate({
		left: animateLeft
	  }, function() {
		$slides.eq(currentIndex).css({
		  display: 'none'
		});
		$slides.eq(newIndex).css({
		  left: 0
		});
		$group.css({
		  left: 0
		});
		currentIndex = newIndex;
	  });
	}
	
	function advance() {
	  clearTimeout(timeout);
	  timeout = setTimeout(function() {
		if (currentIndex < ($slides.length - 1)) {
		  move(currentIndex + 1);
		} else {
		  move(0);
		}
	  }, 4000);
	}
	
	$('.next_btn').on('click', function() {
	  if (currentIndex < ($slides.length - 1)) {
		move(currentIndex + 1);
	  } else {
		move(0);
	  }
	});
	
	$('.previous_btn').on('click', function() {
	  if (currentIndex !== 0) {
		move(currentIndex - 1);
	  } else {
		move(3);
	  }
	});
	
	$.each($slides, function(index) {
	  var $button = $('<a class="slide_btn">&bull;</a>');
	  
	  if (index === currentIndex) {
		$button.addClass('active');
	  }
	  $button.on('click', function() {
		move(index);
	  }).appendTo('.slide_buttons');
	  bulletArray.push($button);
	});
	
	advance();
  });


  //Slider


	//Пример галлереи

	$('.view-gallerys button').on('click', function() {
		$('.boxi').toggleClass('animated');
		// $('ul').css({
		//   'max-width' : '100%'
		// });
	});





 //меню в моб версии
 $('.menu-hamburger-link').on('click', function(){
	$('.hamb-menu').css('display','block');
	$('.hamb-menu').addClass('hamb-menu-active');            
	// $("section:not(.first_screen)").css('display','none');
	// $("body").css('overflow','hidden');
	$('body').addClass('disabled-onepage-scroll');
			
	$('.onepage-pagination').css('right','-99999px');
});
$('#closeIcon').on('click', function(){
	$('.hamb-menu').css('display','none');
	$('.hamb-menu').removeClass('hamb-menu-active');
	$('.onepage-pagination').css('right','25px');
});
 





$(document).ready(function(){

	// $("#testimonial-slider").owlCarousel({

	// 		items:2,

	// 		itemsDesktop:[1000,2],

	// 		itemsDesktopSmall:[979,2],

	// 		itemsTablet:[768,1],

	// 		pagination:true,

	// 		navigation:false,

	// 		slideSpeed:1000,

	// 		singleItem:false,

	// 		navigationText:["",""],

	// 		autoPlay:true

	// });

});

//Четвертая секция

$('.text').hide();
$('.text').first().show();
$('i').first().addClass('active');
$('i').click(function(){
	link = $(this).attr('data');
	$('#' + link).fadeIn(700);
	$('#' + link).siblings('div').hide();
	$(this).addClass('active');
	$(this).siblings('i').removeClass('active');
});

//Пятая секция


var controller = new ScrollMagic.Controller();
var section1 = $('.shapes');
section1.each(function() {
	var boxes = $(this).find('.shape--pentagon');

	var tl = new TimelineLite({
		paused: true
	});
	
	tl.staggerFrom(
		boxes,
		0.5, {
			y: '+=50',
			autoAlpha: 0,
			ease: Power3.easeOut
		},
		0.25
	);
	var scene = new ScrollMagic.Scene({
			triggerElement: this
		})
		.on("enter", function(event) {
			tl.play().timeScale(1);
		})
		.on("leave", function(event) {
			tl.reverse().timeScale(1.5);
		})
		.addTo(controller);
});


// $(function () {

//   var tl1 = new TimelineMax();
//   tl1.to('#arrow', 0.5, {
//     y: '-5%',
//     yoyo: true,
//     repeat: -1
//   });


//   var tl3 = new TimelineMax();

//   tl3.staggerFrom(
//     [
//       '#home03',
//       '#home06',
//       '#home01',
//       '#home02',
//       '#home05',
//       '#home04'
//     ], 1, {
//       opacity: 0,
//       scale: 0.5,
//       transformOrigin: 'center center',
//       ease: Elastic.easeOut.config(1, 0.5)
//     }, 0.15)
//     .staggerFrom(
//       [
//         '#tree03',
//         '#tree01',
//         '#tree02'
//       ], 1, {
//         opacity: 0,
//         scale: 0.5,
//         transformOrigin: 'center center',
//         ease: Elastic.easeOut.config(1, 0.5)
//     }, 0.15, '-=1')
//     .from('#tree04', 0.3, {
//       opacity: 0,
//     },'-=1')
//     .from('#tree05', 0.3, {
//       opacity: 0,
//     },'-=1')
//     .from('#tree06', 0.3, {
//       opacity: 0,
//     },'-=1')
//     .from('#tree07', 0.3, {
//       opacity: 0.5, 
//       x: $(window).width() + 50
//     }, '-=1.5');

//   tl3.fromTo('#scene01 #text01', 1, {
//       opacity: 0,
//       transformOrigin: 'center center',
//       scale: 0.5
//     }, {
//       opacity: 1,
//       scale: 1
//     }, '-=2.5')
//     .set('#scene01 #text01', {
//       opacity: 0
//     }, '+=1');

//   tl3.fromTo('#scene02 #text02', 1, {
//       opacity: 0,
//       transformOrigin: 'center center',
//       scale: 0.5
//     }, {
//       opacity: 1,
//       scale: 1
//     })
//     .from('#scene02 #woman01', 1, {
//       opacity: 0.5,
//       x: -475
//     })
//     .fromTo('#scene02 #text03', 1, {
//       opacity: 0,
//       transformOrigin: 'center center',
//       scale: 0.5
//     }, {
//       opacity: 1,
//       scale: 1
//     })
//     .from('#scene02 #woman02', 1, {
//       opacity: 0.5,
//       x: $(window).width() + 50
//     }, '-=1')
//     .from('#scene02 #woman03', 1, {
//       opacity: 0.5,
//       x: $(window).width() + 50
//     }, '-=0.8')
//     .from('#scene02 #woman04', 1, {
//       opacity: 0.5,
//       x: $(window).width() + 50
//     }, '-=0.6')
//     .set('#scene02 #text02', {
//       opacity: 0
//     }, '+=1')
//     .set('#scene02 #text03', {
//       opacity: 0
//     })
//     .set('#scene02 #woman01', {
//       opacity: 0
//     })
//     .set('#scene02 #woman02', {
//       opacity: 0
//     })
//     .set('#scene02 #woman03', {
//       opacity: 0
//     })
//     .set('#scene02 #woman04', {
//       opacity: 0
//     });

//   tl3.fromTo('#scene03 #text04', 1, {
//       opacity: 0,
//       transformOrigin: 'center center',
//       scale: 0.5
//     }, {
//       opacity: 1,
//       scale: 1
//     })
//     .from('#scene03 #woman06', 1, {
//       opacity: 0.5,
//       x: $(window).width() + 50
//     }, '-=1')
//     .from('#scene03 #woman05', 1, {
//       opacity: 0.5,
//       x: -450
//     }, '+=0')


//   var ctrl = new ScrollMagic.Controller();

//   var scene = new ScrollMagic.Scene({
//       triggerElement: '#scene-01',
//       duration: 5000,
//       triggerHook: 0,
//       reverse: true
//     })
//     .setTween(tl3)
//     .setPin('#scene-01')
//     .addIndicators()
//     .addTo(ctrl);

// })

//Шестая секция

/* Bs carousel interval below keeps motion to a minumum on the page when scroll magic is also integrated. Alternatively, remove data-ride="carousel" to stop automatic sliding. 
NOTE:when users interact with the carousel, by default Bs starts slide animations when next or indicators are clicked or tapped, regardless if the data-ride="carousel" is not present */
$('.carousel').carousel({
  interval: 10000
})

// init/setup var for ScrollMagic controller
var controller = new ScrollMagic.Controller();

  // loop through each .project element
  $('.milestone').each(function(){
    console.log(this);
    // build a scene
    var scene = new ScrollMagic.Scene({
      triggerElement: this.children[0],
      duration:'60%' // responsive duration vs. viewport sizes
    })
    .setClassToggle(this, 'fade-in')
    .addIndicators({
      name:'fade scene'
    }) // this requires plugin to display indicators for debugging
   .addTo(controller);                     
});

// FOR LATER: build tween options
// uses the GSAP greensock animation plugin for tweens
// along with use of the scrollmagic plugin


//section jobs

$(function() {
	var $list = $('ul li');
	$list.filter(':first').addClass('animated flipInX');
	setInterval(function() {
		if( $list.filter('.flipInX').index() !== $list.length) {
			$list.filter('.flipInX').removeClass('animated flipInX').next().addClass('animated flipInX');
		}
	}, 400);
});


//ScrollMagic


	// build scenes
	new ScrollMagic.Scene({triggerElement: "#animation1"})
					.setClassToggle("#animation1", "active") // add class toggle
					.addTo(controller);


/** scroll menu */
var navHeader = $('#nav-header');
$(window).scroll(function(){
  if($(this).scrollTop() > 200) {
  	navHeader.addClass('scrolled');
  } else {
  	navHeader.removeClass('scrolled');
  }
});