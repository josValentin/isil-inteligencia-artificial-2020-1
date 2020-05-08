class Slider {
	constructor() {
		// punto inicial y punto final
		this.pi = new p5.Vector(100, 300)
		this.pf = new p5.Vector(500, 300)
		this.isDead = false

		// posición
		this.position = new p5.Vector()

		// lerping
		this.t = 0.5
		this.dt = 0.008
	}

	draw() {
		// se calcula el lerp entre el punto inicial y el final
		this.position = p5.Vector.lerp(this.pi, this.pf, this.t)
		
		// calcula movimiento del npc
		if (keyIsPressed && keyCode == LEFT_ARROW) {
			this.t -= this.dt
		}

		if (keyIsPressed && keyCode == RIGHT_ARROW) {
			this.t += this.dt
		}

		this.t = constrain(this.t, 0, 1)

		// dibujar
		let color = map(this.t, 0, 1, 0, 255)
		background(color)

		stroke('darkblue')
		strokeWeight(10)
		line(100, 300, 500, 300)

		noStroke()
		fill('red')
		circle(this.position.x, this.position.y, 30)
	}
}
