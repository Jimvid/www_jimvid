<script>
	import Icon from './Icon.svelte';
</script>

<div
	class="grid grid-cols-[1rem_minmax(0,_1fr)_1rem] text-surface-500 dark:text-surface-50 max-w-content m-auto"
>
	<div
		class="w-full px-12 py-8 col-start-2 col-end-3 font-semibold m-auto flex flex-col justify-center text-center sm:flex-row sm:justify-between border-x border-accent"
	>
		<p class="mb-2 sm:mb-0">© 2023 Victor Jimvid</p>
		<div class="flex gap-3 justify-center">
			<a href="https://github.com/jimvid" target="_blank" rel="noopener">
				<Icon icon="github" />
			</a>
			<a href="mailto:victor@jimvid.com">
				<Icon icon="mail" />
			</a>
		</div>
	</div>
</div>
