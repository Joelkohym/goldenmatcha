"use client";

import React, { useState } from "react";
import { ShoppingBag, Send } from "lucide-react";
import Image from "next/image";
import { SiInstagram } from "react-icons/si";
import NavBar from "./components/NavBar";

export default function Home() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		contact: "",
		comment: "",
	});
	const [formSubmitted, setFormSubmitted] = useState(false);

	const handleFormChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleFormSubmit = () => {
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

			<section
				id="home"
				className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-yellow-900 to-black"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
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
						<button className="px-8 py-4 bg-yellow-500 text-black rounded-full font-semibold hover:bg-yellow-600 transition transform hover:scale-105">
							Our Story
						</button>
						<button
							onClick={() => {
								// Next.js client navigation for shop
								if (typeof window !== "undefined")
									window.location.href = "/products";
							}}
							className="px-8 py-4 bg-yellow-700 text-black rounded-full font-semibold hover:bg-yellow-800 transition transform hover:scale-105 flex items-center justify-center gap-2"
						>
							<ShoppingBag size={20} />
							Shop Products
						</button>
					</div>
				</div>
			</section>

			{/* Other sections like Our Story, Shop, Wholesale, Contact go here as in your code, using your theme and styles */}

			{/* Contact Section (with icons) */}
			<section id="contact" className="py-20 bg-black">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-4xl font-bold text-yellow-400 mb-8 text-center">
						Contact Us
					</h2>

					<div className="grid md:grid-cols-2 gap-8 mb-8">
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
									{/* LINE SVG icon */}
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

						{/* Form here with your form controls styled as before */}
					</div>
				</div>
			</section>
		</div>
	);
}
