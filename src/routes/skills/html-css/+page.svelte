<script>
	import SkillPage from 'layouts/SkillPage.svelte';
	import Title from 'components/Title.svelte';
</script>

<svelte:head>
	<title>Skills - HTML & CSS</title>
	<meta name="description" content="" />
</svelte:head>

<section>
	<SkillPage next_label="Javascript" next_url="javascript">
		<Title size="xl" slot="title">HTML for organizing your content, CSS for enhancing it.</Title>
		<div slot="description">
			<p>
				I focus on writing semantic HTML5 that is easily understandable for both humans and
				machines. Accessibility takes precedence in my work, as I strive to ensure that the websites
				I develop are inclusive and accessible.
			</p>
			<p class="mt-8 mb-4">Technologies that i use:</p>
			<ul class="list-disc list-inside ml-2">
				<li>Tailwind</li>
				<li>CSS Modules</li>
				<li>Styled components (CSS in JS)</li>
				<li>
					Vanilla CSS (using my <a class="text-secondary-500" href="/projects/css-style-guide"
						>styleguide</a
					>)
				</li>
			</ul>
		</div>
	</SkillPage>
</section>
