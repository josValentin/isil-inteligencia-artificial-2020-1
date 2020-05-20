class Player {
	constructor() {
		Global.player = this
		this.position = new p5.Vector()
		this.shield = new Shield()
		this.size = 50
	}

	draw() {
		let mousePosition = new p5.Vector(mouseX, mouseY)
		this.position = p5.Vector.lerp(this.position, mousePosition, 0.1)

		noStroke()
		fill('red')
		circle(this.position.x, this.position.y, this.size)

		this.shield.draw()
	}

	onKeyPressed() {
		this.shield.onKeyPressed()
	}
}
