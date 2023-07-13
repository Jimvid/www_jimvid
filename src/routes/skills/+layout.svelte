<script>
	import { page } from '$app/stores';
	console.log($page.url.pathname);
</script>

<section>
	<div class="border-b border-accent">
		<nav class="p-4 flex gap-2 dark:text-white dark:bg-tertiary-500">
			Skills:
			<ul class="flex gap-4">
				<li>
					<a aria-current={$page.url.pathname === '/skills/html-css'} href="html-css">HTML & CSS</a>
				</li>
				<li>
					<a aria-current={$page.url.pathname === '/skills/javascript'} href="javascript"
						>Javascript</a
					>
				</li>
				<li>
					<a aria-current={$page.url.pathname === '/skills/backend'} href="backend">Backend</a>
				</li>
				<li>
					<a aria-current={$page.url.pathname === '/skills/ui-ux'} href="ui-ux">UI/UX design</a>
				</li>
			</ul>
		</nav>
	</div>
	<div class="p-4 max-">
		<slot />
	</div>
</section>

<style>
	a[aria-current='true'] {
		border-bottom: 2px solid #7761ff;
	}
</style>
