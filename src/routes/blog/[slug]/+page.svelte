<script lang="ts">
	import Article from 'layouts/Article.svelte';
	export let data;
</script>

<svelte:head>
	<title>Blog | {data.title}</title>
	<meta name="description" content="single post" />
</svelte:head>

<Article title={data?.title || ''} date={data?.date || ''}>
	<div slot="article-content">
		{@html data.content}
	</div>
</Article>
