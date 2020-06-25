let game

function setup() {
	createCanvas(600, 600)
	game = new Game()
}

function draw() {
	background('#ddd')
	game.draw()
}

function mouseClicked() {
	game.onMouseClicked()
}