<script>
	import Icon from './Icon.svelte';
</script>

<div class="grid grid-cols-[1rem_minmax(0,_1fr)_1rem] text-white max-w-content m-auto">
	<div
		class="w-full px-12 py-8 col-start-2 col-end-3 font-semibold m-auto flex flex-col justify-center text-center sm:flex-row sm:justify-between border-x border-black"
	>
		<p class="mb-2 sm:mb-0">© 2023 Victor Jimvid</p>
		<div class="flex gap-3 justify-center">
			<Icon icon="mail" color="white" />
			<Icon icon="linkedin" color="white" />
			<Icon icon="github" color="white" />
		</div>
	</div>
</div>
