export function getSubheading(numberOffTasks) {
	switch (true) {
		case numberOffTasks > 4:
			return `${numberOffTasks} zadań`;
		case numberOffTasks > 1:
			return `${numberOffTasks} zadania`;
		case numberOffTasks === 1:
			return `${numberOffTasks} zadanie`;
		case numberOffTasks === 0:
		default:
			return "Brak zadań";
	}
}
