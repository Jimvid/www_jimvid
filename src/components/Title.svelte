<script lang="ts">
	type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

	export let size: Size = 'xl';
	export let heading: Heading = 'h1';
	export let style = '';

	const sizes = {
		xs: 'text-xl lg:text-2xl',
		sm: 'text-2xl lg:text-3xl',
		md: 'text-2xl md:text-3xl lg:text-4xl',
		lg: 'text-3xl md:text-4xl lg:text-5xl',
		xl: 'text-4xl md:text-5xl lg:text-6xl '
	};
</script>

{#if heading === 'h1'}
	<h1 class="font-bold {sizes[size]} {style}"><slot /></h1>
{:else if heading === 'h2'}
	<h2 class=" font-bold {sizes[size]} {style}">
		<slot />
	</h2>
{:else if heading === 'h3'}
	<h3 class=" font-semibold {sizes[size]} {style}">
		<slot />
	</h3>
{:else if heading === 'h4'}
	<h4 class="font-semibold {sizes[size]} {style}">
		<slot />
	</h4>
{:else if heading === 'h5'}
	<h5 class="font-bold {sizes[size]} {style}">
		<slot />
	</h5>
{/if}
