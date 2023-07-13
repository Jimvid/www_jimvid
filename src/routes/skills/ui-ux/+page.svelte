<script>
	import SkillPage from 'layouts/SkillPage.svelte';
	import Title from 'components/Title.svelte';
</script>

<svelte:head>
	<title>Skills - UI/UX</title>
	<meta name="description" content="" />
</svelte:head>

<SkillPage next_label="HTML & CSS" next_url="html-css">
	<Title size="xl" slot="title">Designing interfaces that engage the users.</Title>
	<div slot="description">
		<p>
			Even though my primary focus is development, I possess a keen eye for design and have the
			ability to create aesthetically appealing designs that not only catch the eye but also enhance
			usability. With my technical background and expertise, I offer a distinct perspective that
			allows me to effectively contribute to the development of design systems and bridge the gap
			between development and design.
		</p>
		<p class="mt-8 mb-4">Technologies that i use:</p>
		<ul class="list-disc list-inside ml-2">
			<li>Figma</li>
		</ul>
	</div>
</SkillPage>
