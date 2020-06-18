class Sheep {
	constructor() {
		// steering behaviours
		this.MAX_SPEED = Global.SHEEP_SPEED
		this.MAX_STEER = Global.SHEEP_REACTION

		// constants
		this.MAX_SIZE = Global.SHEEP_SIZE

		this.position = createVector(300, 300)
		this.position.add(p5.Vector.random2D().mult(random(Global.OUTER_RADIUS / 2, Global.OUTER_RADIUS - 25)))
		this.velocity = createVector(0, 0)
		this.size = this.MAX_SIZE

		// states
		this.state = SheepState.APPEARING
		this.tAppearing = 0
		this.dtAppearing = 0.05
		this.tDisappearing = 0
		this.dtDisappearing = 0.1
	}

	draw() {
		switch (this.state) {
			case SheepState.APPEARING: {
				this.size = lerp(0, this.MAX_SIZE, this.tAppearing)

				// condiciones de salida
				this.tAppearing += this.dtAppearing
				if (this.tAppearing > 1) {
					this.tAppearing = 1
					this.state = SheepState.FLEEING
				}

				// dibujo
				noStroke()
				fill('red')
				circle(this.position.x, this.position.y, this.size)
				break
			}

			case SheepState.FLEEING: {
				// cálculo del vector deseado
				let mousePosition = createVector(mouseX, mouseY)
				let desired = this.position.copy().sub(mousePosition).normalize().mult(this.MAX_SPEED)

				// fórmulas para steer, velocity y position
				let steer = desired.sub(this.velocity).limit(this.MAX_STEER)
				this.velocity.add(steer)
				this.position.add(this.velocity)

				// condiciones de salida
				let ditance = dist(this.position.x, this.position.y, 300, 300)
				if (ditance < Global.INNER_RADIUS) this.state = SheepState.DISAPPEARING
				if (ditance > Global.OUTER_RADIUS) this.state = SheepState.LEAVING

				// dibujo
				noStroke()
				fill('red')
				circle(this.position.x, this.position.y, Global.SHEEP_SIZE)

				break
			}

			case SheepState.LEAVING: {
				this.position.add(this.velocity)

				// condiciones de salida
				if (this.position.x < -Global.SHEEP_SIZE || this.position.x > 600 - Global.SHEEP_SIZE || this.position.y < -Global.SHEEP_SIZE || this.position.y > 600 - Global.SHEEP_SIZE) {
					Global.game.onSheepLeave()
					Global.game.spawnNewSheep()
				}

				// dibujo
				noStroke()
				fill('red')
				circle(this.position.x, this.position.y, Global.SHEEP_SIZE)
				break
			}

			case SheepState.DISAPPEARING: {
				this.size = lerp(this.MAX_SIZE, 0, this.tDisappearing)

				let center = createVector(300, 300)
				let desired = center.sub(this.position).normalize().mult(1)
				let steer = desired.sub(this.velocity).limit(1)
				this.velocity.add(steer)
				this.position.add(this.velocity)

				// condiciones de salida
				this.tDisappearing += this.dtDisappearing
				if (this.tDisappearing > 1) {
					Global.game.onSheepEnter()
					Global.game.spawnNewSheep()
				}

				// dibujo
				noStroke()
				fill('red')
				circle(this.position.x, this.position.y, this.size)

				break
			}
		}
	}
}

class SheepState {}
SheepState.APPEARING = 0
SheepState.FLEEING = 1
SheepState.LEAVING = 3
SheepState.DISAPPEARING = 2
