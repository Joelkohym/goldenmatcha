// app/page.tsx
"use client";

import React, { useState } from "react";
import { Menu, X, ShoppingBag, Send } from "lucide-react";

export default function Home() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		contact: "",
		comment: "",
	});
	const [formSubmitted, setFormSubmitted] = useState(false);

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		element?.scrollIntoView({ behavior: "smooth" });
		setIsMenuOpen(false);
	};

	const handleFormChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleFormSubmit = () => {
		// In production, this would send to backend/email service
		console.log("Form submitted:", formData);
		setFormSubmitted(true);
		setTimeout(() => setFormSubmitted(false), 3000);
		setFormData({ name: "", email: "", contact: "", comment: "" });
	};

	const products = [
		{
			name: "Uji Ceremonial Grade",
			weight: "25g",
			price: "THB 590",
			color: "#7CB342",
		},
		{
			name: "Kagoshima Ceremonial Grade",
			weight: "25g",
			price: "THB 590",
			color: "#8BC34A",
		},
		{
			name: "Mie Ceremonial Grade",
			weight: "25g",
			price: "THB 590",
			color: "#9CCC65",
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
		<div className="min-h-screen bg-stone-50">
			{/* Navigation */}
			<nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-16">
						<div className="flex-shrink-0">
							<h1 className="text-2xl font-bold text-amber-600">
								Golden Matcha
							</h1>
						</div>

						{/* Desktop Navigation */}
						<div className="hidden md:flex space-x-8">
							<button
								onClick={() => scrollToSection("home")}
								className="text-gray-700 hover:text-amber-600 transition"
							>
								Home
							</button>
							<button
								onClick={() => scrollToSection("our-story")}
								className="text-gray-700 hover:text-amber-600 transition"
							>
								Our Story
							</button>
							<button
								onClick={() => scrollToSection("shop")}
								className="text-gray-700 hover:text-amber-600 transition"
							>
								Shop
							</button>
							<button
								onClick={() => scrollToSection("wholesale")}
								className="text-gray-700 hover:text-amber-600 transition"
							>
								Wholesale
							</button>
							<button
								onClick={() => scrollToSection("contact")}
								className="text-gray-700 hover:text-amber-600 transition"
							>
								Contact
							</button>
						</div>

						{/* Mobile menu button */}
						<div className="md:hidden">
							<button
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								className="text-gray-700"
							>
								{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
							</button>
						</div>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="md:hidden bg-white border-t">
						<div className="px-2 pt-2 pb-3 space-y-1">
							<button
								onClick={() => scrollToSection("home")}
								className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-amber-50"
							>
								Home
							</button>
							<button
								onClick={() => scrollToSection("our-story")}
								className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-amber-50"
							>
								Our Story
							</button>
							<button
								onClick={() => scrollToSection("shop")}
								className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-amber-50"
							>
								Shop
							</button>
							<button
								onClick={() => scrollToSection("wholesale")}
								className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-amber-50"
							>
								Wholesale
							</button>
							<button
								onClick={() => scrollToSection("contact")}
								className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-amber-50"
							>
								Contact
							</button>
						</div>
					</div>
				)}
			</nav>

			{/* Hero Section */}
			<section
				id="home"
				className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-green-50 to-stone-50"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
					<h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
						A Golden Moment
						<br />
						with <span className="text-amber-600">Golden Matcha</span>
					</h2>
					<p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
						Premium Japanese matcha sourced directly from tea farms in Japan,
						bringing you the finest quality at an affordable price.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button
							onClick={() => scrollToSection("our-story")}
							className="px-8 py-4 bg-amber-600 text-white rounded-full font-semibold hover:bg-amber-700 transition transform hover:scale-105"
						>
							Our Story
						</button>
						<button
							onClick={() => scrollToSection("shop")}
							className="px-8 py-4 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition transform hover:scale-105 flex items-center justify-center gap-2"
						>
							<ShoppingBag size={20} />
							Shop Products
						</button>
					</div>
				</div>
			</section>

			{/* Our Story Section */}
			<section id="our-story" className="py-20 bg-white">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
						Our Story
					</h2>
					<div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
						<p className="text-xl font-semibold text-amber-600">
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
			</section>

			{/* Shop Section */}
			<section id="shop" className="py-20 bg-stone-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
						Shop Our Matcha
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						{products.map((product, index) => (
							<ProductCard key={index} product={product} />
						))}
					</div>
				</div>
			</section>

			{/* Wholesale Section */}
			<section id="wholesale" className="py-20 bg-white">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
						Wholesale
					</h2>
					<div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-6 mb-8">
						<p className="text-center text-lg font-semibold text-amber-900">
							For wholesale inquiries and pricing, please contact us via LINE
						</p>
						<p className="text-center text-amber-700 mt-2">
							LINE: goldenmatchaofficial
						</p>
					</div>
					<div className="space-y-4">
						{wholesaleProducts.map((product, index) => (
							<div
								key={index}
								className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
							>
								<h3 className="text-lg font-semibold text-gray-900">
									{product}
								</h3>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="py-20 bg-stone-50">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
						Contact Us
					</h2>

					<div className="grid md:grid-cols-2 gap-8 mb-8">
						<div className="bg-white rounded-lg p-6 shadow-md">
							<h3 className="text-xl font-semibold mb-4 text-gray-900">
								Connect with us
							</h3>
							<div className="space-y-3">
								<a
									href="https://line.me/ti/p/goldenmatchaofficial"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center text-green-600 hover:text-green-700"
								>
									<span className="font-semibold">LINE:</span>
									<span className="ml-2">goldenmatchaofficial</span>
								</a>
								<a
									href="https://instagram.com/goldenmatchaofficial"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center text-pink-600 hover:text-pink-700"
								>
									<span className="font-semibold">Instagram:</span>
									<span className="ml-2">@goldenmatchaofficial</span>
								</a>
							</div>
						</div>

						<div className="bg-white rounded-lg p-6 shadow-md">
							<div className="space-y-4">
								<div>
									<input
										type="text"
										name="name"
										placeholder="Name"
										value={formData.name}
										onChange={handleFormChange}
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
									/>
								</div>
								<div>
									<input
										type="email"
										name="email"
										placeholder="Email"
										value={formData.email}
										onChange={handleFormChange}
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
									/>
								</div>
								<div>
									<input
										type="text"
										name="contact"
										placeholder="Contact Number"
										value={formData.contact}
										onChange={handleFormChange}
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
									/>
								</div>
								<div>
									<textarea
										name="comment"
										placeholder="Your Message"
										value={formData.comment}
										onChange={handleFormChange}
										rows={4}
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
									/>
								</div>
								<button
									onClick={handleFormSubmit}
									className="w-full px-6 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition flex items-center justify-center gap-2"
								>
									<Send size={20} />
									Send Message
								</button>
								{formSubmitted && (
									<p className="text-green-600 text-center font-semibold">
										Thank you! We'll be in touch soon.
									</p>
								)}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gray-900 text-white py-8">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<p className="text-lg font-semibold text-amber-500 mb-2">
						Golden Matcha
					</p>
					<p className="text-gray-400">Premium Japanese Matcha from Bangkok</p>
					<p className="text-gray-500 text-sm mt-4">
						© 2024 Golden Matcha. All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	);
}

interface Product {
	name: string;
	weight: string;
	price: string;
	color: string;
}

const ProductCard = ({ product }: { product: Product }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className="bg-white rounded-lg shadow-md overflow-hidden transform transition hover:scale-105 cursor-pointer"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div
				className="h-64 flex items-center justify-center transition-colors duration-300"
				style={{ backgroundColor: isHovered ? product.color : "#f5f5f4" }}
			>
				<div className="text-6xl">🍵</div>
			</div>
			<div className="p-6">
				<h3 className="text-xl font-semibold text-gray-900 mb-2">
					{product.name}
				</h3>
				<p className="text-gray-600 mb-4">{product.weight}</p>
				<p className="text-2xl font-bold text-amber-600">{product.price}</p>
			</div>
		</div>
	);
};
