<script>
	import Icon from 'components/Icon.svelte';
	import Skill from 'components/Skill.svelte';
	import Title from 'components/Title.svelte';
	import Post from 'components/Post.svelte';

	export let data;
</script>

<svelte:head>
	<title>Victor Jimvid | Developer and design enthusiast</title>
	<meta name="description" content="Victor Jimvid | Developer and design enthusiast" />
</svelte:head>

<section class="flex flex-col justify-center text-center border-b border-accent py-12 px-4 md:px-8">
	<Title size="xl" style="md:p-4 md:pb-2">Hi, I'm Victor</Title>
	<p class="m-auto text-md font-medium max-w-2xl p-2 md:p-4 md:pt-2 lg:text-xl">
		I am a developer and design enthusiast with a keen interest in user experience, software
		architecture, and design systems.
	</p>
	<div class="flex justify-center gap-2">
		<a href="https://github.com/jimvid" target="_blank" rel="noopener">
			<Icon icon="github" />
		</a>
		<a href="mailto:victor@jimvid.com">
			<Icon icon="mail" />
		</a>
	</div>
</section>

<section class="bg-tertiary-100 dark:bg-tertiary-500 pb-12 md:pb-24">
	<Title heading="h2" size="lg" style="p-4 md:p-8">Skills</Title>
	<ul class="grid grid-cols-1 md:grid-cols-2">
		<li class="md:border-b border-t border-accent md:border-r">
			<Skill title="HTML & CSS" color="bg-secondary-500" href="skills/html-css" icon="html">
				<p slot="description">Interactive experiences & Responsive layouts</p>
			</Skill>
		</li>
		<li class="border-b border-t border-accent">
			<Skill href="/skills/javascript" title="JavaScript" color="bg-green-600" icon="js">
				<p slot="description">Frontend development & Single page apps</p>
			</Skill>
		</li>
		<li class="border-b border-accent md:border-r">
			<Skill href="/skills/backend" title="Backend" icon="backend" color="bg-error-400">
				<p slot="description">Content management & Dynamic websites</p>
			</Skill>
		</li>
		<li class="border-b border-accent">
			<Skill href="/skills/ui-ux" title="UI/UX Design" icon="uiux" color="bg-purple-700">
				<p slot="description">Design systems & Smart interfaces</p>
			</Skill>
		</li>
	</ul>
</section>
<section class="border-y border-accent">
	<Title heading="h2" size="lg" style="py-8 px-4 md:py-14 md:px-10 border-b border-accent"
		>Recent posts</Title
	>
	<ul class="m-0 flex flex-col">
		{#each data.blogPosts as post}
			<li class="border-b border-accent last:border-transparent">
				<Post {post} size="sm" heading="h3" />
			</li>
		{/each}
	</ul>
	<a
		href="/blog"
		class="p-8 border-accent flex items-center gap-2 justify-center border-t w-full text-2xl font-bold transition-all hover:bg-accent"
		><span>View all blogposts </span><Icon icon="arrow" /></a
	>
</section>

<section class="border-b border-accent">
	<Title heading="h2" size="lg" style="py-8 px-4 md:py-14 md:px-10 border-b border-accent"
		>Latest Snippets</Title
	>
	<ul class="flex flex-wrap gap-4 px-4 md:px-8 py-8 md:py-16">
		{#each data.snippets as snippet}
			<li class="w-full md:w-auto">
				<article>
					<a
						class="flex flex-col px-4 py-4 border bg-tertiary-500 text-tertiary-50 hover:bg-accent dark:bg-tertiary-500 dark:hover:bg-accent border-accent"
						href={`snippets/${snippet.slug}`}
					>
						<Title size="xs" heading="h3">{snippet.title}</Title>
						<p class="text-xs">{snippet.description}</p>
					</a>
				</article>
			</li>
		{/each}

		<li class="w-full md:w-auto">
			<a
				class="flex px-4 py-4 text-2xl border gap-2 h-full items-center bg-primary-500 hover:bg-primary-600 text-surface-500 border-accent"
				href="/snippets"
			>
				View all snippets
				<Icon icon="arrow" darkColor="bg-surface-500" size="sm" />
			</a>
		</li>
	</ul>
</section>

<section class="">
	<Title
		size="lg"
		heading="h2"
		style="text-tertiary-500 dark:text-tertiary-50 py-8 px-4 md:py-14 md:px-10 border-b border-accent"
		>My projects</Title
	>
	<ul class="grid grid-cols-1 sm:grid-cols-3">
		{#each data.projects as project}
			<li class="min-h-[200px]">
				<article class=" flex flex-col justify-between h-full shadow-border">
					<div class="text-center p-4 flex flex-col justify-center items-center h-full">
						<Title size="xs" heading="h2" style="mb-1">
							{project.title}
						</Title>
						<p class="text-sm opacity-75">{project.description}</p>
					</div>
					<a
						href={`/projects/${project.slug}`}
						class="border-t border-accent flex gap-2 text-center transition p-4 items-center justify-center hover:bg-surface-200 dark:hover:bg-accent"
						>Check it out
						<Icon icon="arrow" size="sm" />
					</a>
				</article>
			</li>
		{/each}
	</ul>
	<a
		href="/projects"
		class="mb-24 border-b p-8 border-accent flex items-center gap-2 justify-center border-t w-full text-2xl font-bold transition-all hover:bg-surface-200 dark:hover:bg-accent"
		><span>View all projects</span><Icon icon="arrow" /></a
	>
</section>

<style>
	.shadow-border {
		box-shadow: 0px 0px 0px 1px #2e2e45;
	}
</style>
