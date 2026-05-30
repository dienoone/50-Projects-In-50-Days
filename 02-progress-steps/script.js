const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
const progressBar = document.getElementById('progress');

let currentIdx = 1;

function update() {
	circles.forEach((circle, idx) => {
		if (idx < currentIdx) {
			circle.classList.add('active');
		} else if (idx >= currentIdx) {
			circle.classList.remove('active');
		}
	});

	// progress...
	const actives = document.querySelectorAll('.active');
	progress.style.width =
		((actives.length - 1) / (circles.length - 1)) * 100 + '%';

	if (currentIdx === 1) {
		btnPrev.disabled = true;
	} else if (currentIdx === circles.length) {
		btnNext.disabled = true;
	} else {
		btnPrev.disabled = false;
		btnNext.disabled = false;
	}
}

btnNext.addEventListener('click', () => {
	currentIdx++;

	if (currentIdx >= circles.length) {
		currentIdx = circles.length;
	}

	update();
});

btnPrev.addEventListener('click', () => {
	currentIdx--;

	if (currentIdx < 1) {
		currentIdx = 1;
	}
	update();
});
