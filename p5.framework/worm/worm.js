var dx = 1;
var dy = 1;
var x1 = 0;
var y1 = 0;
var x2 = 0;
var y2 = 0;
var sw = 30
var swr = sw / 2;
var sliderR;
var sliderG;
var sliderB;
var sliderA;
var sliderVx;
var sliderVy;


function setup() {
    createCanvas(window.innerWidth-27,
        window.innerHeight-42);

    x1 = random(width);
    y1 = random(height);
    x2 = x1;
    y2 = y1;

    sliderR = createSlider(0, 255, 100, 1);
    sliderG = createSlider(0, 255, 100, 1);
    sliderB = createSlider(0, 255, 100, 1);
    sliderA = createSlider(0, 255, 255, 1);
    sliderVx = createSlider(1, sw, sw / 2, 1);
    sliderVy = createSlider(1, sw, sw / 2, 1);

    strokeWeight(sw);

    setInterval(drawPoint, 50);
    setInterval(changeVelocity, 5000);
}

function draw() {
    background(0);
    noLoop();
}

function changeVelocity() {
    sliderVx.value(round(random(sw)));
    sliderVy.value(round(random(sw)));
    //sliderR.value(round(random(255)));
    //sliderG.value(round(random(255)));
    //sliderB.value(round(random(255)));
}

function drawPoint() {
    r = sliderR.value();
    g = sliderG.value();
    b = sliderB.value();
    a = sliderA.value();

    stroke(r, g, b, a);
    line(x1, y1, x2, y2);

    x2 = x1;
    y2 = y1;

    x1 = x1 + dx;
    y1 = y1 + dy;

    if (x1 <= swr) {
        x1 = swr
        dx = sliderVx.value();
    }
    if (x1 >= (width - swr)) {
        x1 = width - swr
        dx = sliderVx.value() * -1;
    }
    if (y1 <= swr) {
        y1 = swr;
        dy = sliderVy.value();
    }
    if (y1 >= (height - swr)) {
        y1 = (height - swr);
        dy = sliderVy.value() * -1;
    }
}