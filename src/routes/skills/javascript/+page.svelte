<script>
	import SkillPage from 'layouts/SkillPage.svelte';
	import Title from 'components/Title.svelte';
</script>

<svelte:head>
	<title>Skills - Javascript</title>
	<meta name="description" content="" />
</svelte:head>

<SkillPage next_label="Backend" next_url="backend">
	<Title size="xl" slot="title">Crafting interactive web experiences with JavaScript.</Title>
	<div slot="description">
		<p>
			I have expertise in building interactive experiences across the entire spectrum of modern web
			development. From implementing small progressive enhancements to undertaking full-stack
			developments, I have worked extensively with a great variety of web technologies, including
			Typescript, React, Svelte, Node, and plain old vanilla JavaScript.
		</p>
		<p class="mt-8 mb-4">Technologies that i currently enjoy:</p>
		<ul class="list-disc list-inside ml-2">
			<li>Typescript</li>
			<li>NextJS</li>
			<li>Sveltekit (This site is made with Sveltekit)</li>
		</ul>
	</div>
</SkillPage>
