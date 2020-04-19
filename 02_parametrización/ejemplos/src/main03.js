/**
 * Lerp opacidad
 */

let valueI = 0
let valueF = 255
let t = 0

function setup() {
	createCanvas(600, 600)
}

function draw() {
	background('white')

	let value = lerp(valueI, valueF, t)
	noStroke()
	fill(0, 0, 0, value)
	rect(0, 0, 600, 600)

	t += 0.01
	if (t > 1) {
		t = 1
		console.log('terminó la animación')
	}
}