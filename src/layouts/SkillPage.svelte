<script lang="ts">
	import Icon from 'components/Icon.svelte';
	export let next_url: string;
	export let next_label: string;
</script>

<section class="max-w-2xl m-auto p-4 mt-4 md:mt-8 flex flex-col items-start gap-8">
	<div>
		<slot name="title" />
	</div>
	<div class="text-lg md:text-xl">
		<slot name="description" />
	</div>
	<a
		class="flex-shrink-0 flex gap-2 items-center px-4 py-2 border-2 border-tertiary-500"
		href={next_url}>{next_label}<Icon icon="arrow" /></a
	>
</section>
