<script>
	import SkillPage from 'layouts/SkillPage.svelte';
	import Title from 'components/Title.svelte';
</script>

<svelte:head>
	<title>Skills - Backend</title>
	<meta name="description" content="" />
</svelte:head>

<SkillPage next_label="UI/UX" next_url="ui-ux">
	<Title size="xl" slot="title"
		>Empowering web apps with <span class="whitespace-nowrap">Server-Side</span> JavaScript.</Title
	>
	<div slot="description">
		<p>
			I not only enjoy creating visually appealing user interfaces, but I also possess expertise in
			building robust server-side logic that powers these interfaces. My dedication lies in crafting
			seamless software solutions that cover every aspect, from front to back.
		</p>
		<p class="mt-8 mb-4">Technologies that i use:</p>
		<ul class="list-disc list-inside ml-2">
			<li>NodeJS</li>
            <li>Typescript</li>
            <li>Go</li>
			<li>Postgres</li>
		</ul>
	</div>
</SkillPage>
