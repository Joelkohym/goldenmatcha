"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { desc } from "framer-motion/client";
import { motion } from "framer-motion";
// import NavBar from "@/components/NavBar";

const ceremonialProducts = [
	{
		name: "Yame Okumidori Ceremonial Grade",
		weight: "25g",
		price: "699",
		color: "black",
		image: "/Golden Matcha Logo.jpg",
		description: "",
		link: "",
		awardWinning: true,
	},
	{
		name: "Yame Sakimidori Ceremonial Grade",
		weight: "25g",
		price: "699",
		color: "black",
		image: "/Golden Matcha Logo.jpg",
		description: "",
		link: "",
	},
	{
		name: "Uji Gold Ceremonial Grade",
		weight: "25g",
		price: "699",
		color: "black",
		image: "/Uji Final v2.jpg",
		description: "",
		link: "",
	},
	{
		name: "Kagoshima Gold Ceremonial Grade",
		weight: "25g",
		price: "699",
		color: "black",
		image: "/Kago Final v2.jpg",
		description: "",
		link: "",
	},
	{
		name: "Mie Gold Ceremonial Grade",
		weight: "25g",
		price: "699",
		color: "black",
		image: "/Mie Final v2.jpg",
		description: "",
		link: "",
	},
];

const premiumProducts: Product[] = [
	{
		name: "Golden Yame Premium Blend",
		weight: "30g",
		price: "499",
		color: "black",
		image: "/Golden Yame Final v2.jpg",
		description: "",
		link: "",
	},
];

interface Product {
	name: string;
	weight: string;
	price: string;
	color: string;
	image?: string;
	description: string;
	link: string;
	awardWinning?: boolean;
}
const MotionProductCard = ({ product }: { product: Product }) => {
	const [isHovered, setIsHovered] = useState(false);
	const words = product.name.split(" ");
	const firstLine = words.slice(0, words.length - 2).join(" ");
	const secondLine = words.slice(-2).join(" ");
	return (
		<motion.div
			className="rounded-lg shadow-md overflow-hidden cursor-pointer transform transition hover:scale-105 relative"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			style={{ backgroundColor: isHovered ? product.color : "black" }}
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			viewport={{ amount: 0.3, once: true }}
		>
			{" "}
			{product.awardWinning && (
				<div className="absolute top-3 left-1/2 -translate-x-1/2 z-20">
					<span className="bg-[#ceb072] text-black text-[10px] md:text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full shadow-lg">
						Award Winner
					</span>
				</div>
			)}
			<div className="relative h-56 md:h-64 flex items-center justify-center overflow-hidden transition-colors duration-300 rounded-t-lg">
				<Image
					src={
						isHovered
							? "/Hover_picture1.jpeg"
							: product.image || "/placeholder.jpeg"
					}
					alt={product.name}
					fill
					className="object-cover rounded-t-lg transition-opacity duration-300"
				/>
			</div>
			<div className="p-4 md:p-6 text-center">
				<h3 className="text-sm md:text-md text-[#ceb072] font-serif uppercase leading-tight text-center">
					{firstLine}
				</h3>
				<p className="text-xs md:text-sm text-[#ceb072] font-serif uppercase text-center mb-2 md:mb-4">
					{secondLine} {product.weight}
				</p>
				<p className="text-xs md:text-sm text-[#ceb072] font-serif">
					<span className="text-xs md:text-sm">฿</span>
					{product.price}
				</p>
			</div>
		</motion.div>
	);
};

export default function ProductsPage() {
	return (
		<div className="min-h-screen bg-[url('/Background_Main2.jpeg')] bg-cover bg-center bg-no-repeat bg-fixed text-[#ceb072] relative overflow-hidden">
			<NavBar />

			{/* Background overlay */}
			<div className="absolute inset-0 bg-black/55 z-0" />

			{/* Content */}
			<main className="relative z-10 pt-45 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
				{/* CEREMONIAL GRADE Section */}
				<div className="mb-16 md:mb-20">
					<h3 className="text-2xl md:text-3xl lg:text-4xl text-[#ceb072] font-serif mb-8 md:mb-12 text-center">
						CEREMONIAL GRADE
					</h3>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
						{ceremonialProducts.map((product, i) => (
							<MotionProductCard key={i} product={product} />
						))}
					</div>
				</div>
				<div className="mb-16 md:mb-20">
					<h3 className="text-2xl md:text-3xl lg:text-4xl text-[#ceb072] font-serif mb-8 md:mb-12 text-center">
						PREMIUM GRADE
					</h3>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
						{premiumProducts.map((product, i) => (
							<MotionProductCard key={i} product={product} />
						))}
					</div>
				</div>
				{/* Shopee & TikTok Logos - Mobile optimized */}
				<div className="flex justify-center gap-4 md:gap-8 pt-8 md:pt-12 font-serif text-[#ceb072] text-md md:text-lg lg:text-xl text-center px-4 uppercase">
					Place your orders here:
				</div>
				<div className="flex justify-center gap-4 md:gap-8 pt-1 pb-8">
					<motion.a
						href="https://shopee.sg/lauboonheng96j?is_from_login=true"
						target="_blank"
						rel="noopener noreferrer"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.5 }}
						className="flex items-center p-2 md:p-3 hover:shadow-lg rounded-xl transition-all duration-300"
					>
						<Image
							src="/medias/shopee.webp"
							alt="Shopee"
							width={100}
							height={20}
							className="object-contain w-[90px] h-[30px] md:w-[120px] md:h-[30px]"
						/>
					</motion.a>

					<motion.a
						href="https://vt.tiktok.com/ZS5HXxV7t/?page=TikTokShop"
						target="_blank"
						rel="noopener noreferrer"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="flex items-center p-2 md:p-3 hover:shadow-lg rounded-xl transition-all duration-300"
					>
						<Image
							src="/medias/tiktok.svg"
							alt="Tiktok"
							width={100}
							height={30}
							className="object-contain w-[110px] h-[37px] md:w-[150px] md:h-[40px]"
						/>
					</motion.a>
				</div>
			</main>

			<Footer />
		</div>
	);
}
