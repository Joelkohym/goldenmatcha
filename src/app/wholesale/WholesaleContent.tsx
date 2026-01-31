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
		name: "Yame 04",
		imageUrl: "/Golden Yame v2.jpg",
		description: (
			<div className="space-y-3">
				<div>
					<strong>Origin:</strong> Yame Blend
				</div>

				<div>
					<strong>Grade:</strong> Premium
				</div>

				<div>
					<strong>Taste Notes:</strong>
					<ul className="list-disc list-inside mt-1 space-y-1">
						<li>Balanced nutty umami</li>
						<li>Medium body</li>
						<li>Creamy</li>
						<li>Hint of roasted</li>
					</ul>
				</div>
			</div>
		),
	},
	{
		name: "Yame 06",
		imageUrl: "/Sakimidori Powder v2.png",
		description: (
			<div className="space-y-3">
				<div>
					<strong>Origin:</strong> Yame
					<div className="text-sm opacity-90">Single Cultivar – Sakimidori</div>
				</div>

				<div>
					<strong>Grade:</strong> Ceremonial
				</div>

				<div>
					<strong>Taste Notes:</strong>
					<ul className="list-disc list-inside mt-1 space-y-1">
						<li>Excellent colour</li>
						<li>Medium–Strong body</li>
						<li>Smooth & creamy</li>
						<li>Nutty umami</li>
					</ul>
				</div>
			</div>
		),
	},
	{
		name: "Yame 07",
		imageUrl: "/Okumidori Powder v2.png",
		description: (
			<div className="space-y-3">
				<div>
					<strong>Origin:</strong> Yame
					<div className="text-sm opacity-90">Single Cultivar – Okumidori</div>
				</div>

				<div>
					<strong>Grade:</strong> Ceremonial
				</div>

				<div>
					<strong>Taste Notes:</strong>
					<ul className="list-disc list-inside mt-1 space-y-1">
						<li>Well balanced body</li>
						<li>Smooth, clear & creamy</li>
						<li>Not astringent & bitter</li>
						<li>Nutty umami</li>
					</ul>
				</div>
			</div>
		),
	},
	{
		name: "Mie 01",
		imageUrl: "/Mie v2.jpg",
		description: (
			<div className="space-y-3">
				<div>
					<strong>Origin:</strong> Mie Blend
				</div>

				<div>
					<strong>Grade:</strong> Ceremonial
				</div>

				<div>
					<strong>Taste Notes:</strong>
					<ul className="list-disc list-inside mt-1 space-y-1">
						<li>Rich umami, savory</li>
						<li>Strong body</li>
						<li>Light floral, fruity notes</li>
						<li>Creamy</li>
					</ul>
				</div>
			</div>
		),
	},
	{
		name: "Uji 01",
		imageUrl: "/Uji v2.jpg",
		description: (
			<div className="space-y-3">
				<div>
					<strong>Origin:</strong> Uji Blend
				</div>

				<div>
					<strong>Grade:</strong> Ceremonial
				</div>

				<div>
					<strong>Taste Notes:</strong>
					<ul className="list-disc list-inside mt-1 space-y-1">
						<li>Well-balanced</li>
						<li>Hint of seaweed</li>
						<li>Smooth roasted</li>
						<li>Refreshing aftertaste</li>
					</ul>
				</div>
			</div>
		),
	},
	{
		name: "Kagoshima 03",
		imageUrl: "/Kago v2.jpg",
		description: (
			<div className="space-y-3">
				<div>
					<strong>Origin:</strong> Kagoshima Blend
				</div>

				<div>
					<strong>Grade:</strong> Ceremonial
				</div>

				<div>
					<strong>Taste Notes:</strong>
					<ul className="list-disc list-inside mt-1 space-y-1">
						<li>Rich umami, savory</li>
						<li>Roasted & creamy</li>
						<li>Nutty undertones</li>
						<li>Mild sweetness</li>
					</ul>
				</div>
			</div>
		),
	},
];

