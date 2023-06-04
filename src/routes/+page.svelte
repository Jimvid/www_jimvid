<script>
	import Icon from 'components/Icon.svelte';
	import Skill from 'components/Skill.svelte';
	import Title from 'components/Title.svelte';
	export let data;

	const colors = [
		'bg-secondary-500',
		'bg-green-600',
		'bg-primary-500',
		'bg-purple-500',
		'bg-yellow-500',
		'bg-teal-600'
	];
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-col justify-center text-center px-8 py-12">
	<Title size="h1" style="p-4 pb-2">Hi, I'm Victor</Title>
	<p class="text-xl font-medium max-w-2xl p-4 pt-2 m-auto">
		I am a developer and design enthusiast with a keen interest in user experience, software
		architecture, and design systems.
	</p>
	<div class="flex justify-center gap-2">
		<Icon icon="github" />
		<Icon icon="mail" />
	</div>
</section>

<section class="bg-tertiary-500 pb-24 text-surface-400">
	<h2 class="text-4xl font-bold p-8">Skills</h2>
	<ul class="grid grid-cols-1 md:grid-cols-2">
		<li class="md:border-b border-t border-r border-black">
			<Skill title="HTML & CSS" color="bg-secondary-500" href="/html-css" icon="html">
				<p slot="description">Interactive experiences & Responsive layouts</p>
			</Skill>
		</li>
		<li class="border-b border-t border-black">
			<Skill href="/javascript" title="JavaScript" color="bg-green-600" icon="js">
				<p slot="description">Frontend development & Single page apps</p>
			</Skill>
		</li>
		<li class="border-b border-r border-black">
			<Skill href="/backend" title="Backend" icon="backend">
				<p slot="description">Content management & Dynamic websites</p>
			</Skill>
		</li>
		<li class="border-b border-black">
			<Skill href="/ui-ux" title="UI/UX Design" icon="uiux" color="bg-purple-700">
				<p slot="description">Design systems & Smart interfaces</p>
			</Skill>
		</li>
	</ul>
</section>
<section class="border-y border-tertiary-500">
	<Title size="h2" style="p-8 border-b pb-8 border-tertiary-500">Recent posts</Title>
	<ul class="m-0 flex flex-col">
		{#each data.blogPosts as post}
			<li class="border-b border-tertiary-500 last:border-transparent">
				<a
					class="grid gap-8 grid-cols-3 p-8 bg-surface-500 transition hover:bg-surface-300"
					href={'/testurl'}
				>
					<div>
						<h2 class="text-3xl font-bold">{post.title}</h2>
						<p class="mb-2 opacity-80 text-sm">{post.date}</p>
					</div>
					<p class="text-lg col-span-2">{post.description}</p>
				</a>
			</li>
		{/each}
	</ul>
	<a
		href="/blog"
		class="p-8 border-tertiary-500 flex items-center gap-2 justify-center border-t w-full text-2xl font-bold transition-all hover:bg-secondary-500"
		><span>View all blogposts </span><Icon icon="arrow" /></a
	>
</section>

<section class="border-b border-tertiary-500">
	<Title size="h2" style="p-8  pb-8 border-b border-tertiary-500">Latest Snippets</Title>
	<ul class="flex flex-wrap gap-4 px-8 py-20">
		{#each data.snippets as snippet}
			<li class="">
				<a
					class="flex flex-col px-4 py-4 border bg-tertiary-500 text-surface-300 border-tertiary-500"
					href={snippet.path}
				>
					<Title size="h3">{snippet.title}</Title>
					<p class="text-xs">{snippet.description}</p>
				</a>
			</li>
		{/each}

		<li class="">
			<a
				class="flex px-4 py-4 text-2xl border gap-2 h-full items-center bg-primary-500 text-surface-300 border-tertiary-500"
				href="/snippets"
			>
				View all snippets
				<Icon icon="arrow" size="sm" color="white" />
			</a>
		</li>
	</ul>
</section>

<section class="">
	<Title size="h2" style="p-8  pb-8 border-b border-tertiary-500">Current projects</Title>
	<ul class="grid grid-cols-3">
		{#each data.repos as repo, i}
			<li class="min-h-[200px] bg-surface-500">
				<div
					class=" flex flex-col justify-between h-full shadow-border rounded-3xl overflow-hidden"
				>
					<div class="text-center p-4 flex flex-col justify-center items-center h-full">
						<h2 class="font-semibold text-3xl text-center mb-0">
							{repo.name}
						</h2>
						<p class="text-sm opacity-75">{repo.language}</p>
					</div>
					<a
						href={repo.html_url}
						target="_blank"
						class="border-t border-tertiary-500 flex gap-2 text-white {colors[
							i
						]} text-center transition p-4 items-center justify-center hover:bg-tertiary-500"
						>Check it out
						<Icon icon="arrow" size="sm" color="white" />
					</a>
				</div>
			</li>
		{/each}
	</ul>
	<a
		href="/projects"
		class="mb-24 border-b p-8 border-tertiary-500 flex items-center gap-2 justify-center border-t w-full text-2xl font-bold transition-all hover:bg-purple-500"
		><span>View all projects</span><Icon icon="arrow" /></a
	>
</section>

<style>
	.shadow-border {
		box-shadow: 0px 0px 0px 1px #242628;
	}
</style>
