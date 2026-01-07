// tailwind.config.js
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"main-bg": "url('/Background_Main2.jpeg')",
			},
			colors: {
				gold: { matcha: "#ceb072" },
				black: "#000000",
			},
			screens: {
				"2xl": "1920px",
			},
		},
	},
	plugins: [],
};
