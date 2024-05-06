<script lang="ts">
	import { Button } from "$lib/components/ui/button"; 
	import { scale, slide, blur } from "svelte/transition";

    export let data;
    const { dos, donts, dosCount, dontsCount } = data;

    $: totalWordCount = dosCount + dontsCount;

    let dosCountText = "Reveal word count";
    let dontsCountText = "Reveal word count";
    let totalCountText = "Reveal word count";

    const revealDosCount = () => {
        dosCountText = `${dosCount} words`;
    }

    const revealDontsCount = () => {
        dontsCountText = `${dontsCount} words`;
    }

    const revealTotalCount = () => {
        totalCountText = `${totalWordCount} words`;
    }
</script>

<main class="flex flex-col items-center m-4 h-screen">
	<h1 class="text-3xl font-bold m-4 mb-2">
		Do(n't)s
	</h1>

	<div class="flex flex-row items-center justify-center text-center max-w-[35%]">
        <div>
            <h2 class="text-xl font-semibold m-4">Dos:</h2>
            <ul class="flex flex-col align-items-center justify-center list-disc mb-8">
                {#each dos as line (line)}
                    <li class="text-md text-center">{line}</li>
                {/each}
            </ul>
            <Button variant="outline" on:click={revealDosCount}>
                {#key dosCountText}
                    <p class="" in:scale={{}}>
                        {dosCountText}
                    </p>
                {/key}
            </Button>

            <h2 class="text-xl font-semibold m-4 mt-24">Don'ts:</h2>
            <ul class="flex flex-col align-items-center justify-center list-disc mb-8">
                {#each donts as line (line)}
                    <li class="text-md text-center">{line}</li>
                {/each}
            </ul>
            <Button variant="outline" on:click={revealDontsCount}>
                {#key dontsCountText}
                    <p class="" in:slide={{axis:"x"}}>
                        {dontsCountText}
                    </p>
                {/key}
            </Button>
        </div>
        <div class="flex flex-col items-center justify-center text-center absolute right-64">
            <Button variant="outline" class="min-w-[152px]" on:click={revealTotalCount}>
                {#key totalCountText}
                    <p class="text-s" in:blur={{}}>{totalCountText}</p>
                {/key}
            </Button>
        </div>
	</div>
</main>