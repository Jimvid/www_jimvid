<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import Icon from './Icon.svelte';
	import HamburgerMenu from './HamburgerMenu.svelte';
</script>

<div class="border-b border-t border-accent">
	<AppBar
		class="max-w-content m-auto border-accent"
		background="transparent"
		padding="pt-0 pb-0"
		gridColumns="grid-cols-[0rem_minmax(0,_1fr)_0rem]"
		slotDefault="col-start-2 col-end-3 flex justify-between items-center border-x border-accent"
	>
		<div class="ml-4">
			<a class="hidden sm:inline" href="/">
				<Icon icon="logo" size="md" />
			</a>
			<HamburgerMenu style="sm:hidden" />
		</div>
		<div class="flex sm:border-l border-accent items-center">
			<div class="hidden sm:flex px-8 gap-4 font-semibold p-4">
				<a class="items-center content-center flex" href="/blog">Blog</a>
				<a class="items-center content-center flex" href="/snippets">Snippets</a>
				<a class="items-center content-center flex" href="/projects">Projects</a>
			</div>
			<div class="sm:border-l sm:border-accent p-4">
				<LightSwitch
					fillLight="fill-surface-500"
					fillDark="fill-surface-500"
					bgDark="surface-500"
					bgLight="bg-surface-50"
					ring="ring-[2px] ring-accent"
				/>
			</div>
		</div>
	</AppBar>
</div>
