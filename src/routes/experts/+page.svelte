<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import SvelteMarkdown from 'svelte-markdown';
	import { fade } from 'svelte/transition';

	export let data;

	const { quotes, wordCounts } = data;

	$: totalWordCount = wordCounts.reduce((x, y) => x + y);

	let countDisplay = 'Reveal Word Count';

	const displayCount = () => {
		countDisplay = `${totalWordCount} words`;
	};
</script>

<main class="m-4 flex h-screen flex-col items-center">
	<h1 class="m-4 mb-16 text-3xl font-bold">Expert's Opinions</h1>

	<div class="w-[65%]">
		<ol class="grid list-decimal grid-cols-2 gap-16">
			{#each quotes as quote}
				<li class="">
					<SvelteMarkdown source={quote} />
				</li>
			{/each}
		</ol>
	</div>

	<Button class="mt-8" variant="outline" on:click={displayCount}>
		{#key countDisplay}
			<p in:fade={{}}>
				{countDisplay}
			</p>
		{/key}
	</Button>
</main>
