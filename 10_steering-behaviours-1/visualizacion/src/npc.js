class Npc {
	constructor() {
		// steering behaviours
		this.MAX_SPEED = 3 // velocidad del NPC
		this.MAX_STEER = 0.03 // "inteligencia" del NPC

		// físicas
		this.position = createVector(400, 400)
		this.velocity = createVector(0, 0)
	}

	draw() {
		// cálculo del vector deseado -> objetivo
		let mousePosition = createVector(mouseX, mouseY)
		let desired = mousePosition.sub(this.position).normalize().mult(this.MAX_SPEED) // SEEK

		// cálculo del steer, velocity, position:
		let steer = desired.copy().sub(this.velocity).limit(this.MAX_STEER)
		this.velocity.add(steer)
		this.position.add(this.velocity)

		// rotación
		push()
		translate(this.position.x, this.position.y)
		rotate(this.velocity.heading())
		noStroke()
		fill('#666')
		rectMode(CENTER)
		rect(0, 0, 35, 20)
		pop()

		// dibujo de los vectores de velocidad
		let factor = 50 / this.MAX_SPEED
		let factorSteer = 10 / this.MAX_STEER
		strokeWeight(3)
		stroke('red')
		line(this.position.x, this.position.y, this.position.x + desired.x * factor, this.position.y + desired.y * factor)
		stroke('blue')
		line(this.position.x, this.position.y, this.position.x + this.velocity.x * factor, this.position.y + this.velocity.y * factor)
		stroke('yellow')
		line(this.position.x + this.velocity.x * factor, this.position.y + this.velocity.y * factor, this.position.x + this.velocity.x * factor + steer.x * factorSteer, this.position.y + this.velocity.y * factor + steer.y * factorSteer)

	}
}
