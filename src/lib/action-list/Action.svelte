<script lang="ts">
	export let name: string
	export let handler: Function
	export let isSelected: boolean

	let btnRef: HTMLButtonElement
	$: isSelected && btnRef && btnRef.focus()
</script>

<button
	on:click={() => handler()}
	bind:this={btnRef}
	class="w-full p-1 text-200 px-2 rounded bg-700 hover:bg-600 focus:bg-600 outline-none cursor-pointer transition-all flex justify-start"
>
	{name}
</button>
