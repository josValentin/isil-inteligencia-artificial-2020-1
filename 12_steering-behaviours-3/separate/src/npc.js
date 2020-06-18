class Npc {
	constructor(x, y) {
		// steering behaviours
		this.MAX_SPEED = 1 // velocidad del NPC
		this.MAX_STEER = 0.05 // "inteligencia" del NPC
		this.ARRIVE_RADIUS = 100
		this.SEPARATE_RADIUS = 30

		// físicas
		this.position = createVector(x, y)
		this.velocity = createVector(0, 0)
	}

	draw() {
		let mousePosition = createVector(mouseX, mouseY)
		let desiredSeparate = SteeringBehaviours.separate(this, Global.npcs, this.SEPARATE_RADIUS).mult(3)
		let desiredMouse = SteeringBehaviours.arrive(this, mousePosition, 100, 999999)

		let totalDesired = desiredSeparate.add(desiredMouse)

		// fórmula
		let steer = totalDesired.sub(this.velocity).limit(this.MAX_STEER)
		this.velocity.add(steer)
		this.position.add(this.velocity)

		push()
		translate(this.position.x, this.position.y)
		rotate(this.velocity.heading())
		noStroke()
		fill('white')
		circle(0, 0, 15)
		pop()
	}
}
