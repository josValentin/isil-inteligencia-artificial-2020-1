class Shield {
	constructor() {
		this.t = 0
		this.dt = 0.02
		this.radius = 0
		this.MAX_RADIUS = 120
		this.MIN_RADIUS = 5

		this.STATE_INIT = 0
		this.STATE_APPEARING = 1
		this.STATE_DISAPPEARING = 2
		this.STATE_COMPLETE = 3
		this.state = this.STATE_INIT
	}

	draw() {
		switch (this.state) {
			case this.STATE_INIT: {
				fill('rgba(255, 200, 0, 1)')
				noStroke()
				circle(Global.player.position.x, Global.player.position.y, 15)
				break
			}

			case this.STATE_APPEARING: {
				this.radius = lerp(this.MIN_RADIUS, this.MAX_RADIUS, this.elastic(this.t))
				this.t += this.dt

				if (this.t > 1) {
					this.t = 0
					this.state = this.STATE_COMPLETE
				}

				fill('rgba(255, 255, 0, 0.25)')
				stroke('rgba(255, 200, 0, 1)')
				strokeWeight(5)
				circle(Global.player.position.x, Global.player.position.y, this.radius)
				break
			}

			case this.STATE_DISAPPEARING: {
				this.radius = lerp(this.MAX_RADIUS, this.MIN_RADIUS, this.easeInBack(this.t))
				this.t += 4 * this.dt

				if (this.t > 1) {
					this.t = 0
					this.state = this.STATE_INIT
				}

				fill('rgba(255, 255, 0, 0.25)')
				stroke('rgba(255, 200, 0, 1)')
				strokeWeight(5)
				circle(Global.player.position.x, Global.player.position.y, this.radius)
				break
			}

			case this.STATE_COMPLETE: {
				fill('rgba(255, 255, 0, 0.25)')
				stroke('rgba(255, 200, 0, 1)')
				strokeWeight(5)
				circle(Global.player.position.x, Global.player.position.y, this.MAX_RADIUS)
				break
			}
		}
	}

	onKeyPressed() {
		if ((keyCode = 32)) {
			if (this.state == this.STATE_INIT || this.state == this.STATE_DISAPPEARING) {
				this.state = this.STATE_APPEARING
			} else if (this.state == this.STATE_COMPLETE || this.state == this.STATE_APPEARING) {
				this.state = this.STATE_DISAPPEARING
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
