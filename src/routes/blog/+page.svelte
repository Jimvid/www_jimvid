<script lang="ts">
	import Title from 'components/Title.svelte';
	import Post from 'components/Post.svelte';
	export let data;
</script>

<svelte:head>
	<title>Posts</title>
	<meta name="description" content="Posts" />
</svelte:head>

<section class="mb.24">
	<div class="px-8 py-14 border-b border-tertiary-500 text-tertiary-500 text-center">
		<Title style="mb-2">The Blog</Title>
		<p class="text-lg">Sometimes I try to write stuff and it would end up here.</p>
	</div>
	<ul class="m-0 flex flex-col">
		{#each data.markdown as post}
			<li class="border-b border-tertiary-500 last:border-transparent">
				<Post {post} />
			</li>
		{/each}
	</ul>
</section>
