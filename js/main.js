;(function($){
	$(document).ready(function(){
		var $slider = $('.ba-team-slider'),
			$prev = $('.slick-prev', $slider),
			$next = $('.slick-next', $slider);

		//slider init
		$slider.slick({
			dots: true,
			prevArrow: $prev,
			nextArrow: $next,
			slide: '.ba-crewman__slide'
		});
	});

})(jQuery);

