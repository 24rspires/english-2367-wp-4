<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { fade } from 'svelte/transition';

	export let data;

	let shownCount = 'Reveal word count';

	const { conclusion, wordCount } = data;

	const showWordCount = () => {
		shownCount = `${wordCount} words`;
	};
</script>

<main class="m-4 flex h-screen flex-col items-center">
	<h1 class="m-4 mb-16 text-3xl font-bold">Conclusion</h1>

	<div class="flex max-w-[35%] flex-col items-center text-center">
		{#each conclusion as line}
			<p class="text-md">{line}</p>
		{/each}
		<Button variant="outline" on:click={showWordCount} class="m-8">
			{#key shownCount}
				<p class="text-s" in:fade={{ duration: 500 }}>
					{shownCount}
				</p>
			{/key}
		</Button>
	</div>
</main>
