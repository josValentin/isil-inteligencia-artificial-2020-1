class Npc {
	constructor(x, y) {
		// steering behaviours
		this.MAX_SPEED = 3 // velocidad del NPC
		this.MAX_STEER = 0.2 // "inteligencia" del NPC
		this.ARRIVE_RADIUS = 100

		// físicas
		this.position = createVector(x, y)
		this.velocity = createVector(0, 0)
	}

	draw() {
		let mousePosition = createVector(mouseX, mouseY)

		// cálculo del vector deseado para seguir el mouse
		let desiredSeek = SteeringBehaviours.arrive(this, mousePosition, 100, 9999999)
		// cálculo del vector deseado para esquivar enemigo 1
		let desiredFlee1 = SteeringBehaviours.flee(this, Global.enemy1.position, Global.enemy1.EVADE_RADIUS)
		// cálculo del vector deseado para esquivar enemigo 2
		let desiredFlee2 = SteeringBehaviours.flee(this, Global.enemy2.position, Global.enemy2.EVADE_RADIUS)

		// vector deseado total:
		let desired = desiredSeek.add(desiredFlee1).add(desiredFlee2)

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
