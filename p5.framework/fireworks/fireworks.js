var fireworks = [];
var gravity;
var fireworksNumber = 0.15

function setup() {
    createCanvas(window.innerWidth-15,
        window.innerHeight-16);
    colorMode(HSB);
    gravity = createVector(0, 0.09);
    stroke(255);
    strokeWeight(4);
    background(0);
}

function draw() {
    colorMode(RGB);
    background(0, 0, 0, 25);

    if (random(1) < fireworksNumber) {
        fireworks.push(new Firework());
    }

    for (var i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].update();
        fireworks[i].show();

        if (fireworks[i].done()) {
            fireworks.splice(i, 1);
        }
    }
}