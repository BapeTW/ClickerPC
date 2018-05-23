var mainbg = {};
var mainClickImages = {};
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
	} else if (gameState === "gameStart") {
		drawUI();
	}
}

function preload() {
	mainbg.img = loadImage("images/mainbg.jpg");
	
	
	//ADD THESE IN LATER ADD THESE IN LATER ADD THESE IN LATER ADD THESE IN LATER ADD THESE IN LATER ADD THESE IN LATER ADD THESE IN LATER 
//	mainClickImages.img1 = loadImage("images/1700k");
//	mainCLickImages.img2 = loadImage("images/gtx1080");
//	mainClickImages.img3 = loadImage("images/h110m");
//	mainClickImages.img4 = loadImage("images/tridentz");
//	mainClickImages.img5 = loadImage("images/1000w");
//	mainClickImages.img6 = loadImage("images/nzxtcase");
}
