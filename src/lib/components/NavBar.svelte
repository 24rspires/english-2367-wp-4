<script lang="ts">
	import ModeToggle from './ModeToggle.svelte';
	import NavBarButton from './NavBarButton.svelte';
</script>

<nav
	class="sticky left-0 right-0 top-0 m-auto flex w-screen items-center justify-between bg-gray-200 p-4 text-lg dark:bg-[#0d1018]" 
>
	<div class="flex items-center">
		<NavBarButton href="/">Riley Spires</NavBarButton>
	</div>
	<div class="row ml-0 flex items-center justify-around gap-4">
		<NavBarButton href="/growth">Growths</NavBarButton>
		<NavBarButton href="/donts">Do(n't)s</NavBarButton>
		<NavBarButton href="/experts">Experts</NavBarButton>
		<NavBarButton href="/conclusion">Conclusion</NavBarButton>
		<NavBarButton href="/workscited">Works Cited</NavBarButton>
		<NavBarButton href="/memo">Writer's Memo</NavBarButton>
		<ModeToggle />
	</div>
</nav>
