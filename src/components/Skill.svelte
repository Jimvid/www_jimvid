<script lang="ts">
	import Title from './Title.svelte';
	import Icon from './Icon.svelte';
	// This should not be duplicated, fix this later
	type IconType =
		| 'github'
		| 'linkedin'
		| 'mail'
		| 'logo'
		| 'arrow'
		| 'html'
		| 'uiux'
		| 'backend'
		| 'js';
	export let icon: IconType;
	export let title: string;
	export let color = 'bg-primary-500';
	export let href: string;
</script>

<a {href} class="flex items-center h-full relative group">
	<div
		class="absolute w-2 z-0 transition-all group-hover:w-full {color} h-full border-r border-accent"
	/>
	<div class="p-6 relative z-0 flex items-center gap-4">
		<Icon {icon} size="lg" />
		<div>
			<Title size="xs" heading="h3">
				{title}
			</Title>
			<div class="text-sm lg:text-md">
				<slot name="description" />
			</div>
		</div>
	</div>
</a>
