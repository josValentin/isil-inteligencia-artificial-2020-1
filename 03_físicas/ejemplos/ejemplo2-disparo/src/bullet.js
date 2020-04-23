class Bullet {
	constructor(origin, velocity) {
		// clona los vectores
		this.position = origin.copy()
		this.velocity = velocity.copy()
		this.acceleration = new p5.Vector(0, 0.9)

		// pooling: variable de muerte
		this.isDead = false
	}

	draw() {
		this.velocity.add(this.acceleration)
		this.position.add(this.velocity)

		// pooling: condición de muerte
		if (this.position.y > 650) {
			this.isDead = true
		}
		
		noStroke()
		fill('red')
		circle(this.position.x, this.position.y, 20)
	}
}