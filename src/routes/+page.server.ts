export const prerender = true;
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

	const [blog, snippets, projects] = await Promise.all(promises);

	return {
		blogPosts: blog.posts.slice(0, 3),
		snippets: snippets.posts.slice(0, 6),
		projects: projects.posts.slice(0, 3)
	};
}
