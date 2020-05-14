class Npc {
	constructor() {
		// punto inicial y final
		this.pi = this.getRandomPoint()
		this.pf = this.getRandomPoint()

		// responsables de la física
		this.position = this.pi.copy()
		this.velocity = new p5.Vector()
		this.speed = 3
		
		// pooling
		this.counter = 0
		this.isDead = false
	}

	draw() {
		// se calcula la velocidad y se la aplica a la posición
		this.velocity = p5.Vector.sub(this.pf, this.pi).normalize().mult(this.speed)
		this.position.add(this.velocity)

		// llega a un punto final
		if (dist(this.position.x, this.position.y, this.pf.x, this.pf.y) < this.speed) {
			this.pi = this.pf.copy()
			this.pf = this.getRandomPoint()
			
			// pooling
			this.counter++
			if (this.counter == 3) {
				this.isDead = true
			}
		}

		// dibujar
		noStroke()
		fill('red')
		circle(this.position.x, this.position.y, 30)
	}

	// genera punto aleatorio
	getRandomPoint() {
		let x = random(600)
		let y = random(600)
		return new p5.Vector(x, y)
	}
}
