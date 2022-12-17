<script lang="ts">
	console.log('ROKKET: LAUNCHER LOADED SUCCESSFULLY')

	// import tailwind css
	import '../../tailwind.css'
	// internals
	import { onEscapePress, onShortcutPress } from './keypress'

	let isShowingLauncher = false
	onShortcutPress(() => {
		isShowingLauncher = !isShowingLauncher
	})
	onEscapePress(() => {
		isShowingLauncher = false
	})
</script>

{#if isShowingLauncher}
	<div
		class="fixed w-screen h-screen bg-black/40 top-0 left-0 z-[990] flex justify-center items-center"
	>
		<div class="w-96 h-12 bg-700 mb-96 rounded shadow-xl">LAUNCHCHCH</div>
	</div>
{/if}
