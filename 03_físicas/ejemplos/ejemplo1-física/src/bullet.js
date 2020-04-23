class Bullet {
	constructor() {
		this.position = new p5.Vector(300, 300)
		this.velocity = new p5.Vector(8, -8)
		this.acceleration = new p5.Vector(0, 0.9)
		this.isDead = false
	}

	draw() {
		this.velocity.add(this.acceleration)
		this.position.add(this.velocity)

		if (this.position.y > 650) {
			this.isDead = true
		}
		
		noStroke()
		fill('red')
		circle(this.position.x, this.position.y, 20)
	}
}