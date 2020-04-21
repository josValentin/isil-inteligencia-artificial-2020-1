let personaje

function setup() {
    createCanvas(600, 600)
    personaje = new Personaje()
}

function draw() {
    background('white')
    personaje.draw()
}
