import { error } from '@sveltejs/kit';

export type Repository = {
	name: string;
	created_at: string;
	language: string;
	html_url: string;
};

export type RepositoryOption = {
	page: number;
	perPage: number;
};

export const getAllRepos: (url: string, opt: RepositoryOption) => Promise<Repository[]> = async (
	url,
	opt
) => {
	try {
		const response = await fetch(`${url}?page=${opt.page}&per_page=${opt.perPage}`);

		if (response.ok) {
			const repos = await response.json();
			return repos.sort((a: Repository, b: Repository) => {
				return new Date(a.created_at) > new Date(b.created_at) ? -1 : 1;
			});
		} else {
			console.log(`Request failed with status code ${response.status}.`);
		}
	} catch (error) {
		console.error('An error occurred:', error);
	}
};

export type Markdown<T> = T & {
	path: string;
};

export type MetaData = {
	title: string;
	description: string;
	date: string;
	content: string;
	tags: string[];
	image?: string;
};

const extractMetadata = <T>(value: unknown): T => {
	if (isMetadata<T>(value)) {
		return value.metadata;
	} else {
		throw new Error('Invalid metadata type.');
	}
};

const isMetadata = <T>(value: unknown): value is { metadata: T } => {
	return (
		typeof value === 'object' &&
		value !== null &&
		'metadata' in value &&
		typeof (value as { metadata: unknown }).metadata === 'object'
	);
};

type GetMarkdownFiles = <T>(glob: Record<string, () => Promise<unknown>>) => Promise<{
	markdown: Markdown<T>[];
}>;

export const getMarkdownFiles: GetMarkdownFiles = async <T>(
	glob: Record<string, () => Promise<unknown>>
) => {
	const iterableFiles = Object.entries(glob);

	const markdown: Markdown<T>[] = await Promise.all(
		iterableFiles.map(async ([path, resolver]) => {
			const resolvedValue = await resolver();
			const metadata = extractMetadata<T>(resolvedValue);

			const pathParts = path.split('/');
			const dirName = pathParts[pathParts.length - 2];
			const fileName = pathParts[pathParts.length - 1].slice(0, -3);
			const pathTo = `/${dirName}/${fileName}`;

			return {
				...metadata,
				path: pathTo
			};
		})
	);

	const orderedByDate = markdown.sort((a: Markdown<T>, b: Markdown<T>) => {
		if ('date' in a && 'date' in b) {
			return new Date(a.date as string) > new Date(b.date as string) ? -1 : 1;
		}
		return 0;
	});

	return { markdown: orderedByDate };
};

type GetSingleMarkdownFile = (path: string) => Promise<MetaData>;

export const getSingleMarkdownFile: GetSingleMarkdownFile = async (path) => {
	try {
		/* @vite-ignore */
		const post = await import(path);
		const content = post.default.render().html;

		return {
			...post.metadata,
			content
		};
	} catch (err) {
		throw error(404, 'Not found');
	}
};

type TagColor = 'css' | 'typescript' | 'javascript' | 'fundamentals' | 'react' | 'svelte';

export const matchTagToColor = (text: TagColor) => {
	const colors: Record<TagColor, string> = {
		css: 'bg-red-500',
		typescript: 'bg-blue-500',
		javascript: 'bg-yellow-500',
		fundamentals: 'bg-purple-500',
		react: 'bg-teal-500',
		svelte: 'bg-orange-500'
	};

	const tag = text.toLowerCase() as TagColor;
	return colors[tag];
};
