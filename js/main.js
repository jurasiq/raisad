document.addEventListener("DOMContentLoaded", function () {

	$(document).scroll(function () {
		scroll_pos = $(this).scrollTop();
		if (scroll_pos > 0) {
			$('.top-menu').addClass('fill');
		} else {
			$('.top-menu').removeClass('fill');
		}
	});

	const marketSlider = $(".owl-carousel");
	marketSlider.owlCarousel({
		loop: true,
		margin: 10,
		nav: false,
		autoplay: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 3
			},
			992: {
				items: 5
			}
		}
	});

	$('#prev-slide').click(function () {
		marketSlider.trigger('prev.owl.carousel');
	})
	$('#next-slide').click(function () {
		marketSlider.trigger('next.owl.carousel');
	})

});