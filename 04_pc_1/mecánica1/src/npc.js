class Npc {
	constructor() {
		this.position = new p5.Vector()

		// índice que indica en qué tramo se encuentra
		this.index = 0

		// lerp
		this.t = 0
		this.dt = 0.01

		// pooling
		this.isDead = false
	}

	draw() {
		// se setean p1 y p2 de acuerdo al tramo actual
		let p1 = Game.path[this.index]
		let p2 = Game.path[this.index + 1]

		// se hace lerp entre p1 y p2
		this.position = p5.Vector.lerp(p1, p2, this.t)

		// se pasa al siguiente tramo cuando t >= 1
		this.t += this.dt
		if (this.t >= 1) {
			this.t = 0
			this.index++
			if (this.index == Game.path.length - 1) {
				this.isDead = true
			}
		}

		// finalmente, se dibuja
		noStroke()
		fill('green')
		circle(this.position.x, this.position.y, 20)
	}
}
