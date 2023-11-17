<script lang="ts">
	import { matchTagToColor } from '$lib/util';
	import Title from './Title.svelte';
	type Post = {
		title: string;
		description: string;
		date: string;
		slug: string;
		tags: string[];
	};
	export let post: Post;
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'sm';
	export let heading: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' = 'h2';
	const { title, date, description, slug, tags } = post;
</script>

<article>
	<a
		class="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-3 p-4 md:p-8 dark:bg-surface-500 dark:text-tertiary-100 transition hover:bg-surface-200 dark:hover:bg-accent"
		href={`/blog/${slug}`}
	>
		<div>
			<Title {size} {heading}>
				{title}
			</Title>
			<p class="mb-2 opacity-80 text-sm">{date}</p>
			<ul class="flex gap-2">
				{#each tags as tag}
					<li class="{matchTagToColor(tag)} border border-accent p-1 text-xs">
						<p>{tag}</p>
					</li>
				{/each}
			</ul>
		</div>
		<p class="text-md col-span-2">{description}</p>
	</a>
</article>
