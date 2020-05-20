class Game {
	constructor() {
		Global.game = this
		this.npcs = []
	}

	draw() {
		this.npcs.forEach((npc, i) => {
			if (npc.isDead) this.npcs.splice(i, 1)
		})

		this.npcs.forEach((npc) => {
			npc.draw()
		})
	}

	spawn() {
		this.npcs.push(new Npc(new p5.Vector(mouseX, mouseY)))
	}

	onMousePressed() {
		this.spawn()
	}
}
