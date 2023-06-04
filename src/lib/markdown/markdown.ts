import fs from 'fs';
import matter from 'gray-matter';

export interface MarkdownFile {
	slug: string;
	content: string;
	frontmatter: {
		title: string;
		date: string;
		description: string;
	};
}

export const getAllMarkdownPaths = (dir: string) => {
	// Get list of all files from our posts directory
	const files = fs.readdirSync(`${dir}`);

	// Generate a path for each one
	const paths = files.map((fileName: string) => ({
		params: {
			slug: fileName.replace('.md', '')
		}
	}));

	return paths;
};

// Sort files by date
export const sortFilesByFrontmatterDate = (posts: MarkdownFile[]) => {
	return posts.sort((a, b) => {
		return new Date(a.frontmatter.date) > new Date(b.frontmatter.date) ? -1 : 1;
	});
};

// Get a single markdown file
export const getSingleMarkdownFileBySlug = (dir: string, params: any) => {
	if (!params) return;

	const fileName = fs.readFileSync(`${dir}/${params?.slug}.md`, 'utf-8');
	const { data: frontmatter, content } = matter(fileName);

	return {
		frontmatter,
		content
	} as any;
};

export const getAllMarkdownFilesInDir = (dir: string) => {
	// get list of files from given folder
	const files = fs.readdirSync(dir);

	// get frontmatter & slug from each post
	const posts = sortFilesByFrontmatterDate(
		files.map((fileName) => {
			const slug = fileName.replace('.md', '');
			const readFile = fs.readFileSync(`${dir}/${fileName}`, 'utf-8');
			const { data: frontmatter } = matter(readFile);

			return {
				slug,
				frontmatter
			} as MarkdownFile;
		})
	);

	return posts;
};
