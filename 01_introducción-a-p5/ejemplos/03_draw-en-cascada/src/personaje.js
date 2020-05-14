class Personaje {
  constructor() {

  }

  draw() {
    noStroke()
    fill('red')
    circle(mouseX, mouseY, 200)

    fill('white')
    circle(mouseX - 60, mouseY, 30)
    circle(mouseX + 60, mouseY, 30)
    
    fill('black')
    circle(mouseX - 60, mouseY, 10)
    circle(mouseX + 60, mouseY, 10)
  }
}