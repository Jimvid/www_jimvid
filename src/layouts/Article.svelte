<script lang="ts">
	import Title from 'components/Title.svelte';
	export let title: string;
	export let date: string;
</script>

<section class="h-full">
	<header class="py-8 md:py-12 border-b border-accent">
		<Title style="max-w-3xl px-4 m-auto mb-1 md:mb-4">
			{title}
		</Title>
		<p class="max-w-3xl mb-0 px-4 m-auto text-md opacity-70">Published: {date}</p>
	</header>
	<article>
		<div class="content max-w-3xl m-auto p-4">
			<div class="font-[400] py-8">
				<slot name="article-content" />
			</div>
		</div>
	</article>
</section>
