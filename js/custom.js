/* Slider 1 - Parallax slider*/

$(function() {
	$('#da-slider').cslider({
		autoplay	: true,
		interval : 9000
	});
			
});


/* Flex slider */

$(document).ready(function() {
  // 确保第一个slide显示
  $('.flexslider .slides > li:first').css('display', 'block');

  $('.flexslider').flexslider({
    animation: "fade",
    easing: "swing",
    directionNav: false,
    controlNav: true,
    animationSpeed: 800,
    slideshowSpeed: 6000,
    initDelay: 0,
    pauseOnAction: false,
    pauseOnHover: true,
    useCSS: true,
    touch: true,
    smoothHeight: false,
    randomize: false,
    pausePlay: false,
    start: function(slider) {
      slider.removeClass('loading');
      // 确保所有slide都正确初始化
      slider.slides.css('display', 'block');
    },
    before: function(slider) {
      // 切换前的处理
    },
    after: function(slider) {
      // 切换后的处理
    }
  });
});

/* Image block effects */

$(function() {
      $('ul.hover-block li').hover(function(){
        $(this).find('.hover-content').animate({top:'-3px'},{queue:false,duration:500});
      }, function(){
        $(this).find('.hover-content').animate({top:'125px'},{queue:false,duration:500});
      });
});

/* Slide up & Down */

$(".discover a").click(function(e){
	e.preventDefault();
	var myClass=$(this).attr("id");
	$(".dis-content ."+myClass).toggle('slow');
});


/* Image slideshow */

$('#s1').cycle({ 
    fx:    'fade', 
    speed:  2000,
    timeout: 300,
    pause: 1
 });

/* Support */

$("#slist a").click(function(e){
   e.preventDefault();
   $(this).next('p').toggle(200);
});

/* prettyPhoto Gallery */

jQuery("a[class^='prettyPhoto']").prettyPhoto({
overlay_gallery: false, social_tools: false
});


/* Isotype */

// cache container
var $container = $('#portfolio');
// initialize isotope
$container.isotope({
  // options...
});

// filter items when filter link is clicked
$('#filters a').click(function(){
  var selector = $(this).attr('data-filter');
  $container.isotope({ filter: selector });
  return false;
});

