class Npc {
	constructor(position) {
		this.position = position.copy()
		this.texts = [ '💀', '💔', '🙁', '🙂', '🤩' ]

		this.STATE_APPEARING = 0
		this.STATE_SHOWING_LIFE = 1
		this.STATE_MOVING = 2
		this.STATE_DYING = 3
		this.STATE_DEAD = 4
		this.state = this.STATE_APPEARING

		// appearing
		this.tAppearing = 0
		this.dtAppearing = 0.04
		this.size = 0
		this.MAX_SIZE = 50

		// show life
		this.life = 4
		this.timerShowingLife = 0
		this.SHOW_LIFE_DURATION = 1.2

		// moving
		this.pi = new p5.Vector()
		this.pf = new p5.Vector()
		this.tMoving = 0
		this.dtMoving = 0.1
		this.DISPLACEMENT_RADIUS = 35

		// dying
		this.tDying = 0
		this.dtDying = 0.1

		// pooling
		this.isDead = false
	}

	draw() {
		textSize(27)
		textStyle(BOLD)

		switch (this.state) {
			case this.STATE_APPEARING: {
				//! acción: lerp del tamaño (de 0 a MAX_SIZE)
				this.tAppearing += this.dtAppearing
				this.size = lerp(0, this.MAX_SIZE, this.tAppearing)

				//! condición: si termina el lerp...
				if (this.tAppearing > 1) {
					this.state = this.STATE_SHOWING_LIFE
				}

				//! dibujado
				noStroke()
				fill('#ccc')
				circle(this.position.x, this.position.y, this.size)

				break
			}

			case this.STATE_SHOWING_LIFE: {
				//! acción: dejar pasar el tiempo
				this.timerShowingLife += deltaTime / 1000

				//! condición: si termina el tiempo
				if (this.timerShowingLife > this.SHOW_LIFE_DURATION) {
					// prepara todo lo necesario antes de ir al movimiento:
					// - pi
					// - pf
					// - tMoving
					// - life
					this.pi = this.position.copy()
					let direction = new p5.Vector(random(-1, 1), random(-1, 1)).normalize(-1, 1)
					this.pf = this.pi.copy().add(direction.mult(this.DISPLACEMENT_RADIUS))
					this.tMoving = 0
					this.life--

					this.state = this.STATE_MOVING

					// si la vida es igual a cero corta todo y va al estado muriendo
					if (this.life == -1) {
						this.state = this.STATE_DYING
					}
				}

				//! dibujado
				// - círculo
				noStroke()
				if (this.life == 0 || this.life == -1) {
					fill('#000')
				} else {
					fill('#ccc')
				}
				circle(this.position.x, this.position.y, this.size)

				// - texto
				fill('#ccc')
				textAlign(CENTER, CENTER)
				if (this.life > -1) {
					text(this.texts[this.life], this.position.x, this.position.y)
				}

				break
			}

			case this.STATE_MOVING: {
				//! acción: hacer lerp del movimiento
				this.position = p5.Vector.lerp(this.pi, this.pf, this.tMoving)
				this.tMoving += this.dtMoving

				//! condición: si termina el lerp
				if (this.tMoving > 1) {
					// prepara todo lo necesario para ir al estado showing life: timerShowingLife
					this.timerShowingLife = 0
					this.state = this.STATE_SHOWING_LIFE
				}

				//! dibujado
				noStroke()
				fill('#ccc')
				if (this.life == 0) fill('#000')
				circle(this.position.x, this.position.y, this.size)

				fill('#ccc')
				textAlign(CENTER, CENTER)
				text(this.texts[this.life], this.position.x, this.position.y)

				break
			}

			case this.STATE_DYING: {
				//! acción: lerp del tamaño de MAX_SIZE a 0
				this.size = lerp(this.MAX_SIZE, 0, this.tDying)
				this.tDying += this.dtDying

				//! condición: si termina el lerp, ya puede declararse muerto
				if (this.tDying > 1) {
					this.state = this.STATE_DEAD
				}

				//! dibujado
				noStroke()
				fill('#000')
				circle(this.position.x, this.position.y, this.size)

				break
			}

			case this.STATE_DEAD: {
				//! acción: se declara muerto
				this.isDead = true
				break
			}
		}
	}
}