// Page animation
const pageVariants: Variants = {
	hidden: { opacity: 0, y: 10 },
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

// Section animation
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

export default function WholesaleContent() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const scrollToSectionId = searchParams.get("scrollTo");
	const [activeImage, setActiveImage] = React.useState<string | null>(null);
	const [scale, setScale] = React.useState(1);

	useEffect(() => {
		if (!scrollToSectionId) return;
		const element = document.getElementById(scrollToSectionId);
		element?.scrollIntoView({ behavior: "smooth" });
		router.replace("/wholesale", { scroll: false });
	}, [scrollToSectionId, router]);

	return (
		<div className="min-h-screen bg-black text-[#ceb072] relative overflow-hidden">
			<NavBar />

			{/* HERO */}
			<section className="relative h-screen w-full">
				<Image
					src="/Wholesale header photo.jpg"
					alt="Golden Matcha Wholesale"
					fill
					priority
					className="object-cover"
				/>
				<div className="absolute inset-0 bg-black/55" />

				<div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-4 px-4">
					<h1 className="text-4xl md:text-6xl lg:text-7xl font-serif uppercase">
						Wholesale
					</h1>
					<h2 className="text-md md:text-xl lg:text-2xl font-serif max-w-3xl">
						Your trusted wholesale partner for ceremonial and premium matcha
					</h2>
				</div>
			</section>

			{/* CONTENT */}
			<motion.main
				className="pt-37 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
				variants={pageVariants}
				initial="hidden"
				animate="show"
			>
				{/* INTRO + FORM */}
				<motion.section
					id="home"
					className="mt-0 md:mt-2"
					variants={blockVariants}
				>
					<div className="max-w-4xl mx-auto text-center space-y-6">
						<h1 className="text-3xl sm:text-4xl md:text-5xl font-serif">
							GOLDEN MATCHA WHOLESALE
						</h1>

						<p className="text-sm sm:text-base md:text-lg text-[#f6e6b5] max-w-2xl mx-auto">
							Tell us how we can help you grow your business and we will do our
							best to support you.
						</p>

						<div id="get-a-quote" className="mt-6">
							<EnquiryForm />
						</div>
					</div>
				</motion.section>

				{/* PRODUCT LIST HEADER */}
				<motion.div className="mt-20 text-center" variants={blockVariants}>
					<h2 className="text-3xl md:text-4xl font-serif mb-4">
						Wholesale Product List
					</h2>
					<p className="max-w-2xl mx-auto text-sm md:text-base">
						Samples are available in 6g bags (depending on product).
						<br />
						Please note the product numbers and contact us via the enquiry form.
					</p>
				</motion.div>

				{/* MOBILE PRODUCT CARDS - Visible only on mobile */}
				<motion.div
					className="mt-12 sm:hidden space-y-6"
					variants={blockVariants}
				>
					{wholesaleProducts.map((product, index) => (
						<div
							key={index}
							className="bg-[#ceb072]/5 border border-[#ceb072]/30 rounded-xl overflow-hidden"
						>
							{/* Product Image */}
							<div
								onClick={() => setActiveImage(product.imageUrl)}
								className="relative w-full h-48 cursor-pointer"
							>
								<Image
									src={product.imageUrl}
									alt={product.name}
									fill
									className="object-cover"
								/>
								<div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 active:opacity-100 transition">
									<span className="text-white text-sm font-serif">
										Tap to view
									</span>
								</div>
							</div>

							{/* Product Info */}
							<div className="p-4 space-y-3">
								<h3 className="font-serif text-lg text-[#ceb072]">
									<span className="text-[#f6e6b5] mr-2">{index + 1}.</span>
									{product.name}
								</h3>
								<div className="text-xs text-[#f6e6b5]">
									{product.description}
								</div>
							</div>
						</div>
					))}
				</motion.div>

				{/* DESKTOP PRODUCT TABLE - Hidden on mobile */}
				<motion.div
					className="mt-12 overflow-x-auto hidden sm:block"
					variants={blockVariants}
				>
					<table className="w-full border border-[#ceb072]/30 rounded-xl overflow-hidden table-fixed">
						{/* COLUMN WIDTH CONTROL */}
						<colgroup>
							<col className="w-[25%]" />
							<col className="w-[35%]" />
							<col className="w-[40%]" />
						</colgroup>

						<thead className="bg-[#ceb072]/10">
							<tr>
								<th className="px-4 py-3 text-left font-serif uppercase text-sm">
									Product
								</th>
								<th className="px-4 py-3 text-left font-serif uppercase text-sm">
									Description
								</th>
								<th className="px-4 py-3 text-center font-serif uppercase text-sm">
									Image
								</th>
							</tr>
						</thead>

						<tbody>
							{wholesaleProducts.map((product, index) => (
								<tr
									key={index}
									className="border-t border-[#ceb072]/20 hover:bg-[#ceb072]/5 transition"
								>
									{/* PRODUCT */}
									<td className="px-4 py-4 font-serif text-sm md:text-base align-top">
										<span className="mr-2 text-[#f6e6b5]">{index + 1}.</span>
										{product.name}
									</td>

									{/* DESCRIPTION */}
									<td className="px-4 py-4 text-xs md:text-sm text-[#f6e6b5] align-top">
										{product.description}
									</td>

									{/* IMAGE */}
									<td className="px-4 py-4">
										<div
											onClick={() => setActiveImage(product.imageUrl)}
											className="group relative w-70 h-50 mx-auto rounded-lg overflow-hidden border border-[#ceb072]/40 cursor-pointer transition-transform hover:scale-105"
										>
											<Image
												src={product.imageUrl}
												alt={product.name}
												fill
												className="object-cover"
											/>

											{/* Hover overlay */}
											<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
												<span className="text-white text-sm font-serif tracking-wide">
													Click to view
												</span>
											</div>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</motion.div>
			</motion.main>

			{/* Image Modal */}
			{activeImage && (
				<div
					className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
					onClick={() => {
						setActiveImage(null);
						setScale(1);
					}}
				>
					<div
						className="relative max-w-5xl max-h-[90vh]"
						onClick={(e) => e.stopPropagation()}
					>
						<Image
							src={activeImage}
							alt="Product image"
							width={1200}
							height={1200}
							className="rounded-lg transition-transform duration-200 ease-out"
							style={{
								transform: `scale(${scale})`,
								cursor: scale > 1 ? "zoom-out" : "zoom-in",
							}}
							onClick={() => {
								setScale((prev) => Math.min(prev + 0.5, 3));
							}}
							onWheel={(e) => {
								e.preventDefault();
								setScale((prev) =>
									Math.min(Math.max(prev + (e.deltaY < 0 ? 0.1 : -0.1), 1), 3),
								);
							}}
						/>

						{/* Close button */}
						<button
							onClick={() => {
								setActiveImage(null);
								setScale(1);
							}}
							className="absolute top-3 right-3 bg-black/50 rounded-full w-8 h-8 flex items-center justify-center text-[#ceb072] text-xl hover:opacity-80"
						>
							✕
						</button>
					</div>
				</div>
			)}

			<Footer />
		</div>
	);
}
