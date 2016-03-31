// P5.js experiment boilerplate

// plug in Stats
var stats = new Stats();
  stats.setMode( 0 );
  document.body.appendChild( stats.domElement );

// plug in dat.GUI
window.onload = function() {
  var gui = new dat.GUI();
  gui.add(window, 'radius', 10, 1000);
};

// -----------------------------

var x,y,t=0,radius=20;

function setup() {
	createCanvas(windowWidth, windowHeight);
	x=windowWidth/2;
	y=windowHeight/2;
  noStroke();
}

function draw(){
  stats.begin();

    background(0,100);
    ellipse(x,y,radius,radius);
    x+=5*Math.cos(t);
    t+=0.1;

  stats.end();
}
