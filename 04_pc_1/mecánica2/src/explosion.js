class Explosion {
	constructor() {
		this.N_PARTICLES = 30
		// pooling de partículas
		this.particles = []
		this.isDead = false

		// se crean N_PARTICLES partículas
		for (let i = 0; i < this.N_PARTICLES; i++) {
			this.particles.push(new Particle(mouseX, mouseY))
		}
	}

	draw() {
		// se hace pooling
		this.particles.forEach((particle, i) => {
			if (particle.isDead) {
				this.particles.splice(i, 1)
			}
		})

		// se dibuja cada partícula
		this.particles.forEach((particle, i) => {
			particle.draw()
		})

		// pooling de la explosión
		if (this.particles.length == 0) {
			this.isDead = true
		}
	}
}
