"use client";

import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function OurStory() {
	return (
		<div className="min-h-screen bg-[url('/Background_Main2.jpeg')] bg-cover bg-center bg-no-repeat bg-fixed text-yellow-400 relative overflow-hidden">
			<NavBar />

			{/* Our Story Section */}
			<motion.section
				className="pt-57 pb-20 relative bg-black/80 min-h-screen"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ amount: 0.1, once: true }} // Changed to true
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				<div className="max-w-6xl lg:max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
					<h2 className="text-4xl font-bold text-[#ceb072] mb-12 text-center">
						Our Story
					</h2>

					<div className="space-y-20">
						{/* Row 1: Picture | Text */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
							<motion.div
								className="relative w-full h-72 lg:h-80 rounded-3xl overflow-hidden border border-[#ceb072]/40"
								initial={{ opacity: 0, x: -40 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ amount: 0.5, once: false }}
								transition={{ duration: 0.5, ease: "easeOut" }}
							>
								<Image
									src="/Background_Main2.jpeg"
									alt="Wholesale Matcha"
									fill
									className="object-cover"
									priority
								/>
							</motion.div>

							<motion.div
								className="text-[#ceb072] space-y-5 md:space-y-6"
								initial={{ opacity: 0, x: 40 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ amount: 0.5, once: false }}
								transition={{ duration: 0.5, ease: "easeOut" }}
							>
								<h3 className="text-2xl md:text-3xl font-semibold">
									A Golden Moment with Golden Matcha
								</h3>
								<p className="text-base md:text-lg leading-relaxed">
									Golden Matcha started off in the humble streets of Bangkok,
									founded by 2 individuals from very different backgrounds. One
									of us with a deep love of matcha since a very young age and
									the other started off his matcha journey after a simple sip
									which changed his perspective of Matcha.
								</p>
							</motion.div>
						</div>

						{/* Row 2: Text | Picture */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
							<motion.div
								className="order-2 md:order-1 text-[#ceb072] space-y-5 md:space-y-6"
								initial={{ opacity: 0, x: -40 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ amount: 0.5, once: false }}
								transition={{ duration: 0.5, ease: "easeOut" }}
							>
								<h3 className="text-2xl md:text-3xl font-semibold">
									Exploring Matcha Across Asia
								</h3>
								<p className="text-base md:text-lg leading-relaxed">
									Intrigued by the different notes that different varieties of
									matcha can offer, we explored matcha across Japan and China in
									search of quality products that we can share with you at an
									affordable price, in a time where Matcha has gained tremendous
									popularity.
								</p>
							</motion.div>

							<motion.div
								className="order-1 md:order-2 relative w-full h-72 lg:h-80 rounded-3xl overflow-hidden border border-[#ceb072]/40"
								initial={{ opacity: 0, x: 40 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ amount: 0.5, once: false }}
								transition={{ duration: 0.5, ease: "easeOut" }}
							>
								<Image
									src="/Background_Main2.jpeg"
									alt="Wholesale Matcha"
									fill
									className="object-cover"
									priority
								/>
							</motion.div>
						</div>

						{/* Row 3: Picture | Text */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
							<motion.div
								className="relative w-full h-72 lg:h-80 rounded-3xl overflow-hidden border border-[#ceb072]/40"
								initial={{ opacity: 0, x: -40 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ amount: 0.5, once: false }}
								transition={{ duration: 0.5, ease: "easeOut" }}
							>
								<Image
									src="/Background_Main2.jpeg"
									alt="Wholesale Matcha"
									fill
									className="object-cover"
									priority
								/>
							</motion.div>

							<motion.div
								className="text-[#ceb072] space-y-5 md:space-y-6"
								initial={{ opacity: 0, x: 40 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ amount: 0.5, once: false }}
								transition={{ duration: 0.5, ease: "easeOut" }}
							>
								<h3 className="text-2xl md:text-3xl font-semibold">
									Sourcing from Japanese Tea Farms
								</h3>
								<p className="text-base md:text-lg leading-relaxed">
									We take pride in sourcing our Matcha from the tea farms and
									producers of Japan, building a relationship with them to
									ensure the high quality of matcha we promise to our community.
								</p>
							</motion.div>
						</div>

						{/* Row 4: Text | Picture */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
							<motion.div
								className="order-2 md:order-1 text-[#ceb072] space-y-5 md:space-y-6"
								initial={{ opacity: 0, x: -40 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ amount: 0.5, once: false }}
								transition={{ duration: 0.5, ease: "easeOut" }}
							>
								<h3 className="text-2xl md:text-3xl font-semibold">
									A Daily Golden Moment
								</h3>
								<p className="text-base md:text-lg leading-relaxed">
									With a mixture of creativity and expertise, we aim to serve
									you with a variety of the finest matcha that you can enjoy
									with your loved ones at the Golden Moment of your day.
								</p>
							</motion.div>

							<motion.div
								className="order-1 md:order-2 relative w-full h-72 lg:h-80 rounded-3xl overflow-hidden border border-[#ceb072]/40"
								initial={{ opacity: 0, x: 40 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ amount: 0.5, once: false }}
								transition={{ duration: 0.5, ease: "easeOut" }}
							>
								<Image
									src="/Background_Main2.jpeg"
									alt="Wholesale Matcha"
									fill
									className="object-cover"
									priority
								/>
							</motion.div>
						</div>
						{/* Shopee / TikTok section */}
						<div className="flex justify-center gap-8 pt-12 font-serif text-[#ceb072] text-xl md:text-2xl">
							Find us on Shopee & Tiktok Shop:
						</div>
						<div className="flex justify-center gap-8 pb-1">
							<motion.a
								href="https://shopee.sg/lauboonheng96j?is_from_login=true"
								target="_blank"
								rel="noopener noreferrer"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ amount: 0.5, once: true }}
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
								viewport={{ amount: 0.5, once: true }}
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
				</div>
			</motion.section>

			<Footer />
		</div>
	);
}
