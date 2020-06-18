class Game {
	constructor() {
		this.npc = new Npc(300, 300)
		this.enemy = new Enemy()
	}

	draw() {
		noStroke()
		fill('yellow')
		circle(mouseX, mouseY, 20)
		this.npc.draw()
		this.enemy.draw()
	}
}