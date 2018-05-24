//Declare Global Vars
var mainbg = {};
var mainClickImages = {};
var gameState;
var playBox1Col;
var playBox2Col;
var upgradeBoxCol;
var isUpgradeGuiOpen;

function setup() {
	var cnv = createCanvas(600, 800);
	var x = (windowWidth - width) / 2;
	var y = (windowHeight - height) / 2;
	cnv.position(x, y);
	gameState = "mainMenu";
	playBox1Col = 255;
	playBox2Col = 20;
	upgradeBoxCol = 90;
	isUpgradeGuiOpen = false;
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
	
	
	// Load Click Images
	mainClickImages.img1 = loadImage("images/1700k.png");
	mainClickImages.img2 = loadImage("images/gtx1080.png");
	mainClickImages.img3 = loadImage("images/h110m.png");
	mainClickImages.img4 = loadImage("images/tridentz.png");
	mainClickImages.img5 = loadImage("images/1000w.png");
	mainClickImages.img6 = loadImage("images/nzxt.png");
}
