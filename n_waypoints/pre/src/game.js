class Game {
	constructor() {
		Global.path = []
		Global.path.push(new p5.Vector(100, 100))
		Global.path.push(new p5.Vector(500, 100))
		Global.path.push(new p5.Vector(500, 500))
		Global.path.push(new p5.Vector(100, 500))
		Global.path.push(new p5.Vector(300, 300))

		this.npc = new Npc()
	}

	draw() {
		this.drawPath()
		this.npc.draw()
	}

	drawPath() {
		// dibujar líneas
		for (let i = 0; i < Global.path.length - 1; i++) {
			let p1 = Global.path[i]
			let p2 = Global.path[i + 1]
			stroke(0)
			strokeWeight(3)
			line(p1.x, p1.y, p2.x, p2.y)
		}

		// dibujar puntos
		Global.path.forEach((point) => {
			fill('red')
			noStroke()
			circle(point.x, point.y, 20)
		})
	}
}
