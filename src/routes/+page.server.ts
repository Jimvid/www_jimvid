import { getMarkdownFiles, type MetaData } from '$lib/util';
import { getAllRepos } from '$lib/util';

export async function load() {
	const url = 'https://api.github.com/users/jimvid/repos';
	const options = {
		page: 1,
		perPage: 9
	};

	const blogFiles = import.meta.glob('/src/content/blog/*.md');
	const snippetFiles = import.meta.glob('/src/content/snippets/*.md');

	const blogPosts = await getMarkdownFiles<MetaData>(blogFiles);
	const snippets = await getMarkdownFiles<MetaData>(snippetFiles);

	const repos = await getAllRepos(url, options);

	return {
		blogPosts: blogPosts.markdown.slice(0, 3),
		snippets: snippets.markdown.slice(0, 6),
		repos: repos.slice(0, 6)
	};
}
