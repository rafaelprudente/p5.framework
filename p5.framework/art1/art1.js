var t = 0;
var H = 0;
var S = 0;
var B = 255;

var num_lines = 20;

var frequency1 = 0;
var frequency2 = 0;
var frequency3 = 0;
var frequency4 = 0;
var frequency5 = 0;
var frequency6 = 0;
var frequency7 = 0;
var frequency8 = 0;

var amplitude1 = 190;
var amplitude2 = 190;
var amplitude3 = 190;
var amplitude4 = 190;
var amplitude5 = 190;
var amplitude6 = 190;
var amplitude7 = 190;
var amplitude8 = 190;

function setup() {
	createCanvas(window.innerWidth - 15, window.innerHeight - 16);

	frequency1 = random(20);
	frequency2 = random(20);
	frequency3 = random(20);
	frequency4 = random(20);
	frequency5 = random(20);
	frequency6 = random(20);
	frequency7 = random(20);
	frequency8 = random(20);
}

function draw() {
	background(0);
	colorMode(HSB);
	translate(width / 2, height / 2);
	stroke(H, S, B);
	strokeWeight(3);

	for (let i = 0; i < num_lines; i++) {
		line(x1(t + i), y1(t + i), x2(t + i), y2(t + i));
	}

	t += 0.5;

	if (B < 0) {
		H = 0;
		S = 0;
		B = 255;
	}
	if (S > 256) {
		H = 0;
		S = 0;
		B -= 8;
	}
	if (H > 256) {
		H = 0;
		S+=8;
	} else {
		H+=8;
	}

	colorMode(RGB);
	stroke(0, 0, 0);
	fill(0, 0, 0);
	square(-455, -445, 120);
	stroke(255, 255, 255);
	fill(255, 255, 255);
	textFont("Verdana", 24);
	text(H, -455, -445, 80, 80);
	text(S, -400, -445, 80, 80);
	text(B, -345, -445, 80, 80);
}

function x1(t) {
	return sin(t / frequency1) * amplitude1 + sin(t / frequency2) * amplitude2;
}

function y1(t) {
	return cos(t / frequency3) * amplitude3 + cos(t / frequency4) * amplitude4
}
function x2(t) {
	return sin(t / frequency5) * amplitude5 + sin(t / frequency6) * amplitude6;
}

function y2(t) {
	return cos(t / frequency7) * amplitude7 + cos(t / frequency8) * amplitude8
}