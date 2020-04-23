class Npc {
	constructor() {
		this.index = 0
		this.position = new p5.Vector()
		this.t = 0
		this.dt = 0.01
	}

	draw() {
		let pi = Global.path[this.index]
		let pf = Global.path[this.index + 1]

		this.position = p5.Vector.lerp(pi, pf, this.t)
		this.t += this.dt

		if (this.t >= 1) {
			this.t = 0
			this.index++
			if (this.index == Global.path.length - 1) {
				this.index = 0
			}
		}

		fill('blue')
		circle(this.position.x, this.position.y, 20)
	}
}