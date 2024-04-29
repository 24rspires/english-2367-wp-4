<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { page } from '$app/stores';

	export let href: string;
</script>

<Button variant="outline" class={$page.url.pathname === href ? "text-purple-500" : "text-white"} on:click={() => (window.location.href = href)}>
	<slot />
</Button>
