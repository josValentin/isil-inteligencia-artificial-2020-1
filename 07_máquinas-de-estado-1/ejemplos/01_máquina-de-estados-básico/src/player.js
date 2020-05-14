class Player {
	constructor() {
		// constantes
		this.ATTACK_RANGE = 100
		this.MAX_SIZE = 50

		// estados
		this.STATE_IDLE = 0
		this.STATE_ATTACK = 1
		this.STATE_DYING = 2
		this.STATE_DEAD = 4
		this.STATE_APPEARING = 3
		this.state = this.STATE_APPEARING

		// pooling
		this.isDead = false

		// timer
		this.timer = 0
		this.LIFE_TIME = 3

		// lerping appear
		this.tAppear = 0
		this.dtAppear = 0.02
		this.size = 0

		// lerping dying
		this.tDying = 0
		this.dtDying = 0.03
		this.size = 0
	}

	draw() {
		if (this.isDead) return

		switch (this.state) {
			case this.STATE_IDLE: {
				// acción
				noStroke()
				fill('red')
				circle(300, 300, this.MAX_SIZE)

				// condiciones
				if (dist(300, 300, mouseX, mouseY) < this.ATTACK_RANGE) {
					this.state = this.STATE_ATTACK
				}

				this.timer += deltaTime / 1000
				if (this.timer > this.LIFE_TIME) {
					this.timer = 0
					this.state = this.STATE_DYING
				}

				break
			}

			case this.STATE_ATTACK: {
				// acción
				strokeWeight(10)
				stroke('yellow')
				fill('red')
				circle(300, 300, this.MAX_SIZE)

				// condiciones
				if (dist(300, 300, mouseX, mouseY) >= this.ATTACK_RANGE) {
					this.state = this.STATE_IDLE
				}

				this.timer += deltaTime / 1000
				if (this.timer > this.LIFE_TIME) {
					this.timer = 0
					this.state = this.STATE_DYING
				}

				break
			}

			case this.STATE_DYING: {
				// animacion
				this.size = lerp(this.MAX_SIZE, 0, this.easeInBack(this.tDying))
				this.tDying += this.dtDying

				if (this.tDying > 1) {
					this.state = this.STATE_DEAD
				}

				noStroke()
				fill('red')
				circle(300, 300, this.size)

				break
			}

			case this.STATE_DEAD: {
				this.isDead = true
				console.log('me morí')
				break
			}

			case this.STATE_APPEARING: {
				this.size = lerp(0, this.MAX_SIZE, this.elastic(this.tAppear))
				this.tAppear += this.dtAppear

				noStroke()
				fill('red')
				circle(300, 300, this.size)

				if (this.tAppear > 1) {
					this.state = this.STATE_IDLE
				}

				break
			}
		}
	}

	elastic(t) {
		if (t == 0) return 0
		if (t == 1) return 1
		return pow(2, -10 * t) * sin((10 * t - 0.75) * 0.666666 * PI) + 1
	}

	easeInBack(t) {
		return 2.70158 * pow(t, 3) - 1.70158 * pow(t, 2)
	}
}
