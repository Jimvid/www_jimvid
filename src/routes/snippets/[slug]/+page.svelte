<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>single post</title>
	<meta name="description" content="single snippet" />
</svelte:head>

<section class="post">
	<h1 class="text-2xl lg:text-3xl">{data.title}</h1>
	<p class="opacity-60 mb-6">{data.date}</p>
	<div>
		{@html data.content}
	</div>
</section>
