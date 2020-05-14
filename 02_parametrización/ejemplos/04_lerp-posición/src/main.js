/**
 * Lerp posición
 * p5.Vector(x, y)
 * p5.Vector(x, y, z)
 */

let valueI
let valueF
let t = 0
let dt = 0.01

function setup() {
	createCanvas(600, 600)
	valueI = new p5.Vector(150, 150)
	valueF = new p5.Vector(450, 450)
}

function draw() {
	background('white')

	let value = p5.Vector.lerp(valueI, valueF, t)
	noStroke()
	fill('red')
	circle(value.x, value.y, 50)

	t += dt
	if (t > 1) {
		t = 1
	}
}