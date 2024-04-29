<script lang="ts">
	import ModeToggle from './ModeToggle.svelte';
</script>

<nav
	class="sticky left-0 right-0 top-0 m-auto flex w-screen items-center justify-between bg-gray-100 p-4 text-lg dark:bg-zinc-900"
>
	<div class="flex items-center">
		<a href="/">Riley Spires</a>
	</div>
	<div class="row ml-0 flex items-center justify-around gap-4">
		<a href="/intro">Intro</a>
		<a href="/growth">Growth</a>
		<a href="/donts">Do(n't)s</a>
		<a href="/conclusion">Conclusion</a>
		<ModeToggle />
	</div>
</nav>
