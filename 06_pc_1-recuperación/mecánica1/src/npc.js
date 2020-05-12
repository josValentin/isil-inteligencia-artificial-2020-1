class Npc {
	constructor() {
		this.position = new p5.Vector()
		this.pi = new p5.Vector(300, 300)
		this.pf = new p5.Vector(300, 300)

		this.t = 0
		this.dt = 0.15
		this.stepSize = 30
	}

	draw() {
		this.position = p5.Vector.lerp(this.pi, this.pf, this.t)
		this.t += this.dt
		if (this.t > 1) {
			this.t = 1
		}

		noStroke()
		fill('red')
		circle(this.position.x, this.position.y, 20)
	}

	onKeyPressed() {
		if (this.t != 1) return

		this.pi = this.pf.copy()
		this.t = 0

		switch(keyCode) {
			case LEFT_ARROW: this.pf.x -= this.stepSize; break
			case RIGHT_ARROW: this.pf.x += this.stepSize; break
			case UP_ARROW: this.pf.y -= this.stepSize; break
			case DOWN_ARROW: this.pf.y += this.stepSize; break
		}
	}
}
