class Explosion {
	constructor(position) {
		this.particles = []
		this.numParticles = 40

		for (let i = 0; i < this.numParticles; i++) {
			this.particles.push(new Particle(position.copy()))
		}
	}

	draw() {
		// pooling de partículas
		for (let i = 0; i < this.particles.length; i++) {
			if (this.particles[i].isDead) {
				this.particles.splice(i, 1)
			}
		}

		for (let i = 0; i < this.particles.length; i++) {
			this.particles[i].draw()
		}
	}
}

class Particle {
	constructor(position) {
		this.position = position.copy()
		this.velocity = new p5.Vector(random(-3, 3), random(-3, 3))

		this.size = 5
		this.deltaSize = 0.1
	}

	draw() {
		this.size -= this.deltaSize
		if (this.size <= 0) {
			this.isDead = true
		}

		// físicas
		this.position.add(this.velocity)

		noStroke()
		fill('gray')
		circle(this.position.x, this.position.y, this.size)
	}
}
