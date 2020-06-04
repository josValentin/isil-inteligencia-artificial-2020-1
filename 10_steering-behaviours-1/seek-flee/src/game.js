class Game {
	constructor() {
		this.npc = new Npc()
	}

	draw() {
		noStroke()
		fill('green')
		circle(mouseX, mouseY, 15)
		this.npc.draw()
	}
}