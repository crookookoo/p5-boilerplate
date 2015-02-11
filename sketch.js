// P5.js experiment boilerplate
// Eugene Krivoruchko

// - - - - - - - - - - -

// STATS
     
    var stats = new Stats();
    stats.setMode( 0 );

    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    stats.domElement.style.display = 'none';
    
    document.body.appendChild( stats.domElement );

// - - - - - - - - - - -

// DAT.GUI

// window.onload = function() {
//   var gui = new dat.GUI();

//   gui.add(window, 'rad', 10, 1000);
 
// };

// - - - - - - - - - - -


var x,y,rad = 50;

function setup() {

	createCanvas(windowWidth, windowHeight);
	x=windowWidth/2;
	y=windowHeight/2;

}

function draw(){
  stats.begin();

 	 background(0);
     ellipse(x,y,rad,rad);

  stats.end();
}

