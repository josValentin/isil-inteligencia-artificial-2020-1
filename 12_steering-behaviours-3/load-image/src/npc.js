class Npc {
	constructor() {
		this.position = new p5.Vector()
	}

	draw() {
		this.position = createVector(mouseX, mouseY)
		noStroke()
		fill('green')
		// circle(this.position.x, this.position.y, 50)
		imageMode(CENTER)
		image(npcImg, this.position.x, this.position.y)
		// image(npcImg, this.position.x - npcImg.width / 2, this.position.y - npcImg.height / 2)
	}
}
