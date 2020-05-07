class Game {
	constructor() {
		this.npcs = []
		this.timer = 0
	}

	draw() {
		// eliminar muertos
		for(let i = 0; i < this.npcs.length; i++) {
			let npc = this.npcs[i]
			if (npc.isDead) {
				this.npcs.splice(i, 1)
			}
		}

		// dibujar
		for(let i = 0; i < this.npcs.length; i++) {
			let npc = this.npcs[i]
			npc.draw()
		}

		// spawning basado en timer
		if (this.timer >= 1) {
			this.spawn()
			this.timer = 0
		}
		this.timer += deltaTime / 1000
	}

	spawn() {
		this.npcs.push(new Npc())
	}
}