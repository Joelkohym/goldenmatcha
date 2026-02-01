import { Product } from "@/types/product";

/* ===============================
   CEREMONIAL PRODUCTS
================================ */
export const ceremonialProducts: Product[] = [
	{
		name: "Yame Okumidori Ceremonial Grade",
		weight: "25g",
		price: "699",
		color: "black",
		image: "/Okumidori Final v2.jpg",
		hoverImage: "/Okumidori Powder v2.png",
		awardWinning: true,
		link: "",
	},
	{
		name: "Yame Sakimidori Ceremonial Grade",
		weight: "25g",
		price: "649",
		color: "black",
		image: "/Sakimidori Final v2.jpg",
		hoverImage: "/Sakimidori Powder v2.png",
		link: "",
	},
	{
		name: "Uji Gold Ceremonial Grade",
		weight: "25g",
		price: "649",
		color: "black",
		image: "/Uji Final v2.jpg",
		hoverImage: "/Uji v2.jpg",
		link: "",
	},
	{
		name: "Kagoshima Gold Ceremonial Grade",
		weight: "25g",
		price: "649",
		color: "black",
		image: "/Kago Final v2.jpg",
		hoverImage: "/Kago v2.jpg",
		link: "",
	},
	{
		name: "Mie Gold Ceremonial Grade",
		weight: "25g",
		price: "649",
		color: "black",
		image: "/Mie Final v2.jpg",
		hoverImage: "/Mie v2.jpg",
		link: "",
	},
];

/* ===============================
   PREMIUM PRODUCTS
================================ */
export const premiumProducts: Product[] = [
	{
		name: "Golden Yame Premium Blend",
		weight: "30g",
		price: "449",
		color: "black",
		image: "/Golden Yame Final v2.jpg",
		hoverImage: "/Golden Yame v2.jpg",
		link: "",
	},
];

/* ===============================
   WHOLESALE PRODUCTS
   (derived – no duplication)
================================ */
export const wholesaleProducts: Product[] = [
	...ceremonialProducts,
	...premiumProducts,
];
