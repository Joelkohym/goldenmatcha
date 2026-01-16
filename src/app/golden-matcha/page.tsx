"use client";

import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function OurStory() {
	return (
		<div className="min-h-screen bg-black text-[#ceb072] relative overflow-hidden">
			<NavBar />
			<section className="relative h-screen w-full">
				<Image
					src="/About us header photo.jpg"
					alt="Golden Matcha Hero"
					fill
					priority
					className="object-cover"
				/>

				{/* Optional overlay */}
				<div className="absolute inset-0 bg-black/55" />

				{/* Centered text */}
				<div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-4 px-4">
					<h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#ceb072] uppercase">
						Our Story
					</h1>
					<h2 className="text-md md:text-xl lg:text-2xl font-serif text-[#ceb072] max-w-3xl">
						From Japan&apos;s tea regions to your daily golden moments
					</h2>
				</div>
			</section>

			{/* ================= STORY CONTENT SECTION ================= */}
			<section className="relative">
				{/* Background image */}
				<div className="absolute inset-0 bg-[url('/Background_Main2.jpeg')] bg-cover bg-center bg-no-repeat bg-fixed" />

				{/* Overlay */}
				<div className="absolute inset-0 bg-black/85" />

				{/* Content */}
				<motion.div
					className="relative z-10 pt-24 pb-20 min-h-screen"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ amount: 0.1, once: true }} // Changed to true
					transition={{ duration: 0.6, ease: "easeOut" }}
				>
					<div className="max-w-6xl lg:max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
						<div className="space-y-20">
							{/* Row 1: Picture | Text */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
								<motion.div
									className="relative w-full h-72 lg:h-105 rounded-3xl overflow-hidden border border-[#ceb072]/40"
									initial={{ opacity: 0, x: -40 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ amount: 0.5, once: true }}
									transition={{ duration: 0.5, ease: "easeOut" }}
								>
									<Image
										src="/About us page.jpg"
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
									viewport={{ amount: 0.5, once: true }}
									transition={{ duration: 0.5, ease: "easeOut" }}
								>
									<h3 className="text-2xl md:text-3xl font-serif uppercase">
										The Beginning
									</h3>
									<p className="text-base md:text-md leading-relaxed font-serif">
										Golden Matcha began in the humble streets of Bangkok,
										founded by two individuals from very different backgrounds.
									</p>
									<p className="text-base md:text-md leading-relaxed font-serif">
										One of us has had a deep love for matcha since a very young
										age. Her passion was always to collect and share great
										matcha with her family and friends—whether at gatherings or
										simply on a regular day. So why not share that love with the
										global matcha community?
									</p>

									<p className="text-base md:text-md leading-relaxed font-serif">
										Meanwhile, the other began his matcha journey after a single
										sip of Japanese ceremonial matcha that changed his entire
										perspective on the drink. After spending 10 years deeply
										entrenched in the corporate world, he longed to discover
										something he could truly be passionate about. That
										curiosity—and eventual obsession—for matcha emerged in
										adulthood after that one “simple” sip, sparking a new
										appreciation for the culture.
									</p>
								</motion.div>
							</div>

							{/* Row 2: Text | Picture */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
								<motion.div
									className="order-2 md:order-1 text-[#ceb072] space-y-5 md:space-y-6"
									initial={{ opacity: 0, x: -40 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ amount: 0.5, once: true }}
									transition={{ duration: 0.5, ease: "easeOut" }}
								>
									<h3 className="text-2xl md:text-3xl font-serif uppercase">
										Making matcha accessible
									</h3>
									<p className="text-base md:text-md leading-relaxed font-serif">
										Intrigued by the different notes and characteristics that
										various matcha varieties can offer, we explored regions
										across Japan in search of quality products we could share
										with you at an affordable price—especially at a time when
										matcha has gained tremendous global popularity. For matcha
										lovers, we want to make matcha enjoyable and accessible as
										part of your daily ritual. And for businesses, we aim to be
										your trusted partner in supplying the right products for
										your customers. At Golden Matcha, quality, connection, and
										service are at the heart of everything we do. That is our
										mission.
									</p>
								</motion.div>
								{/* src="/About us page 2.jpg" */}
								<motion.div
									className="order-1 md:order-2 relative w-full h-72 lg:h-80 rounded-3xl overflow-hidden border border-[#ceb072]/40"
									initial={{ opacity: 0, x: 40 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ amount: 0.5, once: true }}
									transition={{ duration: 0.5, ease: "easeOut" }}
								>
									<Image
										src="/About us page 2 v2.png"
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
									viewport={{ amount: 0.5, once: true }}
									transition={{ duration: 0.5, ease: "easeOut" }}
								>
									<Image
										src="/About us page 3.jpg"
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
									viewport={{ amount: 0.5, once: true }}
									transition={{ duration: 0.5, ease: "easeOut" }}
								>
									<h3 className="text-2xl md:text-3xl  font-serif uppercase">
										Our dedication to quality
									</h3>
									<p className="text-base md:text-md leading-relaxed font-serif">
										We take pride in sourcing our matcha directly from tea farms
										and producers across Japan, building meaningful
										relationships to ensure the high quality we promise to our
										community. No preservatives, no artificial colouring—just
										pure, authentic matcha crafted specially for you.
									</p>
									<p className="text-base md:text-md leading-relaxed font-serif">
										With a blend of creativity and expertise, we aim to bring
										you a variety of the finest matcha to enjoy with your loved
										ones during the Golden Moment of your day.
									</p>
								</motion.div>
							</div>

							{/* Shopee & TikTok Logos - Mobile optimized */}
							<div className="flex flex-col items-center gap-1 md:gap-2 pb-6">
								<span className="font-serif text-[#ceb072] text-md md:text-lg lg:text-xl uppercase">
									Shop now:
								</span>
								<div className="flex justify-center pt-1 pb-8">
									<motion.a
										href="https://shopee.sg/lauboonheng96j?is_from_login=true"
										target="_blank"
										rel="noopener noreferrer"
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										whileHover={{ scale: 1.1 }}
										transition={{ duration: 0.5 }}
										className="flex items-center p-2 md:p-3 hover:shadow-lg rounded-xl transition-all duration-300"
									>
										<Image
											src="/medias/shopee.webp"
											alt="Shopee"
											width={100}
											height={20}
											className="object-contain w-[90px] h-[30px] md:w-[120px] md:h-[30px]"
										/>
									</motion.a>

									<motion.a
										href="https://vt.tiktok.com/ZS5HXxV7t/?page=TikTokShop"
										target="_blank"
										rel="noopener noreferrer"
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										whileHover={{ scale: 1.1 }}
										transition={{ duration: 0.5, delay: 0.1 }}
										className="flex items-center p-2 md:p-3 hover:shadow-lg rounded-xl transition-all duration-300"
									>
										<Image
											src="/medias/tiktok.svg"
											alt="Tiktok"
											width={100}
											height={30}
											className="object-contain w-[110px] h-[37px] md:w-[150px] md:h-[40px]"
										/>
									</motion.a>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</section>
			<Footer />
		</div>
	);
}
