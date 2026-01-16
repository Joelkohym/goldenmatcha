"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Product } from "@/types/product";

interface MotionProductCardProps {
	product: Product;
	className?: string; // optional styling override
}

const MotionProductCard: React.FC<MotionProductCardProps> = ({
	product,
	className,
}) => {
	const [isHovered, setIsHovered] = useState(false);

	const words = product.name.split(" ");
	const firstLine = words.slice(0, words.length - 2).join(" ");
	const secondLine = words.slice(-2).join(" ");

	return (
		<motion.div
			className={`rounded-lg shadow-md overflow-hidden cursor-pointer transform transition hover:scale-105 relative ${
				className || ""
			}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			style={{ backgroundColor: isHovered ? product.color : "black" }}
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			viewport={{ amount: 0.3, once: true }}
			whileTap={{
				scale: 1.05,
				boxShadow: "0 0 25px rgba(206, 176, 114, 0.5)",
			}}
		>
			{/* Award badge */}
			{product.awardWinning && (
				<div className="absolute top-2 md:top-3 left-1/2 -translate-x-1/2 z-20">
					<span className="bg-[#ceb072] text-black text-[8px] md:text-xs font-semibold tracking-wide uppercase px-1.5 md:px-3 py-0.5 md:py-1 rounded-full shadow-lg whitespace-nowrap">
						Award Winner
					</span>
				</div>
			)}

			{/* Image - object-cover by default (zoomed), object-contain when hovered (fit) */}
			<div className="relative h-52 sm:h-48 md:h-56 lg:h-64 flex items-center justify-center overflow-hidden transition-colors duration-300 rounded-t-lg bg-[#fefefe] sm:bg-black">
				<Image
					src={
						isHovered && product.hoverImage
							? product.hoverImage
							: product.image || "/GOLDEN MATCHA LOGO.png"
					}
					alt={product.name}
					fill
					className={`rounded-t-lg transition-all duration-300 ${
						isHovered && product.hoverImage
							? "object-contain p-2"
							: "object-cover md:object-cover p-0"
					}`}
				/>
			</div>

			{/* Info */}
			<div className="p-3 md:p-4 lg:p-6 text-center">
				<h3 className="text-xs md:text-sm lg:text-md text-[#ceb072] font-serif uppercase leading-tight">
					{firstLine}
				</h3>
				<p className="text-[10px] md:text-xs lg:text-sm text-[#ceb072] font-serif uppercase mb-1 md:mb-2 lg:mb-4">
					{secondLine} {product.weight}
				</p>
				<p className="text-xs md:text-sm text-[#ceb072] font-serif">
					<span className="text-[10px] md:text-xs lg:text-sm">฿</span>
					{product.price}
				</p>
			</div>
		</motion.div>
	);
};

export default MotionProductCard;
