function draw() {

	var c = document.getElementById("game");
	var ctx = c.getContext("2d");

	// check if browser is supported
	if (!(document.getElementById("game"))) {
		// browser is not supported
		console.log("Your browser does not support 'canvas'")
		return;
	}

	//
	// - - - DRAWING OBJECTS - - - -
	//

	// javascript syntax: 
	// drawImage(img_name, sx, sy, sw, sh, x, y, w, h)

	// THE BASICS
	// drawing the dirt, position: 91x125
	var tree=document.getElementById("assets");
	ctx.drawImage(tree, 0, 270, 90, 125, 15, 70, 220, 390);

	// drawing the dirt and the bushes, sx:0 sy: 720 swidth: 900 sheight:185
	var floor=document.getElementById("assets");
	ctx.drawImage(floor, 400, 720, 500, 185, 0, 320, 800, 340);

	// GRAPHICS THAT WILL NEED TO BE ANIMATED
	// sniffing dog
	var sniffing_dog = document.getElementById("assets");
	ctx.drawImage(sniffing_dog, 0, 5, 60, 47, 5, 470, 180, 125);

	// BLUE BIRD: set sw: 35, sh 30, w: 85, h:80 
	// blue bird 1
	var blue_1 = document.getElementById("assets");
	ctx.drawImage(blue_1, 0, 118, 35, 30, 300, 350, 85, 80);

	// blue bird 2
	var blue_2 = document.getElementById("assets");
	ctx.drawImage(blue_2, 37, 118, 35, 30, 400, 300, 85, 80);

	// blue bird 3
	var blue_3 = document.getElementById("assets");
	ctx.drawImage(blue_3, 78, 118, 35, 30, 500, 200, 85, 80);

	// blue bird 4
	var blue_4 = document.getElementById("assets");
	ctx.drawImage(blue_4, 0, 155, 35, 30, 600, 100, 85, 80);

	// blue bird 5
	var blue_5 = document.getElementById("assets");
	ctx.drawImage(blue_5, 37, 118, 35, 30, 700, 0, 85, 80);


}
