class Tarea1 {
	constructor() {
		this.x = 50
		this.SPEED = 12
		this.speed = this.SPEED
		this.r = 50
	}

	draw() {
		background('white')
		noStroke()
		fill('green')
		circle(this.x, 300, 2 * this.r)

		this.x += this.speed

		if (this.x > 600 - this.r && this.speed > 0) {
			this.x = 600 - this.r
			this.speed = -this.SPEED
		}

		if (this.x < this.r && this.speed < 0) {
			this.x = this.r
			this.speed = this.SPEED
		}
	}
}

class Tarea2 {
	constructor() {
		this.separation = 50
	}

	draw() {
		background('yellow')
		for (let i = 10; i > 0; i--) {
			noStroke()
			if (i % 2 == 0) {
				fill('black')
			} else {
				fill('white')
			}
			circle(300, 300, (i - 0.5) * this.separation)
		}

		fill('black')
		circle(50, 50, 30)
		circle(550, 50, 30)
		circle(550, 550, 30)
		circle(50, 550, 30)
	}
}

class Tarea3 {
	constructor() {
		this.x = -20
		this.hue = random(255)
	}

	draw() {
		background(this.hue, 255, 200)
		noStroke()
		colorMode(HSB)
		rect(0, this.x, 600, 20)
		rect(0, this.x - 15, 600, 3)
		rect(0, this.x + 33, 600, 3)

		this.x += 5
		if (this.x > 620) {
			this.hue = random(255)
			this.x = -20
		}
	}
}
