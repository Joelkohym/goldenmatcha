"use client";

export const dynamic = "force-dynamic";

import React, { useState, useEffect, Suspense } from "react";
import { ShoppingBag, Send } from "lucide-react";
import Image from "next/image";
import { SiInstagram } from "react-icons/si";
import emailjs from "emailjs-com";
import { useRouter } from "next/navigation";
import NavBar from "../components/NavBar";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

interface Product {
	name: string;
	weight: string;
	price: string;
	color: string;
}

const MotionProductCard = ({ product }: { product: Product }) => {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<motion.div
			className="rounded-lg shadow-md overflow-hidden cursor-pointer transform transition hover:scale-105"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			style={{ backgroundColor: isHovered ? product.color : "#f5f5f4" }}
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			viewport={{ amount: 0.5, once: false, margin: "0px 0px -100px 0px" }}
		>
			<div className="h-64 flex items-center justify-center transition-colors duration-300">
				<div className="text-6xl">🍵</div>
			</div>
			<div className="p-6">
				<h3 className="text-xl font-semibold text-black mb-2">
					{product.name}
				</h3>
				<p className="text-black mb-4">{product.weight}</p>
				<p className="text-2xl font-bold text-yellow-400">{product.price}</p>
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
		}
	}, [scrollToSectionId]);

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

		// Use environment variables
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

	const products = [
		{
			name: "Uji Ceremonial Grade",
			weight: "25g",
			price: "THB 590",
			color: "#bfa94f",
		},
		{
			name: "Kagoshima Ceremonial Grade",
			weight: "25g",
			price: "THB 590",
			color: "#d1b24a",
		},
		{
			name: "Mie Ceremonial Grade",
			weight: "25g",
			price: "THB 590",
			color: "#e2c94e",
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
		<div className="min-h-screen bg-black text-yellow-400">
			<NavBar />

			{/* Hero Section */}
			<motion.section
				id="home"
				className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-yellow-900 to-black px-4 sm:px-6 lg:px-8 py-20 text-center"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				viewport={{ amount: 0.5, once: false, margin: "0px 0px -100px 0px" }}
			>
				<div className="max-w-7xl mx-auto">
					<Image
						src="/Golden Matcha Logo.jpg"
						alt="Golden Matcha Logo"
						width={200}
						height={200}
						className="rounded-full mx-auto"
						priority
					/>
					<h2 className="text-5xl md:text-7xl font-bold text-yellow-400 mb-6">
						A Golden Moment
						<br />
						with <span className="text-yellow-500">Golden Matcha</span>
					</h2>
					<p className="text-xl text-yellow-300 mb-12 max-w-2xl mx-auto">
						Premium Japanese matcha sourced directly from tea farms in Japan,
						bringing you the finest quality at an affordable price.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button
							onClick={() => router.push("/?scrollTo=our-story")}
							className="px-8 py-4 bg-yellow-500 text-black rounded-full font-semibold hover:bg-yellow-600 transition transform hover:scale-105"
						>
							Our Story
						</button>
						<button
							onClick={() => router.push("/products")}
							className="px-8 py-4 bg-yellow-700 text-black rounded-full font-semibold hover:bg-yellow-800 transition transform hover:scale-105 flex items-center justify-center gap-2"
						>
							<ShoppingBag size={20} />
							Shop Products
						</button>
					</div>
				</div>
			</motion.section>

			{/* Our Story Section */}
			<motion.section
				id="our-story"
				className="py-20 bg-black px-4 sm:px-6 lg:px-8"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				viewport={{ amount: 0.5, once: false, margin: "0px 0px -100px 0px" }}
			>
				<div className="max-w-4xl mx-auto">
					<h2 className="text-4xl font-bold text-yellow-400 mb-8 text-center">
						Our Story
					</h2>
					<div className="prose prose-lg max-w-none text-yellow-300 leading-relaxed space-y-6">
						<p className="text-xl font-semibold text-yellow-500">
							A Golden Moment with Golden Matcha
						</p>
						<p>
							Golden Matcha started off in the humble streets of Bangkok,
							founded by 2 individuals from very different backgrounds. One of
							us with a deep love of matcha since a very young age and the other
							started off his matcha journey after a simple sip which changed
							his perspective of Matcha.
						</p>
						<p>
							Intrigued by the different nodes that different varieties of
							matcha can offer, we explored matcha across Japan and China in
							search of quality products that we can share with you at an
							affordable price, in a time where Matcha has gained tremendous
							popularity.
						</p>
						<p>
							For matcha lovers, we would like to make matcha enjoyable and
							accessible for your daily ritual. At Golden Matcha, that's our
							goal and mission.
						</p>
						<p>
							We take pride in sourcing our Matcha from the tea farms and
							producers of Japan, building a relationship with them to ensure
							the high quality of matcha we promise to our community.
						</p>
						<p>
							With a mixture of creativity and expertise, we aim to serve you
							with a variety of the finest matcha that you can enjoy with your
							loved ones at the Golden Moment of your day.
						</p>
					</div>
				</div>
			</motion.section>

			{/* Shop Section */}
			<motion.section
				id="shop"
				className="py-20 bg-black px-4 sm:px-6 lg:px-8"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				viewport={{ amount: 0.5, once: false, margin: "0px 0px -100px 0px" }}
			>
				<div className="max-w-7xl mx-auto">
					<h2 className="text-4xl font-bold text-yellow-400 mb-12 text-center">
						Shop Our Matcha
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
						{products.map((product, i) => (
							<MotionProductCard key={i} product={product} />
						))}
					</div>
				</div>
			</motion.section>

			{/* Wholesale Section */}
			<motion.section
				id="wholesale"
				className="py-20 bg-black px-4 sm:px-6 lg:px-8"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				viewport={{ amount: 0.5, once: false, margin: "0px 0px -100px 0px" }}
			>
				<div className="max-w-4xl mx-auto">
					<h2 className="text-4xl font-bold text-yellow-400 mb-8 text-center">
						Wholesale
					</h2>
					<div className="bg-yellow-900 border-2 border-yellow-700 rounded-lg p-6 mb-8">
						<p className="text-center text-lg font-semibold text-yellow-500">
							For wholesale inquiries and pricing, please contact us via LINE
						</p>
						<p className="text-center text-yellow-400 mt-2">
							LINE: goldenmatchaofficial
						</p>
					</div>
					<div className="space-y-4">
						{wholesaleProducts.map((product, index) => (
							<div
								key={index}
								className="bg-yellow-800 border border-yellow-700 rounded-lg p-4 hover:shadow-md transition"
							>
								<h3 className="text-lg font-semibold text-yellow-300">
									{product}
								</h3>
							</div>
						))}
					</div>
				</div>
			</motion.section>

			{/* Contact Section */}
			<motion.section
				id="contact-Us"
				className="py-20 bg-black px-4 sm:px-6 lg:px-8"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				viewport={{ amount: 0.5, once: false, margin: "0px 0px -100px 0px" }}
			>
				<div className="max-w-4xl mx-auto">
					<h2 className="text-4xl font-bold text-yellow-400 mb-8 text-center">
						Contact Us
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
						<div className="bg-yellow-900 rounded-lg p-6 shadow-md">
							<h3 className="text-xl font-semibold mb-4 text-yellow-300">
								Connect with us
							</h3>
							<div className="space-y-3">
								<a
									href="https://line.me/ti/p/goldenmatchaofficial"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center text-green-600 hover:text-green-700 gap-2"
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
									className="flex items-center text-pink-600 hover:text-pink-700 gap-2"
								>
									<SiInstagram size={20} />
									<span className="font-semibold">Instagram:</span>
									<span className="ml-2">@goldenmatchaofficial</span>
								</a>
							</div>
						</div>

						<div className="bg-yellow-900 rounded-lg p-6 shadow-md">
							<form onSubmit={handleFormSubmit}>
								<input
									type="text"
									name="name"
									placeholder="Name"
									value={formData.name}
									onChange={handleFormChange}
									required
									className="w-full px-4 py-2 border border-yellow-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-yellow-800 text-yellow-200 mb-3"
								/>
								<input
									type="email"
									name="email"
									placeholder="Email"
									value={formData.email}
									onChange={handleFormChange}
									required
									className="w-full px-4 py-2 border border-yellow-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-yellow-800 text-yellow-200 mb-3"
								/>
								<input
									type="text"
									name="company"
									placeholder="Company"
									value={formData.company}
									onChange={handleFormChange}
									className="w-full px-4 py-2 border border-yellow-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-yellow-800 text-yellow-200 mb-3"
								/>
								<input
									type="text"
									name="number"
									placeholder="Contact Number"
									value={formData.number}
									onChange={handleFormChange}
									className="w-full px-4 py-2 border border-yellow-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-yellow-800 text-yellow-200 mb-3"
								/>
								<textarea
									name="message"
									placeholder="Your Message"
									value={formData.message}
									onChange={handleFormChange}
									rows={4}
									required
									className="w-full px-4 py-2 border border-yellow-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-yellow-800 text-yellow-200 mb-3"
								/>
								<button
									type="submit"
									className="w-full px-6 py-3 bg-yellow-600 text-black rounded-lg font-semibold hover:bg-yellow-700 transition flex items-center justify-center gap-2 mt-4"
								>
									<Send size={20} />
									Send Message
								</button>
								{formSubmitted && (
									<p className="text-green-600 text-center font-semibold mt-2">
										Thank you! We'll be in touch soon.
									</p>
								)}
								{error && (
									<p className="text-red-600 text-center font-semibold mt-2">
										{error}
									</p>
								)}
							</form>
						</div>
					</div>
				</div>
			</motion.section>

			{/* Footer */}
			<footer className="bg-black text-yellow-400 py-8 px-4 sm:px-6 lg:px-8 text-center">
				<p className="text-lg font-semibold mb-2">Golden Matcha</p>
				<p className="text-yellow-300">Premium Japanese Matcha from Bangkok</p>
				<p className="text-yellow-600 text-sm mt-4">
					© 2024 Golden Matcha. All rights reserved.
				</p>
			</footer>
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
