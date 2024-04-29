<script lang="ts">
	import ModeToggle from './ModeToggle.svelte';
	import { Button } from '$lib/components/ui/button';
	import NavBarButton from './NavBarButton.svelte';
</script>

<nav
	class="sticky left-0 right-0 top-0 m-auto flex w-screen items-center justify-between bg-gray-100 p-4 text-lg dark:bg-zinc-900/50"
>
	<div class="flex items-center">
		<NavBarButton href="/">Riley Spires</NavBarButton>
	</div>
	<div class="row ml-0 flex items-center justify-around gap-4">
		<NavBarButton href="/intro">Intro</NavBarButton>
		<NavBarButton href="/growth">Growth</NavBarButton>
		<NavBarButton href="/donts">Do(n't)s</NavBarButton>
		<NavBarButton href="/conclusion">Conclusion</NavBarButton>
		<ModeToggle />
	</div>
</nav>
