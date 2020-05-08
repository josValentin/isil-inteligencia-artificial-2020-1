class Npc {
	constructor() {
		// punto inicial y punto final
		this.pi = new p5.Vector(100, 300)
		this.pf = new p5.Vector(500, 300)
		this.isDead = false

		// posición
		this.position = this.pi.copy()

		// lerping
		this.t = 0
		this.dt = 0.02
	}

	draw() {
		// se calcula el lerp entre el punto inicial y el final
		this.position = p5.Vector.lerp(this.pi, this.pf, this.t)
		this.t += this.dt

		// si se llegó al punto final (t > 1)
		if (this.t > 1) {
			Global.game.effects.push(new Explosion(this.position))
			this.isDead = true
		}

		// dibujar
		noStroke()
		fill('red')
		circle(this.position.x, this.position.y, 15)
	}

	// obtener un punto aleatorio
	getRandomPoint() {
		let x = random(600)
		let y = random(600)
		return new p5.Vector(x, y)
	}
}
