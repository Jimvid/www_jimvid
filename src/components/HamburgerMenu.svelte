<script>
	import Icon from './Icon.svelte';

	export let style = '';
	$: isOpen = false;
	const toggleMenu = () => (isOpen = !isOpen);
</script>

<div class={style}>
	<button on:click={toggleMenu}>
		<Icon icon="hamburger" />
	</button>
	{#if isOpen}
		<div
			class="p-8  fixed left-0 top-0 w-full bg-surface-50 dark:bg-surface-500 z-20 h-full flex flex-col justify-between"
		>
			<nav class="text-3xl font-bold">
				<button class="text-sm flex gap-2 mb-8" on:click={toggleMenu}>
					<Icon style="rotate-180" icon="arrow" size="sm" /> Go back
				</button>
				<ul class="flex flex-col gap-2">
					<li>
						<a on:click={() => (isOpen = false)} href="/">Home</a>
					</li>
					<li>
						<a on:click={() => (isOpen = false)} href="/blog">Blog</a>
					</li>
					<li>
						<a on:click={() => (isOpen = false)} href="/snippets">Snippets</a>
					</li>
					<li>
						<a on:click={() => (isOpen = false)} href="/projects">Projects</a>
					</li>
				</ul>
			</nav>

			<div>
				<p class="mb-2">You can find me here</p>
				<div class="flex gap-3 ">
					<Icon icon="mail" darkColor="surface-50" lightColor="surface-500" />
					<Icon icon="linkedin" darkColor="surface-50" lightColor="surface-500" />
					<Icon icon="github" darkColor="surface-50" lightColor="surface-500" />
				</div>
			</div>
		</div>
	{/if}
</div>
