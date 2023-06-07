import { getMarkdownFiles, type MetaData } from '$lib/util';

export async function load() {
	const blogFiles = import.meta.glob('/src/content/blog/*.md');
	const snippetFiles = import.meta.glob('/src/content/snippets/*.md');
	const projectFiles = import.meta.glob('/src/content/projects/*.md');

	const promises = [
		getMarkdownFiles<MetaData>(blogFiles),
		getMarkdownFiles<MetaData>(snippetFiles),
		getMarkdownFiles<MetaData>(projectFiles)
	];

	const [blogPosts, snippets, projects] = await Promise.all(promises);

	return {
		blogPosts: blogPosts.markdown.slice(0, 3),
		snippets: snippets.markdown.slice(0, 6),
		repos: projects.markdown.slice(0, 3)
	};
}
