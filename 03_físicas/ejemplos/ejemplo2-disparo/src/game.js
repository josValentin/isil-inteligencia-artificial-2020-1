class Game {
	constructor() {
		this.bullets = []
		this.origin = new p5.Vector(300, 300)
		this.mousePosition = new p5.Vector()
	}

	draw() {
		// dibuja punto central
		fill('black')
		circle(300, 300, 20)

		// recorrido de los bullets
		this.bullets.forEach((bullet, i) => {
			bullet.draw()
			if (bullet.isDead) {
				this.bullets.splice(i, 1)
			}
		})
	}

	shoot() {
		this.mousePosition = new p5.Vector(mouseX, mouseY)
		let velocity = this.mousePosition.copy().sub(this.origin).setMag(10)
		this.bullets.push(new Bullet(this.origin, velocity))
	}
}
