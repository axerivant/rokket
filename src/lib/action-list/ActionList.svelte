<script lang="ts">
	import { onDestroy } from 'svelte'
	import Action from './Action.svelte'

	export let actions: ActionSrc = []

	// index refers to the currently focused action
	let currentIndex = 0

	const selectPreviousAction = () => {
		currentIndex - 1 >= 0 && currentIndex--
	}
	const selectNextAction = () => {
		currentIndex + 1 < actions.length && currentIndex++
	}
	window.addEventListener('keydown', (ev: KeyboardEvent) => {
		const key = ev.key
		if (key === 'ArrowUp') {
			selectPreviousAction()
			ev.preventDefault()
		}
		if (key === 'ArrowDown') {
			selectNextAction()
			ev.preventDefault()
		}
	})
</script>

<!-- svelte-ignore a11y-click-events-have-key-events /-->
<div
	on:click|stopPropagation
	class="w-96 bg-700 mb-96 rounded shadow-xl p-3 flex flex-col gap-1"
>
	{#each actions as { name, handler }, i}
		<Action {name} {handler} isSelected={currentIndex === i} />
	{/each}
</div>
