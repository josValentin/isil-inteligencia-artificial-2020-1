class Game {
	constructor() {
		for (let i = 0; i < 5; i++) {
			let npc = new Npc(random(200, 400), random(200, 400))
			Global.npcs.push(npc)
		}
	}

	draw() {
		Global.npcs.forEach((npc) => {
			npc.draw()
		})
	}
}
