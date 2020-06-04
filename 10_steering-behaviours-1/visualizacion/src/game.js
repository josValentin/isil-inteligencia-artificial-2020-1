class Game {
	constructor() {
		this.npc = new Npc()
	}

	draw() {
		noStroke()
		fill('green')
		circle(mouseX, mouseY, 15)
		this.npc.draw()

		textAlign(LEFT, TOP)
		noStroke()
		fill('#666')
		text('AGENT: Objeto que se mueve', 15, 15)
		fill('green')
		text('TARGET: Objetivo', 15, 30)
		fill('red')
		text('DESIRED: Velocidad a la que debería moverse el agente', 15, 45)
		fill('blue')
		text('VELOCITY: Velocidad a la que realmente se mueve', 15, 60)
		fill('yellow')
		text('STEER: Vector de cambio de DESIRED a VELOCITY', 15, 75)
	}
}