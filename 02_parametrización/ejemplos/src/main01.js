/**
 * Lerp x
 */

let valueI = 100
let valueF = 400
let value = 100
let t = 0

function setup() {
	createCanvas(600, 600)
}

function draw() {
	background('white')

	value = lerp(valueI, valueF, t)
	noStroke()
	fill('red')
	circle(value, 300, 50)

	t += 0.01
	if (t > 1) t = 1
}