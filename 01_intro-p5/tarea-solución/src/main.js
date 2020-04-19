/**
 * Solución de la Tarea 1
 * 
 * Para visualizar cada tarea,
 * cambiar la llamada a:
 * 		tarea = new TareaX()
 * por el número correspondiente
 */

let tarea

function setup() {
	createCanvas(600, 600)

	// cambiar aquí:
	tarea = new Tarea1()
}

function draw() {
	tarea.draw()
}
