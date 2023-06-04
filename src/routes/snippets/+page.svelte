<script lang="ts">
	import Title from 'components/Title.svelte';
	export let data;
</script>

<svelte:head>
	<title>Snippets</title>
	<meta name="description" content="Snippets" />
</svelte:head>

<section>
	<div class=" px-8 py-14 border-b border-tertiary-500 text-tertiary-500 text-center">
		<Title style="mb-2">Snippets</Title>
		<p class="text-lg">Simple and short solutions that can be copied and pasted.</p>
	</div>
	<section class="flex flex-col gap-14">
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
						class="text-sm border-b border-tertiary-500 last:border-transparent hover:bg-darker rounded"
					>
						<td class="p-6 font-semibold">
							<a href={post.path}>
								{post.title}
							</a>
						</td>
						<td class="p-6">{post.description}</td>
						<td class="p-6">{post.date}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</section>
</section>
