<script lang="ts">
	import Title from 'components/Title.svelte';
	export let data;
</script>

<svelte:head>
	<title>single post</title>
	<meta name="description" content="single post" />
</svelte:head>

<section class="post h-full">
	<header class="py-8 md:py-12 border-b border-tertiary-500">
		<Title style="max-w-3xl px-4 m-auto mb-1 md:mb-4">
			{data.title}
		</Title>
		<p class="max-w-3xl mb-0 px-4 m-auto text-md opacity-70">Published: {data.date}</p>
	</header>
	<article class="bg-white">
		<div class="content bg-white max-w-3xl m-auto p-4">
			<div class="font-[400] py-8">
				{@html data.content}
			</div>
		</div>
	</article>
</section>
