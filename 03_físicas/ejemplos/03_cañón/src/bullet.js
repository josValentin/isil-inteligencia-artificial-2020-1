class Bullet {
	constructor(origin, direction) {
		this.position = origin.copy()
		this.velocity = direction.copy()
		this.acceleration = new p5.Vector(0, 0.3)
	}

	draw() {
		this.velocity.add(this.acceleration)
		this.position.add(this.velocity)

		noStroke()
		fill('red')
		circle(this.position.x, this.position.y, 20)
	}
}