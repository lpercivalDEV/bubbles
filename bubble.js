// tutorial: https://www.youtube.com/watch?v=T-HGdc8L-7w
// Choo choo! It's the Coding Train!!!


let bubble;
let dragonBall;
let bubblebubble;

function setup() {
    createCanvas(600, 400);
    bubble = new Bubble(200, 200, 20, 100);
    dragonBall = new Bubble(400, 200, 40, 180);
    bubblebubble = new  Bubble(300, 300, 30, 32);
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
    constructor(x, y, r, color) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
    }

     move() {
        this.x = this.x + random(-15, 15);
        bubble.y = bubble.y + random(-5, 5);
    }

     show() {
         stroke(255);
         strokeWeight(4);
         fill(200, 55, 0, 255);
         ellipse(this.x, this.y, this.r*2);
    }

}
