document.addEventListener("DOMContentLoaded", function () {

	$(document).scroll(function () {
		scroll_pos = $(this).scrollTop();
		if (scroll_pos > 0) {
			$('.top-menu').addClass('fill');
		} else {
			$('.top-menu').removeClass('fill');
		}
	});

	$('.prod-slider').owlCarousel({
		margin: 30,
		responsive: {
			0: {
				items: 1,
				loop: true,
				nav: true
			},
			768: {
				items: 1,
				loop: true,
				nav: true
			},
			1200: {
				items: 3
			}
		}
	});

	const marketSlider = $("#sliderMarket");
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

//Открытие модальных форм
const btns = document.querySelectorAll('.btn');
const modalOverlay = document.querySelector('.modal-overlay');
const modals = document.querySelectorAll('.modal');

btns.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
		modalOverlay.classList.add('modal-overlay--visible');
	});
});

modalOverlay.addEventListener('click', (e) => {
	console.log(e.target);

	if (e.target == modalOverlay) {
		modalOverlay.classList.remove('modal-overlay--visible');
		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
	}
});

function closeModal(btn) {
	btn.closest('.modal').classList.remove('modal--visible');
	btn.closest('.modal-overlay').classList.remove('modal-overlay--visible')
}