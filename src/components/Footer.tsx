"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { SiInstagram } from "react-icons/si";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
	const router = useRouter();
	const pathname = usePathname();
	const navItems = ["home", "our-story", "shop", "wholesale", "contact-us"];

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		element?.scrollIntoView({ behavior: "smooth" });
	};

	const handleNavClick = (section: string) => {
		if (section === "home") {
			router.push("/");
		} else if (section === "shop") {
			router.push("/products");
		} else if (section === "our-story") {
			router.push("/our-story");
		} else if (section === "contact-us") {
			// Check if already on home page
			if (pathname === "/") {
				scrollToSection("contact-us");
			} else {
				router.push("/#contact-us");
			}
		} else if (section === "wholesale") {
			router.push("/wholesale");
		} else {
			scrollToSection(section);
		}
	};

	return (
		<footer className="relative bg-black/90 py-8 px-4 sm:px-6 lg:px-8 text-center border-t border-yellow-900">
			<div className="max-w-6xl mx-auto">
				{/* Navigation Links - Centered */}
				<div className="flex flex-wrap justify-center gap-6 mb-8 font-serif text-[#ceb072] text-xs">
					{navItems.map((section) => (
						<button
							key={section}
							onClick={() => handleNavClick(section)}
							className="hover:text-yellow-500 transition hover:underline uppercase"
						>
							{section.replace("-", " ")}
						</button>
					))}
				</div>

				{/* Social Icons - Centered below links */}
				<div className="flex justify-center gap-1 mb-12">
					<a
						href="https://instagram.com/goldenmatchaofficial"
						target="_blank"
						rel="noopener noreferrer"
						className="text-pink-400 hover:text-pink-300 transition p-3  hover:bg-black/70"
					>
						<SiInstagram size={20} />
					</a>

					<motion.div
						initial={{ x: "-100vh", opacity: 0 }}
						animate={{
							x: 0,
							opacity: 1,
						}}
						transition={{
							delay: 0,
							duration: 1,
							type: "spring",
							stiffness: 120,
						}}
						whileHover={{
							scale: 1.1,
						}}
						whileTap={{ scale: 0.9 }}
						className="flex flex-col items-center"
					>
						<a
							href="https://vt.tiktok.com/ZS5HXxV7t/?page=TikTokShop"
							target="_blank"
							rel="noopener noreferrer"
							className="text-[#ff0050] hover:text-pink-300 transition p-3 rounded-full hover:bg-black/70"
						>
							<Image
								src="/medias/tik-tok.png"
								alt="Tiktok"
								width={22}
								height={20}
								className="object-contain"
							/>
						</a>
					</motion.div>

					<motion.div
						initial={{ x: "-100vh", opacity: 0 }}
						animate={{
							x: 0,
							opacity: 1,
						}}
						transition={{
							delay: 0,
							duration: 1,
							type: "spring",
							stiffness: 120,
						}}
						whileHover={{
							scale: 1.1,
						}}
						whileTap={{ scale: 0.9 }}
						className="flex flex-col items-center"
					>
						<a
							href="https://line.me/ti/p/goldenmatchaofficial"
							target="_blank"
							rel="noopener noreferrer"
							className="text-green-400 hover:text-green-300 transition p-3 hover:bg-black/70"
						>
							<Image
								src={"/medias/line.svg"}
								width={20}
								height={6}
								alt="Lazada Icon"
								className="object-contain"
							/>
						</a>
					</motion.div>
					<motion.div
						initial={{ x: "-100vh", opacity: 0 }}
						animate={{
							x: 0,
							opacity: 1,
						}}
						transition={{
							delay: 0,
							duration: 1,
							type: "spring",
							stiffness: 120,
						}}
						whileHover={{
							scale: 1.1,
						}}
						whileTap={{ scale: 0.9 }}
						className="flex flex-col items-center"
					>
						<a
							href="https://th.shp.ee/evN7DXG" // Replace 'YOURNUMBER' with your phone number
							className="text-white hover:underline text-shadow-outline ml-4 mt-2.5"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								src={"/medias/shopee.webp"}
								width={70}
								height={6}
								alt="Lazada Icon"
								className="object-contain"
							/>
						</a>
					</motion.div>
				</div>

				{/* Logo/Brand + Copyright */}
				<div className="space-y-2">
					<p className="text-2xl md:text-3xl font-serif text-[#ceb072]">
						Golden Matcha
					</p>
					<p className="text-yellow-600 text-sm">
						© 2025 Golden Matcha. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
