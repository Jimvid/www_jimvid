export type MetaData = {
	title: string;
	description: string;
	date: string;
	content: string;
	tags: string[];
	image?: string;
	slug: string;
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
	posts: T[];
}>;

export const getMarkdownFiles: GetMarkdownFiles = async <T>(
	glob: Record<string, () => Promise<unknown>>
) => {
	const iterableFiles = Object.entries(glob);

	const posts: T[] = await Promise.all(
		iterableFiles.map(async ([path, resolver]) => {
			// TODO: Uhhrr fix this
			const resolvedValue = (await resolver()) as any;
			const metadata = extractMetadata<T>(resolvedValue);

			const pathParts = path.split('/');
			const fileName = pathParts[pathParts.length - 1].slice(0, -3);

			return {
				...metadata,
				content: resolvedValue.default.render().html,
				slug: fileName
			};
		})
	);

	const sortedPosts = sortPostsByDate<T>(posts);
	return { posts: sortedPosts };
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

export function hasDateProperty(obj: any): obj is { date: string } {
	return typeof obj === 'object' && 'date' in obj;
}

export const sortPostsByDate = <T>(posts: T[]) => {
	return posts.slice().sort((a, b) => {
		if (!hasDateProperty(a) || !hasDateProperty(b)) {
			return 0;
		}

		const dateA = new Date(a.date).getTime();
		const dateB = new Date(b.date).getTime();
		return dateB - dateA;
	});
};
