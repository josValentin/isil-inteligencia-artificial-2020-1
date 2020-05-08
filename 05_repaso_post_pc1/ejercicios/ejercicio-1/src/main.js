function setup() {
    createCanvas(600, 600)
    Global.game = new Game()
}

function draw() {
    background('white')
    Global.game.draw()
}
