var particles = [];
var sliderWind;

function setup() {
	createCanvas(window.innerWidth - 15, window.innerHeight - 50);

	let gravity = createVector(0, 9.8);
	sliderWind = createSlider(-10, 10, 0, 1);

	for (let i = 0; i < 100; i++) {
		particles.push(new Particle(gravity, 5));
	}
}

function draw() {
	background(0);

	for (let p of particles) {
		p.update(sliderWind.value());
		p.show();
	}
}