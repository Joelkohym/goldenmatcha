// app/wholesale/WholesaleContent.tsx
"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import EnquiryForm from "../../components/EnquiryForm";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, Variants } from "framer-motion";

const wholesaleProducts = [
	{
		name: "Yame A Premium",
		imageUrl: "/Golden Matcha Logo.jpg",
		description: "",
	},
	{
		name: "Yame B Premium",
		imageUrl: "/Golden Matcha Logo.jpg",
		description: "",
	},
	{
		name: "Yame A Ceremonial (1st Harvest Okumidori)",
		imageUrl: "/Golden Matcha Logo.jpg",
		description: "",
	},
	{
		name: "Uji A Ceremonial (1st Harvest Okumidori)",
		imageUrl: "/Golden Matcha Logo.jpg",
		description: "",
	},
	{
		name: "Top 1 Ceremonial (From Zhejiang, Hangzhou)",
		imageUrl: "/Golden Matcha Logo.jpg",
		description: "",
	},
];

// Page-level variants for enter transition
const pageVariants: Variants = {
	hidden: { opacity: 0, y: 1 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: "easeOut",
			staggerChildren: 0.15,
		},
	},
};

// Section / block variants (used by hero, headings, form)
const blockVariants: Variants = {
	hidden: { opacity: 0, y: 25 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: "easeOut",
		},
	},
};

// Card variants for product grid
const cardVariants: Variants = {
	hidden: { opacity: 0, y: 20, scale: 0.95 },
	show: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.4,
			ease: "easeOut",
		},
	},
};

export default function WholesaleContent() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const scrollToSectionId = searchParams.get("scrollTo");

	useEffect(() => {
		if (!scrollToSectionId) return;
		const element = document.getElementById(scrollToSectionId);
		element?.scrollIntoView({ behavior: "smooth" });
		router.replace("/wholesale", { scroll: false });
	}, [scrollToSectionId, router]);

	return (
		<div className="min-h-screen bg-black text-yellow-400">
			<NavBar />

			{/* Page wrapper animation */}
			<motion.main
				className="pt-37 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative"
				variants={pageVariants}
				initial="hidden"
				animate="show"
			>
				{/* First section: hero + text + enquiry form */}
				<motion.section
					id="home"
					className="mt-0 md:mt-2"
					variants={blockVariants}
				>
					{/* Hero background image */}
					<div className="relative w-full h-[30vh] sm:h-[20vh] md:h-[30vh] overflow-hidden rounded-3xl">
						<Image
							src="/Background_Main2.jpeg"
							alt="Wholesale Matcha"
							fill
							className="object-cover"
							priority
						/>
						{/* Dark overlay for better text contrast */}
						<div className="absolute inset-0 bg-black/40" />
					</div>

					{/* Text + form in one block */}
					<div className="mt-8 md:mt-10 max-w-4xl mx-auto text-center space-y-6">
						<h1 className="text-3xl sm:text-4xl md:text-5xl text-[#ceb072] font-serif">
							GOLDEN MATCHA WHOLESALE
						</h1>
						<p className="text-sm sm:text-base md:text-lg text-[#f6e6b5] max-w-2xl mx-auto">
							Tell us how we can help you grow your business and we will do our
							best to help.
						</p>

						{/* Enquiry form is now part of the first section */}
						<div id="get-a-quote" className="mt-6">
							<EnquiryForm />
						</div>
					</div>
				</motion.section>

				{/* Product list heading */}
				<motion.div className="mt-20 text-center" variants={blockVariants}>
					<h2 className="text-3xl md:text-4xl text-[#ceb072] font-serif mb-4">
						Wholesale Product List
					</h2>
					<p className="text-[#ceb072] max-w-2xl mx-auto">
						Samples are available in bags. Please take note of the product
						numbers you&apos;d like to sample &amp; reach out via the enquiry
						form.
					</p>
				</motion.div>

				{/* Product grid with staggered cards */}
				<motion.div
					className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-20 mt-10"
					variants={{
						hidden: {},
						show: {
							transition: {
								staggerChildren: 0.1,
							},
						},
					}}
				>
					{wholesaleProducts.map((product, i) => (
						<motion.div
							key={i}
							className="bg-yellow-900/80 rounded-xl shadow-lg overflow-hidden flex flex-col border border-[#ceb072]/30 hover:border-[#ceb072]/70 transition-colors duration-300"
							variants={cardVariants}
							whileHover={{ y: -4, scale: 1.01 }}
							transition={{ type: "spring", stiffness: 260, damping: 20 }}
						>
							<div className="relative h-56 w-full">
								<Image
									src={product.imageUrl}
									alt={product.name}
									fill
									className="object-cover"
									priority
								/>
							</div>
							<div className="p-6 flex flex-col flex-grow">
								<h3 className="text-2xl font-semibold mb-2 text-[#f8e8b8]">
									{product.name}
								</h3>
								<p className="text-yellow-300 flex-grow text-sm md:text-base">
									{product.description ||
										"Premium matcha curated for cafés, bakeries, and beverage brands."}
								</p>
							</div>
						</motion.div>
					))}
				</motion.div>
			</motion.main>

			<Footer />
		</div>
	);
}
