class Npc {
	constructor() {
		// punto inicial y punto final
		this.pi = this.getRandomPoint()
		this.pf = this.getRandomPoint()
		
		// presentes en todo movimiendo usando físicas
		this.position = this.pi.copy()
		this.velocity = new p5.Vector()
		this.speed = 3
	}

	draw() {
		/**
		 *              |-- vector unitario --|
		 *  velocidad = (pf - pi).normalizado() * rapidez
		 */
		this.velocity = p5.Vector.sub(this.pf, this.pi).normalize().mult(this.speed)
		this.position.add(this.velocity)

		/**
		 * si la distancia es menor a la velocidad
		 * porque si fuera mayor o igual, quedaría 
		 * un paso más por dar para estar más cerca
		 */
		if (dist(this.position.x, this.position.y, this.pf.x, this.pf.y) < this.speed) {
			this.pi = this.pf.copy()
			this.pf = this.getRandomPoint()
		}

		/**
		 * dibuja
		 */
		noStroke()
		fill('black')
		circle(this.pf.x, this.pf.y, 20)
		fill('red')
		circle(this.position.x, this.position.y, 30)
	}

	/**
	 * obtener punto aleatorio
	 */
	getRandomPoint() {
		let x = random(600)
		let y = random(600)
		return new p5.Vector(x, y)
	}
}
