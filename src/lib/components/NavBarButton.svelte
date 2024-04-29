<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { page } from '$app/stores';

	export let href: string;
</script>

<Button variant="outline" class={$page.url.pathname === href ? "dark:text-purple-500 text-purple-800" : ""} on:click={() => (window.location.href = href)}>
	<slot />
</Button>
