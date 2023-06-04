<script lang="ts">
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<div class="app bg-surface-500 text-tertiary-500 font-medium min-h-screen">
	<AppShell
		class="row-span-2"
		slotPageContent="max-w-content w-full grid grid-cols-[1rem_minmax(0,_1fr)_1rem] m-auto "
		slotFooter="border-y border-tertiary-500 bg-tertiary-500"
	>
		<svelte:fragment slot="header">
			<Header />
		</svelte:fragment>
		<div id="test" class="col-start-2 col-end-3 border-x border-tertiary-500">
			<slot />
		</div>
		<svelte:fragment slot="footer">
			<Footer />
		</svelte:fragment>
	</AppShell>
</div>

<style>
</style>
