<script lang="ts">
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<div
	class="app bg-surface-50 text-bg-tertiary-500 dark:bg-surface-500 dark:text-tertiary-100 font-medium min-h-screen"
>
	<AppShell
		class="row-span-2"
		slotPageContent="max-w-content w-full grid grid-cols-[1rem_minmax(0,_1fr)_1rem] m-auto "
		slotFooter="border-y border-accent bg-tertiary-500"
	>
		<svelte:fragment slot="header">
			<Navbar />
		</svelte:fragment>
		<div id="page-content" class="col-start-2 col-end-3 border-x border-accent">
			<slot />
		</div>
		<svelte:fragment slot="footer">
			<Footer />
		</svelte:fragment>
	</AppShell>
</div>

<style>
	#page-content {
		min-height: calc(100vh - 158px);
	}
</style>
