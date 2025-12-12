"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";
import { SiInstagram } from "react-icons/si";
import emailjs from "emailjs-com";

interface ContactFormData extends Record<string, string> {
	name: string;
	email: string;
	company: string;
	number: string;
	quantity: string;
	message: string;
}

interface ContactUsSectionProps {
	id?: string;
}

export default function ContactUsSection({
	id = "get-a-quote",
}: ContactUsSectionProps) {
	const [formData, setFormData] = useState<ContactFormData>({
		name: "",
		email: "",
		company: "",
		number: "",
		quantity: "",
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
					quantity: "",
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
		<section id={id} className="py-50 relative bg-black/80">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-5xl text-[#ceb072] font-serif mb-20 text-center">
					Get a Quote
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
					{/* Social Links */}
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

					{/* Contact Form */}
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
							<input
								type="text"
								name="quantity"
								placeholder="Expected Quantity per Month (KG)"
								value={formData.quantity}
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
		</section>
	);
}
