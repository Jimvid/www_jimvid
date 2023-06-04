<script lang="ts">
	import { matchTagToColor } from '$lib/util';
	type Post = {
		title: string;
		description: string;
		date: string;
		path: string;
		tags: string[];
	};
	export let post: Post;
	const { title, date, description, path, tags } = post;
</script>

<a
	class="grid gap-8 grid-cols-3 p-8 bg-surface-500 text-tertiary-500 transition hover:bg-surface-300"
	href={path}
>
	<div>
		<div>
			<h2 class="text-3xl font-bold">{title}</h2>
			<p class="mb-2 opacity-80 text-sm">{date}</p>
			<ul class="flex gap-2">
				{#each tags as tag}
					<li
						class="{matchTagToColor(tag)} border border-tertiary-500 p-1 text-xs text-surface-500"
					>
						<p>{tag}</p>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<p class="text-lg col-span-2">{description}</p>
</a>
