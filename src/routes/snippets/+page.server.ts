import { getMarkdownFiles } from '$lib/util';

export const prerender = true;

export interface MetaData {
	title: string;
	description: string;
	date: string;
	content: string;
}

export async function load() {
	const fileMatches = import.meta.glob('/src/content/snippets/*.md');
	const posts = await getMarkdownFiles<MetaData>(fileMatches);
	return { ...posts };
}
