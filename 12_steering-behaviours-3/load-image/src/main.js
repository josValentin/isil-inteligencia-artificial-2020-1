let game
let npcImg

function preload() {
	npcImg = loadImage('assets/personaje.png')
}

function setup() {
	createCanvas(600, 600)
	game = new Game()
	noCursor()
}

function draw() {
	background('white')
	game.draw()
}