class Npc {
	constructor(x, y) {
		// steering behaviours
		this.MAX_SPEED = 3 // velocidad del NPC
		this.MAX_STEER = 0.1 // "inteligencia" del NPC
		this.ARRIVE_RADIUS = 100

		// físicas
		this.position = createVector(x, y)
		this.velocity = createVector(0, 0)
	}

	draw() {
		// cálculo del vector deseado -> objetivo
		let desired
		let mousePosition = createVector(mouseX, mouseY)
		
		let distance = mousePosition.copy().sub(this.position).mag()
		if (distance > this.ARRIVE_RADIUS) {
			desired = mousePosition.sub(this.position).normalize().mult(this.MAX_SPEED)
		} else {
			let speed = map(distance, this.ARRIVE_RADIUS, 0, this.MAX_SPEED, 0)
			desired = mousePosition.sub(this.position).normalize().mult(speed)
		}
	
		// cálculo del steer, velocity, position:
		let steer = desired.sub(this.velocity).limit(this.MAX_STEER)
		this.velocity.add(steer)
		this.position.add(this.velocity)

		// noStroke()
		// fill('white')
		// rectMode(CENTER, CENTER)
		// rect(this.position.x, this.position.y, 20, 20)

		// rotación
		push()
		translate(this.position.x, this.position.y)
		rotate(this.velocity.heading())
		noStroke()
		fill('white')
		rectMode(CENTER, CENTER)
		rect(0, 0, 35, 20)
		pop()
	}
}