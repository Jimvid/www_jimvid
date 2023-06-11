<script>
	import Hero from 'layouts/Hero.svelte';
	export let data;
</script>

<svelte:head>
	<title>Victor Jimvid | My projects</title>
	<meta name="description" content="Posts" />
</svelte:head>

<section>
	<Hero title="Projects">
		<p slot="inner-content">A list of my recent projects on github.</p>
	</Hero>
	<ul class="grid grid-cold-1 md:grid-cols-2 lg:grid-cols-3">
		{#each data.markdown as repo}
			<li class="md:aspect-[16/9] outline outline-accent outline-1">
				<a
					href={repo.path}
					class="flex transition px-4 py-8 hover:bg-surface-100 dark:hover:bg-accent p-4 items-center justify-center h-full flex-col"
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
