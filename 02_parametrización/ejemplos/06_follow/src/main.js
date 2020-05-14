/**
 * Lerp follow
 * follower = lerp(follower, target, 0.1)
 */

 let position

function setup() {
	createCanvas(600, 600)
	position = new p5.Vector(0, 0)
}

function draw() {
	background('white')
	
	let target = new p5.Vector(mouseX, mouseY - 50)
	position = p5.Vector.lerp(position, target, 0.1)

	noStroke()
	fill('red')
	circle(position.x, position.y, 20)
	fill('blue')
	circle(mouseX, mouseY, 50)
}