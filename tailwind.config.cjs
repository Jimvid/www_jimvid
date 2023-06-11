const config = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			colors: {
				html: '#13ec96',
				css: '#ec1369',
				typescript: '#1f36e0',
				javascript: '#f8d507',
				fundamentals: '#780db3',
				react: '#0daff2',
				svelte: '#f2500d',
				accent: '#2e2e45'
			},
			width: {
				content: '75rem'
			},
			maxWidth: {
				content: '75rem'
			}
		}
	},
	plugins: [...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()]
};

module.exports = config;
