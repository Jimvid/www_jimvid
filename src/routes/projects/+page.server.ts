import { getMarkdownFiles, type MetaData } from '$lib/util';

export const prerender = true;

export async function load() {
	const fileMatches = import.meta.glob('/src/content/projects/*.md');
	return await getMarkdownFiles<MetaData>(fileMatches);
}
