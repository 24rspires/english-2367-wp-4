<script lang="ts">
	import { Button } from '$lib/components/ui/button';

	export let href: string;
</script>

<Button variant="outline" on:click={() => (window.location.href = href)}>
	<slot />
</Button>
