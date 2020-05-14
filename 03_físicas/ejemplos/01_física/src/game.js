class Game {
	constructor() {
		this.bullets = []
	}

	draw() {
		this.bullets.forEach((bullet, i) => {
			bullet.draw()
			if (bullet.isDead) {
				this.bullets.splice(i, 1)
			}
		})

		// for (let i = 0; i < this.bullets.length; i++) {
		// 	this.bullets[i].draw()
		// 	if (this.bullets[i].isDead) {
		// 		this.bullets.splice(i, 1)
		// 	}
		// }
	}

	shoot() {
		this.bullets.push(new Bullet())
	}
}
