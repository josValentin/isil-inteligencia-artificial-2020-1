class Npc {
	constructor() {
		// punto inicial y punto final
		this.pi = this.getRandomPoint()
		this.pf = this.getRandomPoint()

		// posición
		this.position = this.pi.copy()

		// lerping
		this.t = 0
		this.dt = 0.01
	}

	draw() {
		// se calcula el lerp entre el punto inicial y el final
		// con el valor de t actual
		this.position = p5.Vector.lerp(this.pi, this.pf, this.t)
		this.t += this.dt

		// si se llegó al punto final (t > 1)
		// se recalculan ambos puntos
		if (this.t > 1) {
			this.pi = this.pf.copy()
			this.pf = this.getRandomPoint()
			this.t = 0
		}

		// dibujar
		noStroke()
		fill('black')
		circle(this.pf.x, this.pf.y, 20)
		fill('red')
		circle(this.position.x, this.position.y, 30)
	}

	// obtener un punto aleatorio
	getRandomPoint() {
		let x = random(600)
		let y = random(600)
		return new p5.Vector(x, y)
	}
}
