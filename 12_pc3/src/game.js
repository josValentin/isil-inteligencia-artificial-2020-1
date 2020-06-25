class Game {
	constructor() {
		Global.homeBase = new HomeBase()
		Global.gold = new Gold()

		for (let i = 0; i < 3; i++) {
			let npc = new Npc()
			Global.npcs.push(npc)
		}
	}

	draw() {
		Global.homeBase.draw()
		Global.gold.draw()

		Global.npcs.forEach((npc) => {
			npc.draw()
		})
	}

	onMouseClicked() {
		Global.homeBase.onMouseClicked()
		Global.gold.onMouseClicked()
		Global.npcs.forEach((npc) => {
			npc.onMouseClicked()
		})
	}
}
