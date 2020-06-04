class Game {
	constructor() {
		this.npc = new Npc()
	}

	draw() {
		noStroke()
		fill('#cccccc')
		circle(300, 300, 400)

		fill('#ffff00')
		circle(300, 300, 50)
		this.npc.draw()
	}
}