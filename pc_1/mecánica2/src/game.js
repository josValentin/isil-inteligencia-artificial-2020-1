class Game {
	constructor() {
		// pooling de explosiones
		this.explosions = []
	}

	draw() {
		// se hace pooling
		this.explosions.forEach((explosion, i) => {
			if (explosion.isDead) {
				this.explosions.splice(i, 1)
			}
		})

		// se dibuja cada explosión
		this.explosions.forEach((explosion, i) => {
			explosion.draw()
		})
	}

	explode() {
		// se crea una nueva explosión
		this.explosions.push(new Explosion())
	}
}
