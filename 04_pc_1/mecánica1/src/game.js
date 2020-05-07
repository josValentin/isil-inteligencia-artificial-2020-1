class Game {
	static path = []

	constructor() {
		// spawning
		this.timer = 0
		this.SPAWNING_TIME = 1

		// pooling
		this.npcs = []

		Game.path = [
			new p5.Vector(50, 50),
			new p5.Vector(550, 50),
			new p5.Vector(550, 175),
			new p5.Vector(50, 175),
			new p5.Vector(50, 300),
			new p5.Vector(550, 300),
			new p5.Vector(550, 425),
			new p5.Vector(50, 425),
			new p5.Vector(50, 550),
			new p5.Vector(550, 550)
		]
	}

	draw() {
		// se dibuja el path
		this.drawPath()

		// si se pasa del tiempo
 		// se spawnea y se resetea el tiempo
		if (this.timer >= 1) {
			this.timer = 0
			this.spawn()
		}

		this.timer += deltaTime / 1000

		// se hace pooling
		this.npcs.forEach((npc, i) => {
			if (npc.isDead) {
				this.npcs.splice(i, 1)
			}
		})

		// se dibujan los npcs
		this.npcs.forEach((npc, i) => {
			npc.draw()
		})
	}

	drawPath() {
		for (let i = 0; i < Game.path.length - 1; i++) {
			stroke('black')
			strokeWeight(2)
			line(Game.path[i].x, Game.path[i].y, Game.path[i + 1].x, Game.path[i + 1].y)
		}
	}

	spawn() {
		// se crea un nuevo npc
		this.npcs.push(new Npc())
	}
}
