let game

function setup() {
	createCanvas(600, 600)
	game = new Game()
}

function draw() {
	background('white')
	game.draw()
}