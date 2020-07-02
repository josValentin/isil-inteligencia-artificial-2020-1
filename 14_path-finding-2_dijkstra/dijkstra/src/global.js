class Global {}

Global.points = [
	new p5.Vector(150, 100),
	new p5.Vector(100, 300),
	new p5.Vector(200, 200),
	new p5.Vector(350, 100),
	new p5.Vector(350, 300),
	new p5.Vector(500, 300),
	new p5.Vector(200, 350)
]

// matriz de adyacencia
Global.map = [
	[ 0, 1, 1, 0, 0, 0, 0 ],
	[ 1, 0, 1, 0, 0, 0, 1 ],
	[ 1, 1, 0, 1, 1, 0, 1 ],
	[ 0, 0, 1, 0, 1, 1, 0 ],
	[ 0, 0, 0, 1, 0, 1, 0 ],
	[ 0, 0, 0, 1, 1, 0, 0 ],
	[ 0, 1, 1, 0, 0, 0, 0 ]
]