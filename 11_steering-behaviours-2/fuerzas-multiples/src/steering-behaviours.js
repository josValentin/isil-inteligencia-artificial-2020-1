class SteeringBehaviours {}

SteeringBehaviours.seek = function(agent, target, radius) {
	let distance = dist(agent.position.x, agent.position.y, target.x, target.y)
	let desired = createVector(0, 0)
	if (distance < radius) {
		desired = target.copy().sub(agent.position).normalize().mult(agent.MAX_SPEED)
	}
	return desired
}

SteeringBehaviours.flee = function(agent, target, radius) {
	let distance = agent.position.copy().sub(target).mag()
	let desired = createVector(0, 0)
	if (distance < radius) {
		desired = agent.position.copy().sub(target).normalize().mult(agent.MAX_SPEED)
	}
	return desired
}