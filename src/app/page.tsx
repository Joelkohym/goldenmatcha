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

	// const ceremonialProducts: Product[] = [
	// 	{
	// 		name: "Yame Okumidori Ceremonial Grade",
	// 		weight: "25g",
	// 		price: "699",
	// 		color: "black",
	// 		image: "/Golden Matcha Logo.jpg",
	// 		link: "",
	// 		awardWinning: true,
	// 		hoverImage: "/Golden Yame v2.jpg", // 👈 ADD THIS
	// 	},
	// 	{
	// 		name: "Yame Sakimidori Ceremonial Grade",
	// 		weight: "25g",
	// 		price: "699",
	// 		color: "black",
	// 		image: "/Golden Matcha Logo.jpg",
	// 		link: "",
	// 		hoverImage: "/Golden Yame v2.jpg",
	// 	},
	// 	{
	// 		name: "Uji Gold Ceremonial Grade",
	// 		weight: "25g",
	// 		price: "699",
	// 		color: "black",
	// 		image: "/Uji Final v2.jpg",
	// 		link: "",
	// 		hoverImage: "/Uji v2.jpg",
	// 	},
	// 	{
	// 		name: "Kagoshima Gold Ceremonial Grade",
	// 		weight: "25g",
	// 		price: "699",
	// 		color: "black",
	// 		image: "/Kago Final v2.jpg",
	// 		link: "",
	// 		hoverImage: "/Kago v2.jpg",
	// 	},
	// 	{
	// 		name: "Mie Gold Ceremonial Grade",
	// 		weight: "25g",
	// 		price: "699",
	// 		color: "black",
	// 		image: "/Mie Final v2.jpg",
	// 		link: "",
	// 		hoverImage: "/Mie v2.jpg",
	// 	},
	// ];

	// const premiumProducts: Product[] = [
	// 	{
	// 		name: "Golden Yame Premium Blend",
	// 		weight: "30g",
	// 		price: "499",
	// 		color: "black",
	// 		image: "/Golden Yame Final v2.jpg",
	// 		link: "",
	// 		hoverImage: "/Golden Yame v2.jpg",
	// 	},
	// ];

	return (
		<div className="min-h-screen bg-[url('/Background_Main2.jpeg')] bg-cover bg-center bg-no-repeat bg-fixed text-[#ceb072] relative overflow-hidden">
			<NavBar />

			{/* Hero Section - Mobile optimized, desktop unchanged */}
			<motion.section
				id="home"
				className="pt-20 min-h-screen flex items-center md:justify-end justify-center relative px-4 md:px-0 bg-black/77"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				viewport={{ amount: 0.3, once: true }}
			>
				<div className="w-full md:px-4 sm:px-6 lg:px-8">
					<div className="md:ml-auto md:max-w-2xl w-full max-w-xl">
						<div className="bg-black/77 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl">
							<div className="relative z-20 py-12 md:py-20 text-center">
								<h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-[#ceb072] leading-tight mb-4">
									A Golden Moment
									<br />
									with <span className="text-[#ffb31a]">Golden Matcha</span>
								</h2>

								<p className="font-['Calibri','Segoe_UI','system-ui'] text-base md:text-l text-[#ceb072] mb-8 md:mb-12 px-2 md:px-0">
									Premium Japanese matcha sourced directly from tea farms in
									Japan, <br></br>bringing you the finest quality at an
									affordable price.
								</p>

								<div className="flex flex-col sm:flex-row gap-4 justify-center">
									<button
										onClick={() => router.push("/our-story")}
										className="px-6 md:px-8 py-3 md:py-4 bg-[#ceb072] text-black rounded-full font-semibold hover:bg-yellow-600 transition transform hover:scale-105 text-sm md:text-base"
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
						<h3 className="text-2xl md:text-3xl lg:text-4xl text-[#ceb072] font-serif mb-8 md:mb-12 text-center decoration-[#ceb072]">
							CEREMONIAL GRADE
						</h3>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
							{ceremonialProducts.map((product, i) => (
								<MotionProductCard key={i} product={product} />
							))}
						</div>
					</div>

					{/* PREMIUM GRADE Section */}
					<div>
						<h3 className="text-2xl md:text-3xl lg:text-4xl text-[#ceb072] font-serif mb-8 md:mb-12 text-center decoration-[#ceb072]">
							PREMIUM GRADE
						</h3>
						<div className="flex justify-center">
							<div className="w-full max-w-[265px]">
								{premiumProducts.map((product, i) => (
									<MotionProductCard key={i} product={product} />
								))}
							</div>
						</div>
					</div>

					{/* Shopee & TikTok Logos - Mobile optimized */}
					<div className="flex justify-center gap-4 md:gap-8 pt-8 md:pt-12 font-serif text-[#ceb072] text-md md:text-lg lg:text-xl text-center px-4 uppercase">
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
				<div className="w-full py-20">
					<div className="bg-black/77 shadow-xl overflow-hidden">
						<div className="grid grid-cols-1 md:grid-cols-2">
							{/* Image Side */}
							<div className="relative h-56 md:h-auto min-h-[250px] md:min-h-0">
								<Image
									src="/Background_Main.jpeg"
									alt="Wholesale Matcha"
									fill
									className="object-cover"
								/>
							</div>

							{/* Text Side */}
							<div className="p-6 md:p-8 lg:p-12 xl:p-16 flex flex-col justify-center">
								<h2 className="text-xl md:text-3xl text-[#ceb072] font-serif mb-6 md:mb-8 text-center md:text-left uppercase">
									Wholesale
								</h2>
								<p className="text-base md:text-sm lg:text-md text-[#ceb072] mb-6 md:mb-8 leading-relaxed font-serif text-center md:text-left">
									We specialise in providing high-quality matcha powder for
									businesses.
								</p>
								<p className="text-base md:text-sm lg:text-md text-[#ceb072] mb-6 md:mb-8 leading-relaxed font-serif text-center md:text-left">
									At Golden Matcha, we’re committed to partnering with you to
									discover the matcha that best complements your brand and
									supports your growth. Tell us what you're looking for and we
									will do our best to meet your needs.
								</p>

								{/* <div className="space-y-2 md:space-y-4 mb-6 md:mb-12">
									{wholesaleProducts.map((product, index) => (
										<div key={index} className="text-center md:text-left">
											<h3 className="text-sm md:text-xl lg:text-2xl text-[#ceb072] font-serif">
												{product}
											</h3>
										</div>
									))}
								</div> */}

								<div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
									<button
										onClick={() =>
											router.push("/wholesale?scrollTo=get-a-quote")
										}
										className="px-5 md:px-6 lg:px-6py-2.5 md:py-3 lg:py-2.5 bg-[#ceb072] text-black rounded-full font-semibold text-sm md:text-base lg:text-md hover:bg-yellow-600 transition transform hover:scale-105 shadow-lg"
									>
										Enquire Now
									</button>
									<button
										onClick={() => router.push("/wholesale")}
										className="px-5 md:px-6 lg:px-6 py-2.5 md:py-3 lg:py-2.5 bg-[#ceb072] text-black rounded-full font-semibold text-sm md:text-base lg:text-md hover:bg-yellow-600 transition transform hover:scale-105 shadow-lg"
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
