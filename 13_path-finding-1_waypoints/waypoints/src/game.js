class Game {
	constructor() {
		this.npc = new Npc()
	}

	draw() {
		this.drawPaths()
		this.drawPoints()
		this.npc.draw()
	}

	drawPoints() {
		for (let i = 0; i < Global.points.length; i++) {
			let point = Global.points[i]
			stroke('black')
			fill('white')
			circle(point.x, point.y, 30)

			noStroke()
			fill('black')
			textSize(20)
			textAlign(CENTER, CENTER)
			text(i, point.x, point.y)
		}
	}

	drawPaths() {
		for (let i = 0; i < Global.points.length; i++) {
			for (let j = 0; j < Global.points.length; j++) {
				if (Global.map[i][j] == 1) {
					let pi = Global.points[i]
					let pj = Global.points[j]
					stroke('black')
					line(pi.x, pi.y, pj.x, pj.y)
				}
			}
		}
	}
}
