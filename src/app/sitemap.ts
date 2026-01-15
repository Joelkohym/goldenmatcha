import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://goldenmatcha.vercel.app",
			lastModified: new Date(),
		},
		{
			url: "https://goldenmatcha.vercel.app/products",
			lastModified: new Date(),
		},
		{
			url: "https://goldenmatcha.vercel.app/our-story",
			lastModified: new Date(),
		},
		{
			url: "https://goldenmatcha.vercel.app/wholesale",
			lastModified: new Date(),
		},
	];
}
