export const prerender = true;
import { getSingleMarkdownFile } from '$lib/util';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	return getSingleMarkdownFile(`/src/content/blog/${params.slug}.md`);
};
