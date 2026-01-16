"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { SiInstagram } from "react-icons/si";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
	const router = useRouter();
	const pathname = usePathname();

	const navItems = [
		{ key: "home", label: "HOME" },
		{ key: "golden-matcha", label: "OUR STORY" },
		{ key: "shop", label: "SHOP" },
		{ key: "wholesale", label: "WHOLESALE" },
		{ key: "contact-us", label: "CONTACT US" },
	];

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		element?.scrollIntoView({ behavior: "smooth" });
	};

	const handleNavClick = (key: string) => {
		switch (key) {
			case "home":
				router.push("/");
				break;
			case "shop":
				router.push("/products");
				break;
			case "golden-matcha":
				router.push("/golden-matcha");
				break;
			case "contact-us":
				if (pathname === "/") {
					scrollToSection("contact-us");
				} else {
					router.push("/#contact-us");
				}
				break;
			case "wholesale":
				router.push("/wholesale");
				break;
			default:
				scrollToSection(key);
		}
	};

	return (
		<footer className="relative bg-black/90 py-10 px-4 sm:px-6 lg:px-8 text-center border-t border-yellow-900">
			<div className="max-w-6xl mx-auto">
				{/* Navigation Links */}
				<div className="flex flex-wrap justify-center gap-6 mb-10 font-serif text-[#ceb072] text-xs tracking-wide">
					{navItems.map(({ key, label }) => (
						<button
							key={key}
							onClick={() => handleNavClick(key)}
							className="hover:text-yellow-500 transition hover:underline uppercase"
						>
							{label}
						</button>
					))}
				</div>

				{/* Social Icons */}
				<div className="flex justify-center gap-2 mb-12">
					<a
						href="https://instagram.com/goldenmatchaofficial"
						target="_blank"
						rel="noopener noreferrer"
						className="text-pink-400 hover:text-pink-300 transition p-3"
						aria-label="Instagram"
					>
						<SiInstagram size={20} />
					</a>

					{/* TikTok */}
					<motion.div
						initial={{ y: 30, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.6 }}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
					>
						<a
							href="https://vt.tiktok.com/ZS5HXxV7t/?page=TikTokShop"
							target="_blank"
							rel="noopener noreferrer"
							className="p-3 rounded-full hover:bg-black/70 inline-block"
							aria-label="TikTok"
						>
							<Image
								src="/medias/tik-tok.png"
								alt="TikTok"
								width={22}
								height={22}
							/>
						</a>
					</motion.div>

					{/* LINE */}
					<motion.div
						initial={{ y: 30, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
					>
						<a
							href="https://line.me/ti/p/goldenmatchaofficial"
							target="_blank"
							rel="noopener noreferrer"
							className="p-3 rounded-full hover:bg-black/70 inline-block"
							aria-label="LINE"
						>
							<Image src="/medias/line.svg" width={20} height={20} alt="LINE" />
						</a>
					</motion.div>

					{/* Shopee */}
					<motion.div
						initial={{ y: 30, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
					>
						<a
							href="https://th.shp.ee/evN7DXG"
							target="_blank"
							rel="noopener noreferrer"
							className="p-3 rounded-full hover:bg-black/70 inline-block"
							aria-label="Shopee"
						>
							<Image
								src="/medias/shopee.webp"
								width={70}
								height={20}
								alt="Shopee"
							/>
						</a>
					</motion.div>
				</div>

				{/* Brand */}
				<div className="space-y-2">
					<p className="text-xl md:text-3xl font-serif text-[#ceb072]">
						Golden Matcha
					</p>
					<p className="text-yellow-600 text-xs">
						© 2025 Golden Matcha. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
