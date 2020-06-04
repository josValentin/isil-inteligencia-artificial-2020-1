class Npc {
	constructor() {
		this.position = createVector(400, 400)
		this.velocity = createVector(0, 0)
		this.MAX_SPEED = 3
		this.MAX_STEER = 0.5
	}

	draw() {
		// calcular el vector deseado -> objetivo
		let mousePosition = createVector(mouseX, mouseY)

		// SEEK
		let desired = mousePosition.sub(this.position).normalize().mult(this.MAX_SPEED)
		
		// FLEE
		// let desired = this.position.copy().sub(mousePosition).normalize().mult(this.MAX_SPEED)
	
		// calcular el steer, velocity, position:
		let steer = desired.sub(this.velocity).limit(this.MAX_STEER)
		this.velocity.add(steer)
		this.position.add(this.velocity)

		// rotación
		translate(this.position.x, this.position.y)
		rotate(this.velocity.heading())
		noStroke()
		fill('red')
		rectMode(CENTER, CENTER)
		square(0, 0, 30)
	}
}