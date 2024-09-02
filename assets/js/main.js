window.addEventListener('load', function(){


	// FAQ SLIDER INIT //
	const swiper = new Swiper('.faq-slider', {
		direction: 'horizontal',
		slidesPerView: 1,
		grabCursor: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
		},
		breakpoints: {
			576: {
				slidesPerView: 2,
			},
			767: {
				slidesPerView: 3,
			},
			1299: {
				slidesPerView: 4,
				spaceBetween: 4,
			},
		  },
	});
	// END FAQ SLIDER INIT //

})