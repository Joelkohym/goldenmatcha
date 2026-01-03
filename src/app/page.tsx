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

interface Product {
	name: string;
	weight: string;
	price: string;
	color: string;
	image?: string;
	link: string;
}

const MotionProductCard = ({ product }: { product: Product }) => {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<motion.div
			className="rounded-lg shadow-md overflow-hidden cursor-pointer transform transition hover:scale-105 relative"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			style={{ backgroundColor: isHovered ? product.color : "black" }}
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			viewport={{ amount: 0.3, once: false }}
		>
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
				<h3 className="text-lg md:text-xl font-semibold text-[#ceb072] mb-2 md:mb-4 font-serif">
					{product.name} {product.weight}
				</h3>
				<p className="text-lg md:text-xl text-[#ceb072] font-serif">
					<span className="text-[16px] md:text-[18px]">฿</span>
					{product.price}
				</p>
			</div>
		</motion.div>
	);
};

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

	const ceremonialProducts: Product[] = [
		{
			name: "Uji Ceremonial Grade",
			weight: "25g",
			price: "699",
			color: "black",
			image: "/Background_Main.jpeg",
			link: "",
		},
		{
			name: "Kagoshima Ceremonial Grade",
			weight: "25g",
			price: "699",
			color: "black",
			image: "/Background_Main2.jpeg",
			link: "",
		},
		{
			name: "Mie Ceremonial Grade",
			weight: "25g",
			price: "699",
			color: "black",
			image: "/Golden Matcha Logo.jpg",
			link: "",
		},
	];

	const premiumProducts: Product[] = [
		{
			name: "Golden Yame",
			weight: "30g",
			price: "499",
			color: "black",
			image: "/Golden Matcha Logo.jpg",
			link: "",
		},
	];

	const wholesaleProducts = [
		"Yame A Premium",
		"Yame B Premium",
		"Yame A Ceremonial (1st Harvest Okumidori)",
		"Uji A Ceremonial (1st Harvest Okumidori)",
		"Top 1 Ceremonial (From Zhejiang, Hangzhou)",
	];

	return (
		<div className="min-h-screen bg-[url('/Background_Main2.jpeg')] bg-cover bg-center bg-no-repeat bg-fixed text-[#ceb072] relative overflow-hidden">
			<NavBar />

			{/* Hero Section - Mobile optimized, desktop unchanged */}
			<motion.section
				id="home"
				className="pt-20 min-h-screen flex items-center md:justify-end justify-center relative px-4 md:px-0"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				viewport={{ amount: 0.3, once: true }}
			>
				<div className="w-full md:px-4 sm:px-6 lg:px-8">
					<div className="md:ml-auto md:max-w-2xl w-full max-w-xl">
						<div className="bg-black/70 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl">
							<div className="relative z-20 py-12 md:py-20 text-center">
								<h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#ceb072] leading-tight mb-4">
									A Golden Moment
									<br />
									with <span className="text-[#ceb072]">Golden Matcha</span>
								</h2>

								<p className="font-['Calibri','Segoe_UI','system-ui'] text-base md:text-xl text-[#ceb072] mb-8 md:mb-12 px-2 md:px-0">
									Premium Japanese matcha sourced directly from tea farms in
									Japan, bringing you the finest quality at an affordable price.
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
				className="py-20 md:py-40 relative bg-black/80"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				viewport={{ amount: 0.1, once: false }}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl md:text-5xl text-[#ceb072] font-serif mb-12 md:mb-20 text-center">
						Our Golden Collection
					</h2>

					{/* CEREMONIAL GRADE Section */}
					<div className="mb-16 md:mb-20">
						<h3 className="text-2xl md:text-3xl lg:text-4xl text-[#ceb072] font-serif mb-8 md:mb-12 text-center underline underline-offset-8 decoration-2 decoration-[#ceb072]">
							CEREMONIAL GRADE
						</h3>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
							{ceremonialProducts.map((product, i) => (
								<MotionProductCard key={i} product={product} />
							))}
						</div>
					</div>

					{/* PREMIUM GRADE Section */}
					<div>
						<h3 className="text-2xl md:text-3xl lg:text-4xl text-[#ceb072] font-serif mb-8 md:mb-12 text-center underline underline-offset-8 decoration-2 decoration-[#ceb072]">
							PREMIUM GRADE
						</h3>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-sm sm:max-w-md md:max-w-none mx-auto">
							{premiumProducts.map((product, i) => (
								<MotionProductCard key={i} product={product} />
							))}
						</div>
					</div>

					{/* Shopee & TikTok Logos - Mobile optimized */}
					<div className="flex justify-center gap-4 md:gap-8 pt-8 md:pt-12 font-serif text-[#ceb072] text-lg md:text-xl lg:text-2xl text-center px-4">
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
								width={120}
								height={40}
								className="object-contain w-[90px] h-[30px] md:w-[120px] md:h-[40px]"
							/>
						</motion.a>

						<motion.a
							href="https://www.lazada.sg/shop/lau-boon-heng-kwei-teow-noodle-manufactory/?spm=a2o42.pdp_revamp.seller.1.7bd93d552gpxRX&itemId=1640680496&channelSource=pdp"
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
								width={150}
								height={50}
								className="object-contain w-[110px] h-[37px] md:w-[150px] md:h-[50px]"
							/>
						</motion.a>
					</div>
				</div>
			</motion.section>

			{/* Wholesale Section - Mobile optimized, desktop unchanged */}
			<motion.section
				id="wholesale"
				className="min-h-screen flex items-center justify-center relative py-12 md:py-0 bg-black/80"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				viewport={{ amount: 0.1, once: false }}
			>
				<div className="max-w-7xl lg:max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
					<div className="bg-black/70 rounded-2xl md:rounded-3xl shadow-xl overflow-hidden">
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
								<h2 className="text-3xl md:text-5xl text-[#ceb072] font-serif mb-6 md:mb-8 text-center md:text-left">
									Wholesale
								</h2>
								<p className="text-base md:text-xl lg:text-2xl text-[#ceb072] mb-6 md:mb-8 leading-relaxed font-serif text-center md:text-left">
									For wholesale inquiries and pricing, please contact us via
									LINE or fill up our enquiry form. MOQ 1KG
								</p>

								<div className="space-y-2 md:space-y-4 mb-6 md:mb-12">
									{wholesaleProducts.map((product, index) => (
										<div key={index} className="text-center md:text-left">
											<h3 className="text-sm md:text-xl lg:text-2xl text-[#ceb072] font-serif">
												{product}
											</h3>
										</div>
									))}
								</div>

								<div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-6 justify-center md:justify-start">
									<button
										onClick={() =>
											router.push("/wholesale?scrollTo=get-a-quote")
										}
										className="px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 bg-[#ceb072] text-black rounded-full font-semibold text-sm md:text-base lg:text-lg hover:bg-yellow-600 transition transform hover:scale-105 shadow-lg"
									>
										Enquire Now
									</button>
									<button
										onClick={() => router.push("/wholesale")}
										className="px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 bg-[#ceb072] text-black rounded-full font-semibold text-sm md:text-base lg:text-lg hover:bg-yellow-600 transition transform hover:scale-105 shadow-lg"
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
				className="relative bg-black/1"
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
