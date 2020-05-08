class Game {
	constructor() {
		this.npcs = []
		this.effects = []

		this.timer = 0
		this.interval = 1
	}

	draw() {
		// spawning
		if (this.timer >= this.interval) {
			this.timer = 0
			this.spawnNpc()
		}
		this.timer += deltaTime / 1000

		// pooling de npcs
		for (let i = 0; i < this.npcs.length; i++) {
			if (this.npcs[i].isDead) {
				this.npcs.splice(i, 1)
			}
		}

		for (let i = 0; i < this.npcs.length; i++) {
			this.npcs[i].draw()
		}

		// pooling de efectos
		for (let i = 0; i < this.effects.length; i++) {
			if (this.effects[i].isDead) {
				this.effects.splice(i, 1)
			}
		}

		for (let i = 0; i < this.effects.length; i++) {
			this.effects[i].draw()
		}
	}

	spawnNpc() {
		this.npcs.push(new Npc())
	}
}
