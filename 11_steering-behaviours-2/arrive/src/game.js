class Game {
	constructor() {
		this.npc = new Npc(300, 300)
	}

	draw() {
		noStroke()
		fill('red')
		circle(mouseX, mouseY, 20)
		this.npc.draw()
	}
}