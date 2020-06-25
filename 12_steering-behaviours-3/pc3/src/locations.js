class HomeBase {
	constructor() {
		this.position = createVector(500, 500)
	}

	draw() {
		noStroke()
		fill('#888')
		circle(this.position.x, this.position.y, 100)

		textAlign(CENTER, CENTER)
		textSize(15)
		fill('gold')
		text('GOLD: ' + Global.goldAmount,this.position.x, this.position.y)
	}

	onMouseClicked() {
		if (dist(this.position.x, this.position.y, mouseX, mouseY) < 50) {
			Global.npcs.forEach(npc => {
				npc.setNextState(NpcState.HOME)
			})
		}
	}
}

class Gold {
	constructor() {
		this.position = createVector(100, 100)
	}

	draw() {
		noStroke()
		fill('gold')
		circle(this.position.x, this.position.y, 100)
	}

	onMouseClicked() {
		if (dist(this.position.x, this.position.y, mouseX, mouseY) < 50) {
			Global.npcs.forEach(npc => {
				npc.setNextState(NpcState.GOLD_GO)
			})
		}
	}
}
