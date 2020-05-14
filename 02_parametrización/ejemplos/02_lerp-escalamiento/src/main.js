/**
 * Lerp tamaño
 */

let valueI = 0
let valueF = 100
let t = 0

function setup() {
	createCanvas(600, 600)
}

function draw() {
	background('white')

	let value = lerp(valueI, valueF, t)
	noStroke()
	fill('red')
	circle(300, 300, value)

	t += 0.01
	if (t > 1) {
		t = 1
		console.log('terminó la animación')
	}
}