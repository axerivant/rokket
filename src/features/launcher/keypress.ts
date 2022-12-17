const onShortcutPress = (callback: Function) => {
	const shift = 'Shift'
	const control = 'Control'
	const slash = '/'

	const pressedKeys = new Set()

	window.addEventListener('keydown', (ev: KeyboardEvent) => {
		const key = ev.key

		if (key !== shift && key !== control && key !== slash) return

		pressedKeys.add(key)

		if (
			pressedKeys.has(shift) &&
			pressedKeys.has(control) &&
			pressedKeys.has(slash)
		) {
			callback()
		}
	})

	window.addEventListener('keyup', (ev: KeyboardEvent) => {
		const key = ev.key
		pressedKeys.delete(key)
	})
}

const onEscapePress = (callback: Function) => {
	const escape = 'Escape'

	window.addEventListener('keydown', (ev: KeyboardEvent) => {
		const key = ev.key
		if (key === escape) {
			callback()
		}
	})
}
export { onShortcutPress, onEscapePress }
