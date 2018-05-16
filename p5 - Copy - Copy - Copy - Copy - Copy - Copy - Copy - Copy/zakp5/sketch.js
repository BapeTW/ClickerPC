var mainbg = {};
var gameState;
var playBox1Col;
var playBox2Col;

function setup() {
	var cnv = createCanvas(600, 800);
	var x = (windowWidth - width) / 2;
	var y = (windowHeight - height) / 2;
	cnv.position(x, y);
	gameState = "mainMenu";
	playBox1Col = 255;
	playBox2Col = 20;
}

function draw() {
	if (gameState === "mainMenu") {
		drawMainMenu();
	}
}

function preload() {
	mainbg.img = loadImage("images/mainbg.jpg");
}
