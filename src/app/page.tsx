"use client";

export const dynamic = "force-dynamic";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image"; // Uncommented for image usage
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
	image?: string; // optional current image path string
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
			viewport={{ amount: 0.5, once: false, margin: "0px 0px -100px 0px" }}
		>
			<div className="relative h-64 flex items-center justify-center overflow-hidden transition-colors duration-300 rounded-t-lg">
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
			<div className="p-6 text-center">
				<h3 className="text-xl font-semibold text-[#ceb072] mb-4 font-serif">
					{product.name} {product.weight}
				</h3>
				{/* <p className="text-xl text-[#ceb072] mb-4">{product.weight}</p> */}
				<p className="text-xl text-[#ceb072] font-serif">
					<span className="text-[18px]">฿</span>
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

	// Replace your existing products array with these two arrays:
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
		<div className="min-h-screen bg-[url('/Background_Main2.jpeg')] bg-cover bg-center bg-no-repeat bg-fixed text-yellow-400 relative overflow-hidden">
			<NavBar />

			{/* Hero Section - Right Flush with Custom Fonts */}
			<motion.section
				id="home"
				className="pt-20 min-h-screen flex items-center justify-end relative"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				viewport={{ amount: 0.5, once: true, margin: "0px 0px -100px 0px" }}
			>
				<div className="w-full px-4 sm:px-6 lg:px-8">
					<div className="ml-auto max-w-2xl">
						<div className="bg-black/70 border border-[#ceb072]/30 rounded-3xl p-8 shadow-xl">
							<div className="absolute inset-0 bg-black/70 z-10"></div>
							<div className="relative z-20 py-20 text-center">
								<h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#ceb072] leading-tight mb-4">
									A Golden Moment
									<br />
									with <span className="text-yellow-500">Golden Matcha</span>
								</h2>

								<p className="font-['Calibri','Segoe_UI','system-ui'] text-xl text-[#ceb072] mb-12">
									Premium Japanese matcha sourced directly from tea farms in
									Japan, bringing you the finest quality at an affordable price.
								</p>

								<div className="flex flex-col sm:flex-row gap-4 justify-center">
									<button
										onClick={() => router.push("/our-story")}
										className="px-8 py-4 bg-[#ceb072] text-black rounded-full font-semibold hover:bg-yellow-600 transition transform hover:scale-105"
									>
										Our Story
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</motion.section>

			{/* Shop Section */}
			<motion.section
				id="shop"
				className="py-40 relative bg-black/80"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				viewport={{ amount: 0.2, once: false, margin: "0px 0px -100px 0px" }}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-5xl text-[#ceb072] font-serif mb-20 text-center">
						Our Golden Collection
					</h2>
					{/* CEREMONIAL GRADE Section */}
					<div className="mb-20">
						<h3 className="text-3xl md:text-4xl text-[#ceb072] font-serif mb-12 text-center underline underline-offset-8 decoration-2 decoration-[#ceb072]">
							CEREMONIAL GRADE
						</h3>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
							{ceremonialProducts.map((product, i) => (
								<MotionProductCard key={i} product={product} />
							))}
						</div>
					</div>
					{/* PREMIUM GRADE Section */}
					<div>
						<h3 className="text-3xl md:text-4xl text-[#ceb072] font-serif mb-12 text-center underline underline-offset-8 decoration-2 decoration-[#ceb072]">
							PREMIUM GRADE
						</h3>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-m mx-auto">
							{premiumProducts.map((product, i) => (
								<MotionProductCard key={i} product={product} />
							))}
						</div>
					</div>
					{/* Shopee & Lazada Logos - Bottom Center Same Line */}
					<div className="flex justify-center gap-8 pt-12 font-serif text-[#ceb072] text-xl md:text-2xl">
						Find us on Shopee & Tiktok Shop:
					</div>
					<div className="flex justify-center gap-8 pt-1 pb-8 ">
						<motion.a
							href="https://shopee.sg/lauboonheng96j?is_from_login=true"
							target="_blank"
							rel="noopener noreferrer"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							whileHover={{ scale: 1.1 }}
							transition={{ duration: 0.5 }}
							className="flex items-center p-3 hover:shadow-lg rounded-xl transition-all duration-300"
						>
							<Image
								src="/medias/shopee.webp"
								alt="Shopee"
								width={120}
								height={40}
								className="object-contain"
							/>
						</motion.a>

						<motion.a
							href="https://www.lazada.sg/shop/lau-boon-heng-kwei-teow-noodle-manufactory/?spm=a2o42.pdp_revamp.seller.1.7bd93d552gpxRX&itemId=1640680496&channelSource=pdp"
							target="_blank"
							rel="noopener noreferrer"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							whileHover={{ scale: 1.1 }}
							transition={{ duration: 0.5, delay: 0.1 }}
							className="flex items-center p-3 hover:shadow-lg rounded-xl transition-all duration-300"
						>
							<Image
								src="/medias/tiktok.svg"
								alt="Tiktok"
								width={150}
								height={50}
								className="object-contain"
							/>
						</motion.a>
					</div>
				</div>
			</motion.section>
			{/* Wholesale Hero Section - Split layout with image */}
			<motion.section
				id="wholesale"
				className="min-h-screen flex pt items-center justify-center relative"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				viewport={{ amount: 0.5, once: false, margin: "0px 0px -100px 0px" }}
			>
				<div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
					<div className="bg-black/70 border border-[#ceb072]/30 rounded-3xl shadow-xl overflow-hidden">
						<div className="absolute inset-0 bg-black/70 z-10"></div>
						<div className="relative z-20 grid grid-cols-1 md:grid-cols-2">
							{/* Image Side */}
							<div className="relative h-64 md:h-auto">
								<Image
									src="/Background_Main.jpeg"
									alt="Wholesale Matcha"
									fill
									className="object-cover"
								/>
							</div>

							{/* Text Side */}
							<div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
								<h2 className="text-5xl text-[#ceb072] font-serif mb-8 text-center md:text-left">
									Wholesale
								</h2>
								<p className="text-xl md:text-2xl text-[#ceb072] mb-8 leading-relaxed font-serif text-center md:text-left">
									For wholesale inquiries and pricing, please contact us via
									LINE or fill up our enquiry form. MOQ 1KG
								</p>

								<div className="space-y-4 mb-12">
									{wholesaleProducts.map((product, index) => (
										<div key={index} className="text-center md:text-left">
											<h3 className="text-xl md:text-2xl text-[#ceb072] font-serif">
												{product}
											</h3>
										</div>
									))}
								</div>

								<div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
									<button
										onClick={() =>
											router.push("/wholesale?scrollTo=get-a-quote")
										}
										className="px-10 py-5 bg-[#ceb072] text-black rounded-full font-semibold text-lg hover:bg-yellow-600 transition transform hover:scale-105 shadow-lg"
									>
										Enquire Now
									</button>
									<button
										onClick={() => router.push("/wholesale")}
										className="px-10 py-5 bg-[#ceb072] text-black rounded-full font-semibold text-lg hover:bg-yellow-600 transition transform hover:scale-105 shadow-lg"
									>
										Wholesale Catalogue
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</motion.section>
			{/* Contact Section */}
			<motion.section
				id="contact-us"
				className="relative bg-black/60"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				viewport={{ amount: 0.0, once: false, margin: "0px 0px -100px 0px" }}
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
					<div className="text-yellow-400 text-xl">Loading...</div>
				</div>
			}
		>
			<HomeContent />
		</Suspense>
	);
}
