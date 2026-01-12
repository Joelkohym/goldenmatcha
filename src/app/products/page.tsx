"use client";

import Image from "next/image";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { ceremonialProducts, premiumProducts } from "@/data/products";
import MotionProductCard from "@/components/MotionProductCard";

export default function ProductsPage() {
	return (
		<div className="min-h-screen bg-[url('/Background_Main2.jpeg')] bg-cover bg-center bg-no-repeat bg-fixed text-[#ceb072] relative overflow-hidden">
			<NavBar />

			{/* Background overlay */}
			<div className="absolute inset-0 bg-black/55 z-0" />

			{/* Content */}
			<main className="relative z-10 pt-45 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
				{/* CEREMONIAL GRADE Section */}
				<div className="mb-16 md:mb-20">
					<h3 className="text-2xl md:text-3xl lg:text-4xl text-[#ceb072] font-serif mb-8 md:mb-12 text-center">
						CEREMONIAL GRADE
					</h3>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
						{ceremonialProducts.map((product, i) => (
							<MotionProductCard key={i} product={product} />
						))}
					</div>
				</div>
				{/* PREMIUM GRADE Section */}
				<div>
					<h3 className="text-2xl md:text-3xl lg:text-4xl text-[#ceb072] font-serif mb-8 md:mb-12 text-center decoration-[#ceb072]">
						PREMIUM GRADE
					</h3>
					<div className="flex justify-center">
						<div className="w-full max-w-[265px]">
							{premiumProducts.map((product, i) => (
								<MotionProductCard key={i} product={product} />
							))}
						</div>
					</div>
				</div>
				{/* Shopee & TikTok Logos - Mobile optimized */}
				<div className="flex justify-center gap-4 md:gap-8 pt-8 md:pt-12 font-serif text-[#ceb072] text-md md:text-lg lg:text-xl text-center px-4 uppercase">
					Place your orders here:
				</div>
				<div className="flex justify-center gap-4 md:gap-8 pt-1 pb-8">
					<motion.a
						href="https://th.shp.ee/evN7DXG"
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
			</main>

			<Footer />
		</div>
	);
}
