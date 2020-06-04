class Npc {
	constructor() {
		// steering behaviours
		this.MAX_SPEED = 3 // velocidad del NPC
		this.MAX_STEER = 0.1 // "inteligencia" del NPC

		// físicas
		this.position = createVector(400, 400)
		this.velocity = createVector(0, 0)
	}

	draw() {
		// cálculo del vector deseado -> objetivo
		let mousePosition = createVector(mouseX, mouseY)
		let desired = mousePosition.sub(this.position).normalize().mult(this.MAX_SPEED) // SEEK
		// let desired = this.position.copy().sub(mousePosition).normalize().mult(this.MAX_SPEED) // FLEE
	
		// cálculo del steer, velocity, position:
		let steer = desired.sub(this.velocity).limit(this.MAX_STEER)
		this.velocity.add(steer)
		this.position.add(this.velocity)

		// rotación
		translate(this.position.x, this.position.y)
		rotate(this.velocity.heading())
		noStroke()
		fill('red')
		rectMode(CENTER, CENTER)
		rect(0, 0, 35, 20)
	}
}