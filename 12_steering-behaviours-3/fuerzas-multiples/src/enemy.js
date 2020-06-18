class Enemy {
	constructor() {
		Global.enemy = this
		this.EVADE_RADIUS = 100
		this.position = createVector(300, 300)
	}

	draw() {
		noStroke()
		fill('red')
		circle(this.position.x, this.position.y, 50)
		noFill()
		stroke('green')
		circle(this.position.x, this.position.y, this.EVADE_RADIUS)
	}
}