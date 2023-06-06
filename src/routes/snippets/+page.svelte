<script lang="ts">
	import Title from 'components/Title.svelte';
	export let data;
</script>

<svelte:head>
	<title>Snippets</title>
	<meta name="description" content="Snippets" />
</svelte:head>

<section>
	<div
		class="px-4 py-10 md:px-8 md:py-14 border-b border-tertiary-500 text-tertiary-500 text-center"
	>
		<Title style="mb-2">Snippets</Title>
		<p class="text-md md:text-lg">Simple and short solutions that can be copied and pasted.</p>
	</div>
	<section class="flex flex-col">
		<table class="text-tertiary-500">
			<thead
				class="border-b bg-tertiary-500 text-surface-400 border-tertiary-500 font-bold border-accent"
			>
				<tr>
					<td class="p-5">Name</td>
					<td class="p-5">Description</td>
					<td class="p-5">Last updated</td>
				</tr>
			</thead>
			<tbody>
				{#each data.markdown as post}
					<tr
						class="text-sm border-b hover:bg-surface-300 relative border-tertiary-500 hover:bg-darker rounded"
					>
						<td class="p-6 font-semibold">
							<a class="table-link" href={post.path}>
								{post.title}
							</a>
						</td>
						<td class="p-6">{post.description}</td>
						<td class="p-6">{post.date}</td>
					</tr>
				{/each}
			</tbody>
		</table>
		<div class="w-full p-10" />
	</section>
</section>

<style>
	.table-link::after {
		top: 0;
		left: 0;
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
	}
</style>
