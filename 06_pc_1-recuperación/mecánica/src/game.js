class Game {
	constructor() {
		this.cellSize = 30
		this.player = new Player()
		this.goalPosition = new p5.Vector(this.cellSize * parseInt(random(1, 19)), this.cellSize * parseInt(random(1, 19)))
	}

	draw() {
		this.drawGoal()
		this.drawGrid()
		this.player.draw()

		if (dist(this.goalPosition.x, this.goalPosition.y, this.player.position.x, this.player.position.y) < 10) {
			console.log('colisión')
			this.goalPosition = new p5.Vector(
				this.cellSize * parseInt(random(1, 19)),
				this.cellSize * parseInt(random(1, 19))
			)
		}
	}

	drawGoal() {
		noStroke()
		fill('black')
		circle(this.goalPosition.x, this.goalPosition.y, 23)
	}

	drawGrid() {
		for (let i = 0; i <= 20; i++) {
			for (let j = 0; j <= 20; j++) {
				stroke('rgba(0, 0, 0, 0.1)')
				noFill()
				rectMode(CENTER)
				square(i * this.cellSize, j * this.cellSize, this.cellSize)
			}
		}
	}

	onKeyPressed() {
		this.player.onKeyPressed()
	}
}
