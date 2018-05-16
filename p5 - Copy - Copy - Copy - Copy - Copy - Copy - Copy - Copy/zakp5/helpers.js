// Main Menu (Game Start/Exit To Main Menu)
function drawMainMenu() {
	// Background
	image(mainbg.img, 0, 0);
	
	// Top Header Text + Box
	noStroke();
	fill(10, 100, 15);
	rect(75, 45, 450, 110, 30);
	fill(20, 112, 30);
	rect(75, 25, 450, 110, 15);
	fill(90);
	textAlign(CENTER);
	textFont("Gabriola");
	textSize(75);
	text("PC Part Clicker", 300, 98);
	fill(220);
	text("PC Part Clicker", 302, 100);
	
	// Main Menu Play Button
	fill(playBox1Col);
	rect(189, 340, 220, 120, 35);
	fill(playBox2Col);
	rect(200, 350, 200, 100, 35);
	fill(255);
	text("PLAY", 300, 420);
	
	if (mouseX > 190 && mouseY > 340 && mouseX < 409 && mouseY < 460 && mouseIsPressed) {
		playBox2Col = 150;
	}
	
}