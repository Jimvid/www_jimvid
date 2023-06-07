<script>
	import SkillPage from 'layouts/SkillPage.svelte';
	import Title from 'components/Title.svelte';
</script>

<svelte:head>
	<title>Skills - Backend</title>
	<meta name="description" content="" />
</svelte:head>

<section>
	<SkillPage next_label="Javascript" next_url="javascript">
		<Title size="xl" slot="title">HTML for organizing your content, CSS for enhancing it.</Title>
		<div slot="description">
			<p>
				I focus on writing semantic HTML5 that is easily understandable for both humans and
				machines. Accessibility takes precedence in my work, as I strive to ensure that the websites
				I develop are inclusive and accessible. And I know of the CSS requirements for building
				responsive and mobile-friendly websites.
			</p>
			<Title size="xs" heading="h2" style="mt-4 mb-2">Technologies that I use</Title>
			<ul class="list-disc list-inside ml-2">
				<li>Tailwind</li>
				<li>CSS Modules</li>
				<li>Styled components (CSS in JS)</li>
				<li>Vanilla CSS (with my own styleguide)</li>
			</ul>
		</div>
	</SkillPage>
</section>
