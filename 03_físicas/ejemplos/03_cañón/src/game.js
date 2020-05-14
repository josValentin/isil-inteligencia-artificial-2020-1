class Game {
	constructor() {
		this.bullets = []

		this.mousePosition = new p5.Vector()
		this.cannonHead = new p5.Vector()
		this.center = new p5.Vector(300, 300)
		this.cannonSize = 80
	}

	draw() {
		// dibujar cañón
		this.mousePosition = new p5.Vector(mouseX,mouseY)
		let difference = p5.Vector.sub(this.mousePosition, this.center).setMag(this.cannonSize)
		this.cannonHead = p5.Vector.add(this.center, difference)

		stroke('black')
		strokeWeight(10)
		line(300, 300, this.cannonHead.x, this.cannonHead.y)

		// dibujar balas
		this.bullets.forEach(bullet => {
			bullet.draw()
		})
	}

	shoot() {
		this.mousePosition = new p5.Vector(mouseX,mouseY)
		let direction = p5.Vector.sub(this.mousePosition, this.center).setMag(10)
		this.bullets.push(new Bullet(this.cannonHead, direction))
	}
}
