export const prerender = true;
import { getMarkdownFiles, type MetaData } from '$lib/util';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const fileMatches = import.meta.glob('/src/content/blog/*.md');
	const { posts } = await getMarkdownFiles<MetaData>(fileMatches);
	const content = posts.find((post) => post.slug === params.slug);

	return { ...content };
};
