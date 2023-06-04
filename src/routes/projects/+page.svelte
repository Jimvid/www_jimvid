<script>
	import Title from 'components/Title.svelte';

	export let data;
	console.log(data);
</script>

<svelte:head>
	<title>Posts</title>
	<meta name="description" content="Posts" />
</svelte:head>

<section>
	<div class="px-8 py-14 border-b border-tertiary-500 text-tertiary-500 text-center">
		<Title style="mb-2">Projects</Title>
		<p class="text-lg">A list of my recent projects on github.</p>
	</div>
	<ul class="grid grid-cols-3">
		{#each data.markdown as repo}
			<li class="aspect-[16/9] outline outline-1">
				<a
					href={repo.path}
					class="flex bg-surface-500 transition hover:bg-surface-300 p-4 items-center justify-center h-full flex-col"
				>
					<h2 class="font-semibold text-xl mb-0">
						{repo.title}
					</h2>
					<p class="text-sm text-center opacity-75">{repo.description}</p>
				</a>
			</li>
		{/each}
	</ul>
</section>
