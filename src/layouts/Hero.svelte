<script lang="ts">
	import Title from 'components/Title.svelte';
	export let title: string;
	export let styles = '';
</script>

<div class="px-4 py-10 md:px-8 md:py-14 border-b border-accent text-center {styles}">
	<Title style="mb-2">{title}</Title>
	<div class="text-md md:text-lg">
		<slot name="inner-content" />
	</div>
</div>
