<script lang="ts">
	import { Button } from "$lib/components/ui/button"; 
	import { fly, slide, blur } from "svelte/transition";

	export let data;

	let writerCount = "Reveal word count";
    let editorCount = "Reveal word count";
    let totalCount = "Reveal word count";

    $: totalWordCount = writerWordCount + editorWordCount;

    const showWriterCount = () => {
        writerCount = `${writerWordCount} words`;
    };

    const showEditorCount = () => {
        editorCount = `${editorWordCount} words`;
    };

    const showTotalCount = () => {
        totalCount = `${totalWordCount} words`;
    };

	const { writerGrowths, editorGrowths, writerWordCount, editorWordCount } = data;
    
</script>

<main class="flex flex-col items-center m-4 h-screen">
    <h1 class="text-3xl font-bold m-4 mb-16">Growth</h1>


	<div class="flex flex-row items-center text-center max-w-[40%]">
        <div class="flex flex-col items-center m-0">
            <h2 class="text-xl font-semibold m-4">Growth as a Writer:</h2>
            {#each writerGrowths as line}
                <p class="text-md">{line}</p>
            {/each}
            <Button variant="outline" on:click={showWriterCount} class="m-8">
                {#key writerCount}
                    <p class="text-s" in:fly={{x: 500}}>
                        {writerCount}
                    </p>
                {/key}
            </Button>

            <h2 class="text-xl font-semibold m-4">Growth as an Editor:</h2>
            {#each editorGrowths as line}
                <p class="text-md">{line}</p>
            {/each}
            <Button variant="outline" on:click={showEditorCount} class="m-8">
                {#key editorCount}
                    <p class="text-s" in:slide={{}}>
                        {editorCount}
                    </p>
                {/key}
            </Button>
        </div>
        <div class="flex flex-col items-center m-0 absolute right-52">
            <Button variant="outline" class="min-w-[152px]" on:click={showTotalCount}>
                {#key totalCount}
                    <p class="text-s" in:blur={{}}>{totalCount}</p>
                {/key}
            </Button>
        </div>
	</div>
</main>