class Npc {
	constructor() {
		let x = Global.points[0].x
		let y = Global.points[0].y
		this.position = createVector(x, y)

		this.indexI = 0
		this.pI = this.position.copy()
		this.indexF = null
		this.pF = null
		this.t = 0

		this.path = [ 1, 2, 1, 2, 3 ]

		this.getNextPoint()
	}

	getNextPoint() {
		// buscar aleatoriamente algún vecino de pi

		if (this.pF != null) {
			this.indexI = this.indexF
			this.pI = this.pF.copy()
		}

		let neighbors = Global.map[this.indexI]

		let r = parseInt(Math.random() * 5)
		while (neighbors[r] == 0) {
			r = parseInt(Math.random() * 5)
		}

		this.indexF = r
		this.pF = Global.points[this.indexF]
	}

	draw() {
		this.position = p5.Vector.lerp(this.pI, this.pF, this.t)
		this.t += 0.03

		if (this.t > 1) {
			this.t = 0
			this.getNextPoint()
		}

		noStroke()
		fill('rgba(255, 0, 0, 0.6)')
		circle(this.position.x, this.position.y, 20)
	}
}
