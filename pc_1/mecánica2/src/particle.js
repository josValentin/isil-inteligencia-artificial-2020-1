class Particle {
	constructor(x, y) {
		// posición, velocidad y aceleración
		this.position = new p5.Vector(x, y)
		this.velocity = new p5.Vector(random(-10, 10), random(-10, 10))
		this.gravity = new p5.Vector(0, 1)

		// pooling de partículas
		this.isDead = false
	}

	draw() {
		// físicas
		// v += a
		// p += v
		this.velocity.add(this.gravity)
		this.position.add(this.velocity)
		if (this.position.y >= 650) this.isDead = true

		// se dibuja la partícula
		noStroke()
		fill('red')
		circle(this.position.x, this.position.y, 10)
	}
}
