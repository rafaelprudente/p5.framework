class Particle {
	constructor(gravity, mass) {
		this.position = createVector(random(width), random(height));
		this.gravity = gravity;
		this.mass = mass;
		this.R = random(255);
		this.G = random(255);
		this.B = random(255);
	}

	update(wind) {
		if (this.position.y < (height - this.mass / 2)) {
			this.position.add(this.gravity);
		} else {
			this.position.y = - (this.mass + 10);
		}

		this.position.add(wind);
		if (this.position.x > width) {
			this.position.x = 0;
		}
		if (this.position.x < 0) {
			this.position.x = width;
		}
	}

	show() {
		strokeWeight(this.mass);
		stroke(this.R, this.G, this.B);
		point(this.position.x, this.position.y);
	}
}