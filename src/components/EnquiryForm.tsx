"use client";

import React, { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { SiInstagram, SiTiktok, SiShopee, SiFacebook } from "react-icons/si";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface EnquiryFormData extends Record<string, string> {
	name: string;
	email: string;
	company: string;
	number: string;
	quantity: string;
	message: string;
}

interface EnquiryFormProps {
	onSuccess?: () => void;
}

export default function EnquiryForm({ onSuccess }: EnquiryFormProps) {
	const pathname = usePathname();
	const isWholesalePage = pathname === "/wholesale";

	const [formData, setFormData] = useState<EnquiryFormData>({
		name: "",
		email: "",
		company: "",
		number: "",
		quantity: "",
		message: "",
	});
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState("");

	const handleFormChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleFormSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError("");
		setIsSubmitting(true);

		const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
		const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
		const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

		if (!serviceId || !templateId || !publicKey) {
			setError("Email service is not configured properly.");
			setIsSubmitting(false);
			return;
		}

		try {
			await emailjs.send(serviceId, templateId, formData, publicKey);
			setFormSubmitted(true);
			setFormData({
				name: "",
				email: "",
				company: "",
				number: "",
				quantity: "",
				message: "",
			});
			if (onSuccess) {
				onSuccess();
			}
			setTimeout(() => {
				setFormSubmitted(false);
			}, 5000);
		} catch (err: any) {
			console.error(err.text);
			setError("Failed to send message. Please try again later.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<motion.section
			id="contact-us"
			className="py-1 relative bg-black/77"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			viewport={{ amount: 0.1, once: true, margin: "0px 0px -300px 0px" }}
		>
			{/* Loading Overlay */}
			{isSubmitting && (
				<div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center rounded-lg">
					<div className="bg-black/80 p-8 rounded-lg flex flex-col items-center gap-4">
						<Loader2 className="w-12 h-12 text-[#ceb072] animate-spin" />
						<p className="text-[#ceb072] font-semibold text-lg">
							Sending your message...
						</p>
					</div>
				</div>
			)}

			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl text-[#ceb072] font-serif mb-10 text-center">
					{isWholesalePage ? "Wholesale Enquiry Form" : "CONTACT US"}
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
								className="flex items-center text-[#ceb072] hover:text-green-300 gap-2 transition-colors"
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

							{!isWholesalePage && (
								<>
									<a
										href="https://th.shp.ee/evN7DXG"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center text-[#ceb072] hover:text-orange-500 gap-2 transition-colors"
									>
										<SiTiktok size={20} />
										<span className="font-semibold">Shopee:</span>
										<span className="ml-2">@goldenmatchaofficial</span>
									</a>
									<a
										href="https://vt.tiktok.com/ZS5HXxV7t/?page=TikTokShop"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center text-[#ceb072] hover:text-white gap-2 transition-colors"
									>
										<SiShopee size={20} />
										<span className="font-semibold">TikTok Shop:</span>
										<span className="ml-2">@goldenmatchaofficial</span>
									</a>
								</>
							)}
							<a
								href="https://instagram.com/goldenmatchaofficial"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center text-[#ceb072] hover:text-pink-300 gap-2 transition-colors"
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
								disabled={isSubmitting}
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-[#faf9f6] text-black mb-3 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity placeholder:text-gray-500"
							/>
							<input
								type="email"
								name="email"
								placeholder="Email"
								value={formData.email}
								onChange={handleFormChange}
								required
								disabled={isSubmitting}
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-[#faf9f6] text-black mb-3 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity placeholder:text-gray-500"
							/>
							<input
								type="text"
								name="company"
								placeholder="Company"
								value={formData.company}
								onChange={handleFormChange}
								disabled={isSubmitting}
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-[#faf9f6] text-black mb-3 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity placeholder:text-gray-500"
							/>
							<input
								type="text"
								name="number"
								placeholder="Contact Number"
								value={formData.number}
								onChange={handleFormChange}
								disabled={isSubmitting}
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-[#faf9f6] text-black mb-3 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity placeholder:text-gray-500"
							/>
							{isWholesalePage && (
								<input
									type="text"
									name="quantity"
									placeholder="Expected Quantity/Month (KG)"
									value={formData.quantity}
									onChange={handleFormChange}
									disabled={isSubmitting}
									className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-[#faf9f6] text-black mb-3 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity placeholder:text-gray-500"
								/>
							)}
							<textarea
								name="message"
								placeholder="Your Message"
								value={formData.message}
								onChange={handleFormChange}
								rows={4}
								required
								disabled={isSubmitting}
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-[#faf9f6] text-black mb-3 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity placeholder:text-gray-500"
							/>
							<button
								type="submit"
								disabled={isSubmitting}
								className="w-full px-6 py-3 bg-yellow-600 text-black rounded-lg font-semibold hover:bg-yellow-700 transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-yellow-600"
							>
								{isSubmitting ? (
									<>
										<Loader2 className="w-5 h-5 animate-spin" />
										Sending...
									</>
								) : (
									<>
										<Send size={20} />
										Send Message
									</>
								)}
							</button>
							{formSubmitted && (
								<motion.p
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									className="text-green-400 text-center font-semibold mt-2"
								>
									Thank you! We&apos;ll be in touch soon.
								</motion.p>
							)}
							{error && (
								<motion.p
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									className="text-red-400 text-center font-semibold mt-2"
								>
									{error}
								</motion.p>
							)}
						</form>
					</div>
				</div>
			</div>
		</motion.section>
	);
}
