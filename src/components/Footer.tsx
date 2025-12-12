"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { SiInstagram } from "react-icons/si";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
	const handleLinkClickShopee = () => {
		// Open the desired URL in a new tab
		window.open(
			"https://shopee.sg/lauboonheng96j?is_from_login=true",
			"_blank"
		);
	};

	const handleLinkClickLazada = () => {
		// Open the desired URL in a new tab
		window.open(
			"https://www.lazada.sg/shop/lau-boon-heng-kwei-teow-noodle-manufactory/?spm=a2o42.pdp_revamp.seller.1.7bd93d552gpxRX&itemId=1640680496&channelSource=pdp",
			"_blank"
		);
	};
	const router = useRouter();

	const navItems = ["home", "our-story", "shop", "wholesale", "contact-Us"];

	const handleNavClick = (section: string) => {
		if (section === "home") {
			router.push("/");
		} else if (section === "shop") {
			router.push("/products");
		} else if (section === "our-story") {
			router.push("/?scrollTo=our-story");
		} else if (section === "contact") {
			router.push("/?scrollTo=contact-Us");
		} else if (section === "wholesale") {
			router.push("/wholesale");
		} else {
			const element = document.getElementById(section);
			element?.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<footer className="relative bg-black/90 py-8 px-4 sm:px-6 lg:px-8 text-center border-t border-yellow-900">
			<div className="max-w-6xl mx-auto">
				{/* Navigation Links - Centered */}
				<div className="flex flex-wrap justify-center gap-6 mb-8 font-serif text-[#ceb072] text-lg">
					{navItems.map((section) => (
						<button
							key={section}
							onClick={() => handleNavClick(section)}
							className="hover:text-yellow-500 transition hover:underline"
						>
							{section.charAt(0).toUpperCase() +
								section.slice(1).replace("-", " ")}
						</button>
					))}
				</div>

				{/* Social Icons - Centered below links */}
				<div className="flex justify-center gap-1 mb-12">
					<a
						href="https://instagram.com/goldenmatchaofficial"
						target="_blank"
						rel="noopener noreferrer"
						className="text-pink-400 hover:text-pink-300 transition p-3 rounded-full bg-black/50 hover:bg-black/70"
					>
						<SiInstagram size={24} />
					</a>
					<a
						href="https://tiktok.com/@goldenmatchaofficial"
						target="_blank"
						rel="noopener noreferrer"
						className="text-[#ff0050] hover:text-pink-300 transition p-3 rounded-full bg-black/50 hover:bg-black/70"
					>
						<svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
							<path d="M19.05 4.82a1 1 0 0 0-.994-.995H14.5a4.48 4.48 0 0 0-4.292 3.308 1 1 0 0 1-1.959-.338 6.49 6.49 0 0 1 6.192-4.978V2a1 1 0 0 0-2 0v2.467A8.5 8.5 0 0 0 2 10v1.5a1 1 0 0 0 1 1h2.5a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a3 3 0 0 1 3-3H9a1 1 0 0 1 1-1h.5a9.5 9.5 0 0 1 9.291 7.469 1 1 0 0 1-.822 1.214 1 1 0 0 1-1.214-.822A7.5 7.5 0 0 0 14 11h-1a1 1 0 0 1-1-1 1 1 0 0 1 1-1h3.5a2.5 2.5 0 0 0 2.5-2.5V5a1 1 0 0 0-.95-1.18z" />
						</svg>
					</a>
					<a
						href="https://facebook.com/goldenmatchaofficial"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-400 hover:text-blue-300 transition p-3 rounded-full bg-black/50 hover:bg-black/70"
					>
						<svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
							<path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808C8.954 2 7.5 3.454 7.5 5.333V8z" />
						</svg>
					</a>
					<a
						href="https://line.me/ti/p/goldenmatchaofficial"
						target="_blank"
						rel="noopener noreferrer"
						className="text-green-400 hover:text-green-300 transition p-3 rounded-full bg-black/50 hover:bg-black/70"
					>
						<svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
							<path d="M12 2C6.48 2 2 5.91 2 10.53c0 2.63 1.77 4.93 4.45 6.23-.13.9-.7 2.8-1.3 4.1 0 0-.09.38.52.18 1.54-1.18 2.71-2.13 3.77-2.86A10.5 10.5 0 0012 19c5.52 0 10-3.91 10-8.47S17.52 2 12 2z" />
						</svg>
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
						onClick={handleLinkClickShopee}
						className="flex flex-col items-center"
					>
						<a
							href="https://shopee.sg/lauboonheng96j?is_from_login=true" // Replace 'YOURNUMBER' with your phone number
							className="text-white hover:underline text-shadow-outline mr-5 mt-2.5"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								src={"/medias/shopee.webp"}
								width={18}
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
						onClick={handleLinkClickLazada}
						className="flex flex-col items-center"
					>
						<a
							href="https://www.lazada.sg/shop/lau-boon-heng-kwei-teow-noodle-manufactory/?spm=a2o42.pdp_revamp.seller.1.7bd93d552gpxRX&itemId=1640680496&channelSource=pdp" // Replace 'YOURNUMBER' with your phone number
							className="text-white mt-3.5 hover:underline text-shadow-outline"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								src="/medias/lazada.webp"
								alt="Lazada Icon"
								width={19}
								height={5.5}
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
