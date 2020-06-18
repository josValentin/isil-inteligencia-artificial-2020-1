class Game {
	constructor() {
		Global.game = this
		this.score = 0

		this.state = GameState.MENU
		this.tPreLose = 0
	}

	draw() {
		switch (this.state) {
			case GameState.MENU: {
				noStroke()
				fill(0)
				rect(0, 0, 600, 600)

				fill('white')
				textAlign(CENTER, CENTER)
				textSize(18)
				text('CLICK TO START', 300, 300)

				if (mouseIsPressed) {
					this.state = GameState.GAMEPLAY
					this.spawnNewSheep()
				}

				break
			}

			case GameState.GAMEPLAY: {
				// dibujar
				noStroke()
				fill('#cccccc')
				circle(300, 300, Global.OUTER_RADIUS * 2)
				fill('#ffff00')
				circle(300, 300, Global.INNER_RADIUS * 2)
				this.sheep.draw()

				textAlign(LEFT, TOP)
				textSize(16)
				fill('black')
				text('SCORE: ' + this.score, 15, 15)

				break
			}

			case GameState.PRE_LOSE: {
				noStroke()
				fill('green')
				rect(0, 0, 600, 600)

				fill('white')
				textAlign(CENTER, CENTER)
				textSize(18)
				text('SCORE: ' + this.score, 300, 300)

				this.tPreLose += deltaTime / 1000
				if (this.tPreLose >= 2) {
					this.tPreLose = 0
					this.state = GameState.LOSE
				}

				break
			}

			case GameState.LOSE: {
				noStroke()
				fill('green')
				rect(0, 0, 600, 600)

				fill('white')
				textAlign(CENTER, CENTER)
				textSize(18)
				text('SCORE: ' + this.score, 300, 300)
				textSize(15)
				text('CLICK TO RESTART', 300, 322)

				if (mouseIsPressed) {
					this.state = GameState.GAMEPLAY
					this.score = 0
					this.spawnNewSheep()
				}

				break
			}
		}
	}

	onSheepEnter() {
		this.score++
	}

	onSheepLeave() {
		this.state = GameState.PRE_LOSE
	}

	spawnNewSheep() {
		this.sheep = new Sheep()
	}
}

class GameState {}
GameState.MENU = 0
GameState.GAMEPLAY = 1
GameState.PRE_LOSE = 2
GameState.LOSE = 3
