
let bubble;
let dragonBall;
let bubblebubble;

function setup() {
    createCanvas(600, 400);
    bubble = new Bubble();
    dragonBall = new Bubble();
    bubblebubble = new  Bubble();
    print(bubble.x, bubble.y);
}

function draw() {
    background(0);
    bubble.move();
    bubble.show();
    dragonBall.move();
    dragonBall.show();
    bubblebubble.move();
    bubblebubble.show();
}

class Bubble {
    constructor() {
        this.x = 200;
        this.y = 150;
    }

     move() {
        this.x = this.x + random(-15, 15);
        bubble.y = bubble.y + random(-5, 5);
    }

     show() {
         stroke(255);
         strokeWeight(4);
         noFill();
         ellipse(this.x, this.y, 24, 24);
    }

}
