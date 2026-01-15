import type { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		default: "Golden Matcha",
		template: "%s | Golden Matcha",
	},
	description:
		"Premium ceremonial-grade matcha. Sustainably sourced. Crafted for wellness and focus.",
	keywords: ["matcha", "ceremonial matcha", "green tea", "golden matcha"],
	metadataBase: new URL("https://goldenmatcha.vercel.app"),
	openGraph: {
		title: "Golden Matcha",
		description: "Premium ceremonial-grade matcha for modern wellness.",
		url: "https://goldenmatcha.vercel.app",
		siteName: "Golden Matcha",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
	},
	verification: {
		google:
			'<meta name="google-site-verification" content="hKqn1ZCYLbXGNZhTvcnCuh_zhpRdDA7giZOQQ2gjXm4" />',
	},
};
