class Pathfinding {}

Pathfinding.dijkstra = function(graph, start, end) {
	if (start == end) {
		path = []
		path.push(start)
		return path
	}

	// Inicializa valores

	let N = graph.length

	distances = []
	procedences = []
	blacklist = []

	for (let i = 0; i < N; i++) {
		distances[i] = 9999999
		procedences[i] = -1
		blacklist[i] = false
	}

	distances[start] = 0

	// // Se repite esto N veces

	for (let count = 0; count < N - 1; count++) {
		let minIndex = minDistance(distances, blacklist)
		blacklist[minIndex] = true

		for (let neighborIndex = 0; neighborIndex < N; neighborIndex++) {
			if (!blacklist[neighborIndex] && graph[minIndex][neighborIndex] != 0 && distances[minIndex] + graph[minIndex][neighborIndex] < distances[neighborIndex]) {
				distances[neighborIndex] = distances[minIndex] + graph[minIndex][neighborIndex]
				procedences[neighborIndex] = minIndex
			}
		}
	}

	let path = []
	let pre = -1
	let current = end
	path.push(current)

	while (pre != start) {
		pre = procedences[current]
		path.push(pre)
		current = pre
	}

	path.reverse()
	return path

	function minDistance(distances, blacklist) {
		let min = 9999999
		let minIndex = 0

		for (let v = 0; v < blacklist.length; v++) {
			if (blacklist[v] == false && distances[v] <= min) {
				min = distances[v]
				minIndex = v
			}
		}

		return minIndex
	}
}
