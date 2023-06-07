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
		<Title size="xs" heading="h2" style="mt-4 mb-2">Technologies that I currently use:</Title>
		<ul class="list-disc list-inside ml-2">
			<li>Node</li>
			<li>Express</li>
			<li>Postgres</li>
			<li>Prisma</li>
			<li>Typescript</li>
		</ul>
	</div>
</SkillPage>
