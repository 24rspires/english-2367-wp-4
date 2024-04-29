<script lang="ts">
	import '../app.pcss';
	import NavBar from '$lib/components/NavBar.svelte';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
	import { ModeWatcher } from 'mode-watcher';
</script>

<ModeWatcher defaultMode="system" />

<NavBar />
<slot />
