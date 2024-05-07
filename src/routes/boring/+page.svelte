<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import SvelteMarkdown from 'svelte-markdown';
	import { blur, scale } from 'svelte/transition';

	export let data;

	const { worksCited, memo } = data;

	const finalWordCount = '1,146';

	let finalDisplay = 'Reveal final word count';
	let sentenceDisplay = 'Reveal sentence count';

	const displayFinalCount = () => {
		finalDisplay = `${finalWordCount} words`;
	};

	const displaySentenceCount = () => {
		const sentenceCount = memo.join('').split(/\./).length;
		sentenceDisplay = `${sentenceCount} sentences`;
	};
</script>

<main class="flex items-center justify-center">
	<div class="flex flex-col items-center justify-center">
		<h2 class="m-4 font-bold">Writer's Memo</h2>

		<div class="blue w-[55%]">
			<span class="mr-8" />
			{#each memo as line}
				<SvelteMarkdown source={line} isInline={true} />
			{/each}
		</div>

		<Button variant="outline" class="m-6" on:click={displaySentenceCount}>
			{#key sentenceDisplay}
				<p in:blur={{}}>
					{sentenceDisplay}
				</p>
			{/key}
		</Button>

		<h2 class="mt-16 font-bold">Works Cited</h2>

		<ul class="blue flex list-disc flex-col items-center">
			<div class="">
				{#each worksCited as workCited}
					{#each workCited as line, i}
						<li class={i !== 0 ? 'list-none' : 'mt-8'}>
							{#if i > 0}
								<span class="mr-16" />
							{/if}
							<SvelteMarkdown source={line} isInline={true} />
						</li>
					{/each}
				{/each}
			</div>
		</ul>

		<Button variant="outline" class="my-8" on:click={displayFinalCount}>
			{#key finalDisplay}
				<p in:scale={{}}>
					{finalDisplay}
				</p>
			{/key}
		</Button>
	</div>
</main>
