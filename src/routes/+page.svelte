<script lang="ts">
	import { Button } from "$lib/components/ui/button"; 
	import { fade } from "svelte/transition";

	export let data;

	let shownCount = "Reveal word count";

	const { intro, wordCount } = data;

	const showWordCount = () => {
		shownCount = `${wordCount} words`;
	};
</script>

<main class="flex flex-col items-center m-4 h-screen">
	<h1 class="text-3xl font-bold m-4 mb-2">
		Writing Project #4
	</h1>
	<h1 class="text-xl font-semibold m-4 mb-16">
		by Riley Spires
	</h1>

	<div class="flex flex-col items-center text-center max-w-[35%]">
		{#each intro as line}
			<p class="text-md">{line}</p>
		{/each}
		<Button variant="outline" on:click={showWordCount} class="m-8">
			{#key shownCount}
				<p class="text-s" in:fade={{duration: 500}}>
					{shownCount}
				</p>
			{/key}
		</Button>
	</div>
</main>