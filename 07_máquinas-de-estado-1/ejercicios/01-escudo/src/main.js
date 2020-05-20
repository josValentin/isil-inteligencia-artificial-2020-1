let game
let isSpacebarPressed = false
let timeout

function setup() {
	createCanvas(600, 600)
	game = new Game()
}

function draw() {
	background('white')
	game.draw()
	drawSpacebarIndicator()
}

function drawSpacebarIndicator() {
	rectMode(CENTER)
	textAlign(CENTER, CENTER)

	// if (isSpacebarPressed) {
		// background
		fill('#ccc')
		noStroke()
		rect(300, 550, 100, 30)

		// texto
		fill('#fff')
		noStroke()
		textSize(20)
		text('spacebar', 300, 550)
	// }

	if (isSpacebarPressed) {
		// background
		fill('#111')
		noStroke()
		rect(300, 550, 100, 30)

		// texto
		fill('#fff')
		noStroke()
		textSize(20)
		text('spacebar', 300, 550)
		timeout = setTimeout(() => {
			isSpacebarPressed = false
		}, 50)
	}
}

function keyPressed() {
	game.onKeyPressed()
	clearInterval(timeout)
	isSpacebarPressed = true
}
