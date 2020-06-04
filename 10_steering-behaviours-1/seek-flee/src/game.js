class Game {
	constructor() {
		this.npc = new Npc()
	}

	draw() {
		noStroke()
		fill('black')
		circle(mouseX, mouseY, 20)
		this.npc.draw()
	}
}