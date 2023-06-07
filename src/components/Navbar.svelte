<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
	import Icon from './Icon.svelte';
</script>

<div class="border-b border-tertiary-500">
	<AppBar
		class="max-w-content m-auto"
		background="transparent"
		padding="pt-0 pb-0"
		gridColumns="grid-cols-[0rem_minmax(0,_1fr)_0rem]"
		slotDefault="col-start-2 col-end-3 flex justify-between items-center border-x border-tertiary-500"
	>
		<a class="ml-8" href="/">
			<Icon icon="logo" size="md" />
		</a>
		<div class="flex">
			<div class="flex px-8 border-l border-tertiary-500 gap-4 font-semibold">
				<a class="items-center content-center flex" href="/blog">Blog</a>
				<a class="items-center content-center flex" href="/snippets">Snippets</a>
				<a class="items-center content-center flex" href="/projects">Projects</a>
			</div>
			<div class="border-l border-tertiary-500 flex gap-4 p-6">
				<Icon icon="github" />
				<Icon icon="mail" />
			</div>
		</div>
	</AppBar>
</div>
