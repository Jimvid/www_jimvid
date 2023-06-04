const config = {
	// 1. Apply the dark mode class setting:
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 2. Append the path for the Skeleton NPM package and files:
		require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			colors: {
				html: '#13ec96',
				css: '#ec1369',
				Typescript: '#1f36e0',
				javascript: '#f8d507',
				fundamentals: '#780db3',
				react: '#0daff2',
				svelte: '#f2500d'
			},
			width: {
				content: '75rem'
			},
			maxWidth: {
				content: '75rem'
			}
		}
	},
	plugins: [
		// 3. Append the Skeleton plugin to the end of this list
		...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()
	]
};

module.exports = config;
