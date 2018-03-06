(function ($) {
	// USE STRICT
	"use strict";
	$(document).ready(function () {
		$('#slick-pro-1').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			swipe: false,
			speed: 1000,
			dots: true,
			customPaging: function (slider, i) {
				var thumb = $(slider.$slides[i]).data('thumb');
				return '<div class="p-btn"><img src="' + thumb + '"></div>';
			},
			appendDots: $('.dot-wrap')
		});
		$("#slick-pro-1").on('afterChange', function (event, slick, currentSlide) {
			var text = $(slick.$slides[currentSlide]).data('link');
			$('#bg-pro').attr('src', text);
		});
	});
})(jQuery);