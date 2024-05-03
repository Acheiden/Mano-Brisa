canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

greencar_width = 75;
greencar_height = 100;

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

greencar_x = 5;
greencar_y = 225;


function add() {
	background_ImgTag = new Image();
	background_ImgTag.onload = uploadBackground;
	background_ImgTag.src = backgroundImage;

	greencar_ImgTag = new Image();
	greencar_ImgTag.onload = uploadgreencar;
	greencar_ImgTag.src = greencarImage;
}

function uploadBackground() {
	ctx.drawImage(background_ImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencar_ImgTag, greencar_x, greencar_y, greencar_width, greencar_height);
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (keyPressed == '38') {
		up();
		console.log("up");
	}

	if (keyPressed == '40') {
		down();
		console.log("down");
	}

	if (keyPressed == '37') {
		left();
		console.log("left");
	}

	if (keyPressed == '39') {
		right();
		console.log("right");
	}


}
function up() {
	greencar_y = greencar_y - 10
	uploadBackground();
	uploadgreencar();

}

function down() {
	greencar_y = greencar_y + 10
	uploadBackground();
	uploadgreencar();
}

function left() {
	greencar_x = greencar_x - 10
	uploadBackground();
	uploadgreencar();
}

function right() {
	greencar_x = greencar_x + 10
	uploadBackground();
	uploadgreencar();
}
