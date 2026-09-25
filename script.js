document.getElementById('year').textContent = new Date().getFullYear();

const carousel = document.querySelector('.results-carousel');

if (carousel) {
	const slides = [...carousel.querySelectorAll('.carousel-slide')];
	const controls = carousel.querySelector('.carousel-controls');
	const dots = carousel.querySelector('.carousel-dots');
	let activeIndex = 0;

	const showSlide = (index) => {
		activeIndex = (index + slides.length) % slides.length;
		slides.forEach((slide, slideIndex) => {
			slide.classList.toggle('is-active', slideIndex === activeIndex);
		});
		dots?.querySelectorAll('button').forEach((dot, dotIndex) => {
			dot.classList.toggle('is-active', dotIndex === activeIndex);
		});
	};

	if (slides.length > 1) {
		controls.hidden = false;
		slides.forEach((_, slideIndex) => {
			const dot = document.createElement('button');
			dot.className = 'carousel-dot';
			dot.type = 'button';
			dot.setAttribute('aria-label', `Show client result ${slideIndex + 1}`);
			dot.addEventListener('click', () => showSlide(slideIndex));
			dots.append(dot);
		});
		carousel.querySelector('[data-carousel="previous"]').addEventListener('click', () => showSlide(activeIndex - 1));
		carousel.querySelector('[data-carousel="next"]').addEventListener('click', () => showSlide(activeIndex + 1));
		showSlide(0);
	}
}
