document.addEventListener('DOMContentLoaded', function () {
	const header = document.querySelector('header');
	function addStickyHeader() {
		window.addEventListener('scroll', () => {
			if (window.pageYOffset > 50) {
				header.classList.add('sticky');
			} else {
				header.classList.remove('sticky');
			}
		});
	}

	addStickyHeader();

	const menuButton = document.getElementById('menu');
	const mobileMenu = document.getElementById('mobile-menu');

	const headerHeight = header.clientHeight;

	mobileMenu.style.paddingTop = `${headerHeight + 10}px`;

	menuButton.addEventListener('click', () => {
		mobileMenu.classList.toggle('open');
		menuButton.classList.toggle('open');
	});

	const menuLinks = document.querySelectorAll('.mobile-link');

	menuLinks.forEach((link) => {
		link.addEventListener('click', (e) => {
			e.preventDefault(); // Prevent default link behavior
			mobileMenu.classList.remove('open'); // Close mobile menu
			menuButton.classList.toggle('open');
			const targetId = link.getAttribute('href'); // Get target section ID
			const targetElement = document.querySelector(targetId); // Get target section element
			targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Scroll smoothly to target section
		});
	});

	if (window.innerWidth <= 1024) {
		const glides = document.querySelectorAll('.glide');
		const btnControls = document.querySelectorAll('.btn-control');

		const initGlide = (slideClass) => {
			const glide = new Glide(slideClass, {
				gap: 15,

				peek: {
					after: 20,
					before: 0,
				},
				bound: true,
				breakpoints: {
					600: {
						perView: 1,
					},
					767: {
						perView: 2,
					},
					1024: {
						perView: 3,
					},
				},
			});

			glide.mount();
		};

		for (let i = 0; i < glides.length; i++) {
			btnControls[i].addEventListener('click', function () {
				setTimeout(() => {
					const id = this.getAttribute('id').replace('-tab', '');
					// const tabPane = document.getElementById(`${id} .glide`);
					initGlide(`#${id}`);
				}, 180);
			});
		}

		initGlide('.glide-1');
	} else {
		const tabPanes = document.querySelectorAll('.tab-pane');

		tabPanes.forEach((tabPane) => {
			const slides = this.querySelector('.projects-list');
			slides.classList.remove('glide__slides');
		});
	}
});
