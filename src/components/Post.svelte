<script lang="ts">
	import { matchTagToColor } from '$lib/util';
	import Title from './Title.svelte';
	type Post = {
		title: string;
		description: string;
		date: string;
		path: string;
		tags: string[];
	};
	export let post: Post;
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'sm';
	export let heading: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' = 'h2';
	const { title, date, description, path, tags } = post;
</script>

<a
	class="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-3 p-4 md:p-8 bg-surface-500 text-tertiary-500 transition hover:bg-surface-300"
	href={path}
>
	<div>
		<Title {size} {heading}>
			{title}
		</Title>
		<p class="mb-2 opacity-80 text-sm">{date}</p>
		<ul class="flex gap-2">
			{#each tags as tag}
				<li class="{matchTagToColor(tag)} border border-tertiary-500 p-1 text-xs text-surface-500">
					<p>{tag}</p>
				</li>
			{/each}
		</ul>
	</div>
	<p class="text-md col-span-2">{description}</p>
</a>
