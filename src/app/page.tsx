"use client";

export const dynamic = "force-dynamic";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import emailjs from "emailjs-com";
import { useRouter } from "next/navigation";
import NavBar from "../components/NavBar";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import EnquiryForm from "../components/EnquiryForm";
import { ceremonialProducts, premiumProducts } from "@/data/products";
import MotionProductCard from "@/components/MotionProductCard";

function HomeContent() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const scrollToSectionId = searchParams.get("scrollTo");

	useEffect(() => {
		if (scrollToSectionId) {
			const element = document.getElementById(scrollToSectionId);
			element?.scrollIntoView({ behavior: "smooth" });

			router.replace("/", { scroll: false });
		}
	}, [scrollToSectionId, router]);

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		company: "",
		number: "",
		message: "",
	});
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [error, setError] = useState("");

	const handleFormChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleFormSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setError("");

		const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
		const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
		const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

		if (!serviceId || !templateId || !publicKey) {
			setError("Email service is not configured properly.");
			return;
		}

		emailjs.send(serviceId, templateId, formData, publicKey).then(
			() => {
				setFormSubmitted(true);
				setFormData({
					name: "",
					email: "",
					company: "",
					number: "",
					message: "",
				});
				setTimeout(() => setFormSubmitted(false), 3000);
			},
			(err) => {
				setError("Failed to send message. Please try again later.");
				console.error(err.text);
			}
		);
	};

	return (
		<div className="min-h-screen bg-[url('/Background_Main2.jpeg')] bg-cover bg-center bg-no-repeat bg-fixed text-[#ceb072] relative overflow-hidden">
			<NavBar />

			{/* Mobile Hero Section - Full screen with background image and centered block */}
			<section className="md:hidden relative min-h-screen pt-16 overflow-hidden">
				{/* Background Image with subtle zoom animation */}
				<motion.div
					className="absolute inset-0"
					initial={{ scale: 1.1 }}
					animate={{ scale: 1 }}
					transition={{ duration: 1.5, ease: "easeOut" }}
				>
					<Image
						src="/Background_Main2.jpeg"
						alt="Golden Matcha Hero"
						fill
						priority
						className="object-cover"
					/>
				</motion.div>

				{/* Gradient overlay for depth */}
				<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

				{/* Floating decorative elements */}
				<motion.div
					className="absolute top-24 left-6 w-20 h-20 rounded-full bg-[#ceb072]/10 blur-2xl"
					animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
					transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
				/>
				<motion.div
					className="absolute bottom-32 right-8 w-28 h-28 rounded-full bg-[#ffb31a]/10 blur-2xl"
					animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
					transition={{
						duration: 5,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 1,
					}}
				/>

				{/* Centered Content Block */}
				<div className="absolute inset-0 flex items-center justify-center px-5">
					<motion.div
						className="bg-black/70 backdrop-blur-md rounded-3xl p-7 shadow-2xl border border-[#ceb072]/30 max-w-sm w-full relative overflow-hidden"
						initial={{ opacity: 0, y: 40, scale: 0.95 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
					>
						{/* Decorative corner accents */}
						<div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#ceb072]/40 rounded-tl-3xl" />
						<div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#ceb072]/40 rounded-br-3xl" />

						<div className="text-center relative z-10">
							{/* Optional: Add logo here */}
							{/* <Image src="/GOLDEN MATCHA LOGO.png" alt="Logo" width={80} height={80} className="mx-auto mb-4" /> */}

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.6 }}
							>
								<h1 className="font-serif text-3xl text-[#ceb072] leading-tight mb-2">
									A Golden Moment
								</h1>
								<h1 className="font-serif text-3xl leading-tight mb-4">
									with <span className="text-[#ffb31a]">Golden Matcha</span>
								</h1>
							</motion.div>

							<motion.p
								className="text-[#ceb072]/80 text-sm mb-6 leading-relaxed"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.6, delay: 0.9 }}
							>
								Premium Japanese matcha sourced directly from tea farms in
								Japan, bringing you the finest quality at an affordable price.
							</motion.p>

							<motion.button
								onClick={() => router.push("/our-story")}
								className="px-8 py-3 bg-gradient-to-r from-[#ceb072] to-[#e6c880] text-black rounded-full font-semibold text-sm shadow-lg shadow-[#ceb072]/20"
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 1.1 }}
								whileTap={{ scale: 0.95 }}
							>
								Our Story
							</motion.button>
						</div>
					</motion.div>
				</div>

				{/* Scroll Indicator */}
				<motion.div
					className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.5, duration: 0.6 }}
				>
					<span className="text-[#ceb072]/60 text-xs uppercase tracking-widest">
						Scroll
					</span>
					<motion.div
						animate={{ y: [0, 8, 0] }}
						transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
					>
						<svg
							className="w-5 h-5 text-[#ceb072]/60"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M19 14l-7 7m0 0l-7-7m7 7V3"
							/>
						</svg>
					</motion.div>
				</motion.div>
			</section>

			{/* Hero Section - Desktop only */}
			<motion.section
				id="home"
				className="hidden md:flex pt-20 min-h-screen items-center justify-end relative px-0 bg-black/77"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				viewport={{ amount: 0.3, once: true }}
			>
				<div className="w-full px-4 sm:px-6 lg:px-8">
					<div className="ml-auto max-w-2xl w-full">
						<div className="bg-black/77 rounded-3xl p-8 shadow-xl">
							<div className="relative z-20 py-20 text-center">
								<h2 className="font-serif text-4xl lg:text-5xl xl:text-5xl text-[#ceb072] leading-tight mb-4">
									A Golden Moment
									<br />
									with <span className="text-[#ffb31a]">Golden Matcha</span>
								</h2>

								<p className="font-['Calibri','Segoe_UI','system-ui'] text-l text-[#ceb072] mb-12 px-0">
									Premium Japanese matcha sourced directly from tea farms in
									Japan, <br />
									bringing you the finest quality at an affordable price.
								</p>

								<div className="flex flex-col sm:flex-row gap-4 justify-center">
									<button
										onClick={() => router.push("/our-story")}
										className="px-8 py-4 bg-[#ceb072] text-black rounded-full font-semibold hover:bg-yellow-600 transition transform hover:scale-105 text-base"
									>
										Our Story
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</motion.section>

			{/* Shop Section - Mobile optimized, desktop unchanged */}
			<motion.section
				id="shop"
				className="py-5 md:py-10 relative bg-black/77"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				viewport={{ amount: 0.1, once: true }}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-lg md:text-2xl text-[#ceb072] font-serif mb-12 md:mb-20 text-center uppercase">
						Our Golden Collection
					</h2>

					{/* CEREMONIAL GRADE Section */}
					<div className="mb-16 md:mb-20">
						<h3 className="text-xl md:text-3xl lg:text-4xl text-[#ceb072] font-serif mb-8 md:mb-12 text-center decoration-[#ceb072]">
							CEREMONIAL GRADE
						</h3>
						<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8">
							{ceremonialProducts.map((product, i) => (
								<MotionProductCard key={i} product={product} />
							))}
						</div>
					</div>

					{/* PREMIUM GRADE Section */}
					<div>
						<h3 className="text-xl md:text-3xl lg:text-4xl text-[#ceb072] font-serif mb-8 md:mb-12 text-center decoration-[#ceb072]">
							PREMIUM GRADE
						</h3>
						<div className="flex justify-center">
							<div className="w-full max-w-[200px] md:max-w-[265px]">
								{premiumProducts.map((product, i) => (
									<MotionProductCard key={i} product={product} />
								))}
							</div>
						</div>
					</div>

					{/* Shopee & TikTok Logos - Mobile optimized */}
					<div className="flex justify-center gap-4 md:gap-8 pt-8 md:pt-12 font-serif text-[#ceb072] text-sm md:text-lg lg:text-xl text-center px-4 uppercase">
						Find us on Shopee & Tiktok Shop:
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
								className="object-contain w-[80px] h-[25px] md:w-[120px] md:h-[30px]"
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
								className="object-contain w-[90px] h-[30px] md:w-[150px] md:h-[40px]"
							/>
						</motion.a>
					</div>
				</div>
			</motion.section>

			{/* Wholesale Section - Mobile optimized, desktop unchanged */}
			<motion.section
				id="wholesale"
				className="pt-1 md:pt-1 items-center justify-center relative py-1 md:py-0 bg-black/77"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				<div className="w-full py-12 md:py-20">
					<div className="bg-black/77 shadow-xl overflow-hidden">
						<div className="grid grid-cols-1 md:grid-cols-2">
							{/* Image Side */}
							<div className="relative h-48 md:h-auto min-h-[200px] md:min-h-0">
								<Image
									src="/Background_Main.jpeg"
									alt="Wholesale Matcha"
									fill
									className="object-cover"
								/>
							</div>

							{/* Text Side */}
							<div className="p-5 md:p-8 lg:p-12 xl:p-16 flex flex-col justify-center">
								<h2 className="text-xl md:text-3xl text-[#ceb072] font-serif mb-4 md:mb-8 text-center md:text-left uppercase">
									Wholesale
								</h2>
								<p className="text-sm md:text-sm lg:text-md text-[#ceb072] mb-4 md:mb-8 leading-relaxed font-serif text-center md:text-left">
									We specialise in providing high-quality matcha powder for
									businesses.
								</p>
								<p className="text-sm md:text-sm lg:text-md text-[#ceb072] mb-6 md:mb-8 leading-relaxed font-serif text-center md:text-left">
									At Golden Matcha, we're committed to partnering with you to
									discover the matcha that best complements your brand and
									supports your growth. Tell us what you're looking for and we
									will do our best to meet your needs.
								</p>

								{/* FIXED: Both buttons now have identical sizing */}
								<div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
									<button
										onClick={() =>
											router.push("/wholesale?scrollTo=get-a-quote")
										}
										className="w-full sm:w-auto px-6 py-3 bg-[#ceb072] text-black rounded-full font-semibold text-sm md:text-base hover:bg-yellow-600 transition transform hover:scale-105 shadow-lg"
									>
										Enquire Now
									</button>
									<button
										onClick={() => router.push("/wholesale")}
										className="w-full sm:w-auto px-6 py-3 bg-[#ceb072] text-black rounded-full font-semibold text-sm md:text-base hover:bg-yellow-600 transition transform hover:scale-105 shadow-lg"
									>
										Wholesale Catalogue
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</motion.section>

			{/* Contact Section - Mobile optimized */}
			<motion.section
				id="contact-us"
				className="relative"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				viewport={{
					once: true,
					margin: "0px 0px -200px 0px",
				}}
			>
				<div className="max-w-8xl mx-auto">
					<EnquiryForm />
				</div>
			</motion.section>

			{/* Footer */}
			<Footer />
		</div>
	);
}

export default function Home() {
	return (
		<Suspense
			fallback={
				<div className="min-h-screen bg-black flex items-center justify-center">
					<div className="text-[#ceb072] text-xl">Loading...</div>
				</div>
			}
		>
			<HomeContent />
		</Suspense>
	);
}
