class Game {
	constructor() {
		this.npc = new Npc(300, 300)
		this.enemy1 = new Enemy(200, 200)
		this.enemy2 = new Enemy(400, 400)
		Global.enemy1 = this.enemy1
		Global.enemy2 = this.enemy2
	}

	draw() {
		noStroke()
		fill('yellow')
		circle(mouseX, mouseY, 20)
		this.npc.draw()
		this.enemy1.draw()
		this.enemy2.draw()
	}
}
