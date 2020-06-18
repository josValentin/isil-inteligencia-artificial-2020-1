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
		let mousePosition = createVector(mouseX, mouseY)

		// cálculo del vector deseado para seguir el mouse
		let desiredSeek = SteeringBehaviours.seek(this, mousePosition, 50000000)
		// cálculo del vector deseado para esquivar enemigo
		let desiredFlee = SteeringBehaviours.flee(this, Global.enemy.position, Global.enemy.EVADE_RADIUS)

		// vector deseado total:
		let desired = desiredSeek.add(desiredFlee)

		// cálculo del steer, velocity, position:
		let steer = desired.sub(this.velocity).limit(this.MAX_STEER)
		this.velocity.add(steer)
		this.position.add(this.velocity)

		// rotación
		push()
		translate(this.position.x, this.position.y)
		rotate(this.velocity.heading())
		noStroke()
		fill('white')
		rectMode(CENTER)
		rect(0, 0, 35, 20)
		pop()
	}
}
