class Npc {
	constructor() {
		//propiedades
		this.RADIUS = 25

		// estados
		this.state = NpcState.HOME
		this.nextState = null
		this.isSelected = false

		// steering behaviours
		this.MAX_SPEED = 0.2
		this.MAX_STEER = 0.1
		this.ARRIVE_RADIUS = 50
		this.SEPARATE_RADIUS = 30

		// físicas
		this.position = createVector(500, 500)
		this.velocity = createVector(0, 0)
	}

	draw() {
		switch (this.state) {
			case NpcState.HOME: {
				this.MAX_SPEED = 0.2
				this.MAX_STEER = 0.5
				let desiredHome = SteeringBehaviours.arrive(this, Global.homeBase.position, this.ARRIVE_RADIUS, 9999999)
				let desiredSeparate = SteeringBehaviours.separate(this, Global.npcs, this.SEPARATE_RADIUS)
				let totalDesired = desiredHome.add(desiredSeparate)

				let steer = totalDesired.sub(this.velocity).limit(this.MAX_STEER)
				this.velocity.add(steer)
				this.position.add(this.velocity)

				if (this.nextState != null) {
					this.state = this.nextState
					this.nextState = null
				}

				this.drawCircle()
				this.drawSelected()
				break
			}

			case NpcState.GOLD_GO: {
				this.MAX_SPEED = 2
				this.MAX_STEER = 0.5
				let desiredHome = SteeringBehaviours.arrive(this, Global.gold.position, this.ARRIVE_RADIUS, 9999999)
				let desiredSeparate = SteeringBehaviours.separate(this, Global.npcs, this.SEPARATE_RADIUS)
				let totalDesired = desiredHome.add(desiredSeparate)

				let steer = totalDesired.sub(this.velocity).limit(this.MAX_STEER)
				this.velocity.add(steer)
				this.position.add(this.velocity)

				if (this.position.copy().sub(Global.gold.position).mag() < 40) {
					this.state = NpcState.GOLD_RETURN
				}

				this.drawCircle()
				this.drawSelected()

				break
			}

			case NpcState.GOLD_RETURN: {
				this.MAX_SPEED = 2
				this.MAX_STEER = 0.5
				let desiredHome = SteeringBehaviours.arrive(this, Global.homeBase.position, 150, 9999999)
				let desiredSeparate = SteeringBehaviours.separate(this, Global.npcs, this.SEPARATE_RADIUS)
				let totalDesired = desiredHome.add(desiredSeparate)

				let steer = totalDesired.sub(this.velocity).limit(this.MAX_STEER)
				this.velocity.add(steer)
				this.position.add(this.velocity)

				if (this.position.copy().sub(Global.homeBase.position).mag() < 40) {
					Global.goldAmount++
					if (this.nextState != null) {
						this.state = this.nextState
						this.nextState = null
					} else {
						this.state = NpcState.GOLD_GO
					}
				}

				this.drawCircle()
				this.drawSelected()

				noStroke()
				fill('gold')
				circle(this.position.x, this.position.y, this.RADIUS / 3)

				break
			}
		}
	}

	drawCircle() {
		noStroke()
		fill('black')
		circle(this.position.x, this.position.y, this.RADIUS)
	}

	drawSelected() {
		{
			if (this.isSelected) {
				stroke('blue')
				strokeWeight(3)
				circle(this.position.x, this.position.y, this.RADIUS)
			}
		}
	}

	setNextState(state) {
		if (this.isSelected) {
			this.nextState = state
		}

		this.isSelected = false
	}

	onMouseClicked() {
		if (dist(this.position.x, this.position.y, mouseX, mouseY) < this.RADIUS / 2) {
			this.isSelected = !this.isSelected
		}
	}
}

class NpcState {}
NpcState.HOME_SELECTED = 0
NpcState.GOLD_GO = 1
NpcState.GOLD_RETURN = 2
