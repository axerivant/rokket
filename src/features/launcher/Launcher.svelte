<script lang="ts">
	// log confirming successful initialization
	console.log('ROKKET: LAUNCHER LOADED SUCCESSFULLY')

	// import tailwind css
	import '../../tailwind.css'
	// internals
	import { onEscapePress, onShortcutPress } from './keypress'
	import actions from './actions'
	import ActionList from '../../lib/action-list'

	// launcher state and handlers
	let isShowingLauncher = false
	const stopShowingLauncher = () => {
		isShowingLauncher = false
	}
	const toggleShowingLauncher = () => {
		isShowingLauncher = !isShowingLauncher
	}

	onShortcutPress(toggleShowingLauncher)
	onEscapePress(stopShowingLauncher)
</script>

<!-- svelte-ignore a11y-click-events-have-key-events /-->
{#if isShowingLauncher}
	<div
		id="launcher"
		on:click={stopShowingLauncher}
		class="fixed w-screen h-screen bg-black/40 top-0 left-0 z-[999999] flex justify-center items-center"
	>
		<ActionList {actions} />
	</div>
{/if}

<style global>
	@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
	* {
		font-family: Barlow, -apple-system, BlinkMacSystemFont, 'Segoe UI',
			Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
			sans-serif;
	}
	#launcher {
	}
</style>
