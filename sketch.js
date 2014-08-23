var orientx = 0,
    orienty = 0,
    orient = 0;

// Gyro adjustments according to device orientation
function onDeviceOrientationChange(a) {usefulOrientation(a.alpha, a.beta, a.gamma)}
function usefulOrientation(a, b, e) {
    180 === window.orientation ? (b = -b, e = -e) : 90 === window.orientation ? (e = b, b = -e) : -90 === window.orientation && (b = e, e = -b);
    orientx = b;
    orienty = e;
    orient = window.orientation}
window.addEventListener("deviceorientation", onDeviceOrientationChange, !1);

window.onload = function() {
  var gui = new dat.GUI();

 // var f1=gui.addFolder('Controls');
  gui.add(window, 'x', 10, 1000);
  gui.add(window, 'y', 10, 1000);
  gui.add(window, 'rad', 10, 1000);

};

var x,y, rad = 50;

function setup() {

	createCanvas(windowWidth, windowHeight);
	x=windowWidth/2;
	y=windowHeight/2;

}

function draw(){
 	 background(0);
     ellipse(x-orienty*10,y-orientx*10,rad,rad);

}

