<script lang="ts">
	type Size = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
	export let size: Size = 'h1';
	export let style = '';
</script>

{#if size === 'h1'}
	<h1 class="text-6xl font-bold {style}"><slot /></h1>
{:else if size === 'h2'}
	<h2 class="text-5xl font-bold {style}">
		<slot />
	</h2>
{:else if size === 'h3'}
	<h3 class="text-xl {style}">
		<slot />
	</h3>
{:else if size === 'h4'}
	<h4 class={style}>
		<slot />
	</h4>
{:else if size === 'h5'}
	<h5 class={style}>
		<slot />
	</h5>
{/if}
