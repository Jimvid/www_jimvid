<script lang="ts">
	import Post from 'components/Post.svelte';
	import Hero from 'layouts/Hero.svelte';
	export let data;
</script>

<svelte:head>
	<title>Victor Jimvid | The Blog</title>
	<meta name="description" content="Posts" />
</svelte:head>

<section class="mb-24">
	<Hero title="The Blog">
		<p slot="inner-content">Sometimes I try to write stuff and it would end up here.</p>
	</Hero>
	<ul class="m-0 flex flex-col">
		{#each data.posts as post}
			<li class="border-b border-accent">
				<Post {post} />
			</li>
		{/each}
	</ul>
</section>
