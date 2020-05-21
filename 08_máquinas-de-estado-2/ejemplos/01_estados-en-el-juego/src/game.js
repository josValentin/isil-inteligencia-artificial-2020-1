class Game {
	constructor() {
		this.player = new Player()
		this.state = GameState.COUNTDOWN

		// countdown state
		this.timerCountdown = 0
		this.countdown = 3
		this.COUNTDOWN_DURATION = 1

		// paused state
		this.lastMousePosition = new p5.Vector()
	}

	draw() {
		console.log(this.state)
		switch (this.state) {
			case GameState.COUNTDOWN: {
				// timer
				this.timerCountdown += deltaTime / 1000
				if (this.timerCountdown > this.COUNTDOWN_DURATION) {
					this.timerCountdown = 0
					this.countdown--
					if (this.countdown == -1) {
						this.state = GameState.GAMEPLAY
						return
					}
				}

				textSize(100)
				textAlign(CENTER, CENTER)
				text(this.countdown + '', 300, 300)
				break
			}

			case GameState.GAMEPLAY: {
				noStroke()
				fill('red')
				circle(mouseX, mouseY, 30)
				break
			}

			case GameState.PAUSED: {
				noStroke()
				fill('red')
				circle(this.lastMousePosition.x, this.lastMousePosition.y, 30)

				fill('rgba(0, 0, 0, 0.6)')
				rect(0, 0, 600, 600)

				fill('white')
				textSize(30)
				text('PAUSED', 300, 300)
				break
			}
		}
	}

	onKeyPressed() {
		if (keyCode == 32) {
			switch(this.state)
			{
				case GameState.GAMEPLAY: {
					// preparando las variables necesarias
					// para el estado siguiente
					this.lastMousePosition.x = mouseX
					this.lastMousePosition.y = mouseY
					this.state = GameState.PAUSED
					break
				}
				
				case GameState.PAUSED: {
					this.state = GameState.GAMEPLAY
					break
				}
			}
		}
	}
}

class GameState {
	static COUNTDOWN = 0
	static GAMEPLAY = 1
	static PAUSED = 2
}