class Npc {
	constructor() {
		this.path = Pathfinding.dijkstra(Global.map, 6, 5)
		console.log(this.path)

		this.position = Global.points[this.path[0]]
		this.t = 0
		
		this.pointIndex = -1
		this.getNextPoint()
	}

	getNextPoint() {
		this.pointIndex++

		if (this.pointIndex == this.path.length - 1) {
			this.pointIndex = 0
			this.path.reverse()
		}

		this.pI = Global.points[this.path[this.pointIndex]]
		this.pF = Global.points[this.path[this.pointIndex + 1]]
	}

	draw() {
		this.position = p5.Vector.lerp(this.pI, this.pF, this.t)
		this.t += 0.03

		if (this.t > 1) {
			this.t = 0
			this.getNextPoint()
		}

		noStroke()
		fill('rgba(255, 0, 0, 0.6)')
		circle(this.position.x, this.position.y, 20)
	}
}
