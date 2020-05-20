class Game {
	constructor() {
		Global.game = this
		this.player = new Player()
	}

	draw() {
		this.player.draw()
	}

	onKeyPressed() {
		this.player.onKeyPressed()
	}
}
