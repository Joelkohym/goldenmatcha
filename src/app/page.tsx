"use client";

export const dynamic = "force-dynamic";

import React, { useState, useEffect, Suspense } from "react";
import { ShoppingBag, Send } from "lucide-react";
import Image from "next/image"; // Uncommented for image usage
import { SiInstagram } from "react-icons/si";
import emailjs from "emailjs-com";
import { useRouter } from "next/navigation";
import NavBar from "../components/NavBar";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
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
				className="pt-16 min-h-screen flex items-center justify-center relative"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				viewport={{ amount: 0.5, once: false, margin: "0px 0px -100px 0px" }}
			>
				<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
					<div className="hidden md:block" />
					<div className="md:col-span-2">
						<div className="space-y-10">
							<div className="bg-black/70 border border-[#ceb072]/30 rounded-3xl p-8 shadow-xl">
								<div className="absolute inset-0 bg-black/70 z-10"></div>
								<div className="max-w-xl mx-1 relative z-20 px-4 sm:px-6 lg:px-8 py-20 text-center">
									<h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#ceb072] leading-tight mb-4">
										A Golden Moment
										<br />
										with <span className="text-yellow-500">Golden Matcha</span>
									</h2>

									<p className="font-['Calibri','Segoe_UI','system-ui'] text-xl text-[#ceb072] mb-12 max-w-2xl mx-auto">
										Premium Japanese matcha sourced directly from tea farms in
										Japan, bringing you the finest quality at an affordable
										price.
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
				</div>
			</motion.section>

			{/* Shop Section */}
			<motion.section
				id="shop"
				className="py-40 relative bg-black/80"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				viewport={{ amount: 0.5, once: false, margin: "0px 0px -100px 0px" }}
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
				</div>
			</motion.section>

			{/* Wholesale Hero Section - Increased button gap */}
			<motion.section
				id="wholesale"
				className="min-h-screen flex items-center justify-center relative"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				viewport={{ amount: 0.5, once: false, margin: "0px 0px -100px 0px" }}
			>
				<div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="bg-black/70 border border-[#ceb072]/30 rounded-3xl p-12 shadow-xl">
						<div className="absolute inset-0 bg-black/70 z-10"></div>
						<div className="max-w-4xl mx-auto relative z-20 px-8 sm:px-12 lg:px-16 pt-2 pb-24 text-center">
							<h2 className="text-5xl text-[#ceb072] font-serif mb-20 text-center">
								Wholesale
							</h2>
							<p className="text-xl md:text-2xl text-[#ceb072] mb-8 leading-relaxed font-serif">
								For wholesale inquiries and pricing, please contact us via LINE
								or fill up our enquiry form. MOQ 1KG
								<br className="sm:hidden" />
								<span className="block sm:inline"></span>
							</p>

							<div className="space-y-4 max-w-2xl mx-auto mb-20">
								{" "}
								{/* Added mb-20 for button spacing */}
								{wholesaleProducts.map((product, index) => (
									<div key={index} className="text-center">
										<h3 className="text-xl md:text-2xl text-[#ceb072] font-serif">
											{product}
										</h3>
									</div>
								))}
							</div>

							<div className="flex flex-col sm:flex-row gap-6 justify-center">
								{" "}
								{/* Fixed gap-1 → gap-6 */}
								<button
									onClick={() => router.push("/our-story")}
									className="px-10 py-5 bg-[#ceb072] text-black rounded-full font-semibold text-lg hover:bg-yellow-600 transition transform hover:scale-105 shadow-lg"
								>
									Order Now
								</button>
							</div>
						</div>
					</div>
				</div>
			</motion.section>

			{/* Contact Section */}
			<motion.section
				id="contact-Us"
				className="py-20 relative bg-black/80"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				viewport={{ amount: 0.5, once: false, margin: "0px 0px -100px 0px" }}
			>
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-5xl text-[#ceb072] font-serif mb-20 text-center">
						Contact Us
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
						<div className="bg-black rounded-lg p-6 shadow-md">
							<h3 className="text-xl font-semibold mb-4 text-[#ceb072]">
								Connect with us
							</h3>
							<div className="space-y-3">
								<a
									href="https://line.me/ti/p/goldenmatchaofficial"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center text-[#ceb072] hover:text-green-300 gap-2"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										fill="currentColor"
										viewBox="0 0 24 24"
										className="inline-block"
									>
										<path d="M12 2C6.48 2 2 5.91 2 10.53c0 2.63 1.77 4.93 4.45 6.23-.13.9-.7 2.8-1.3 4.1 0 0-.09.38.52.18 1.54-1.18 2.71-2.13 3.77-2.86A10.5 10.5 0 0012 19c5.52 0 10-3.91 10-8.47S17.52 2 12 2z" />
									</svg>
									<span className="font-semibold">LINE:</span>
									<span className="ml-2">goldenmatchaofficial</span>
								</a>

								<a
									href="https://instagram.com/goldenmatchaofficial"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center text-[#ceb072] hover:text-pink-300 gap-2"
								>
									<SiInstagram size={20} />
									<span className="font-semibold">Instagram:</span>
									<span className="ml-2">@goldenmatchaofficial</span>
								</a>
							</div>
						</div>

						<div className="bg-black rounded-lg p-6 shadow-md">
							<form onSubmit={handleFormSubmit}>
								<input
									type="text"
									name="name"
									placeholder="Name"
									value={formData.name}
									onChange={handleFormChange}
									required
									className="w-full px-4 py-2 border border-black rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-[#ceb072] text-black mb-3"
								/>
								<input
									type="email"
									name="email"
									placeholder="Email"
									value={formData.email}
									onChange={handleFormChange}
									required
									className="w-full px-4 py-2 border border-yellow-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-[#ceb072] text-black mb-3"
								/>
								<input
									type="text"
									name="company"
									placeholder="Company"
									value={formData.company}
									onChange={handleFormChange}
									className="w-full px-4 py-2 border border-yellow-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-[#ceb072] text-black mb-3"
								/>
								<input
									type="text"
									name="number"
									placeholder="Contact Number"
									value={formData.number}
									onChange={handleFormChange}
									className="w-full px-4 py-2 border border-yellow-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-[#ceb072] text-black mb-3"
								/>
								<textarea
									name="message"
									placeholder="Your Message"
									value={formData.message}
									onChange={handleFormChange}
									rows={4}
									required
									className="w-full px-4 py-2 border border-yellow-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-[#ceb072] text-black mb-3"
								/>
								<button
									type="submit"
									className="w-full px-6 py-3 bg-yellow-600 text-black rounded-lg font-semibold hover:bg-yellow-700 transition flex items-center justify-center gap-2 mt-4"
								>
									<Send size={20} />
									Send Message
								</button>
								{formSubmitted && (
									<p className="text-green-400 text-center font-semibold mt-2">
										Thank you! We'll be in touch soon.
									</p>
								)}
								{error && (
									<p className="text-red-400 text-center font-semibold mt-2">
										{error}
									</p>
								)}
							</form>
						</div>
					</div>
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
