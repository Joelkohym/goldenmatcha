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
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			viewport={{ amount: 0.3, once: true }}
		>
			{/* Award badge */}
			{product.awardWinning && (
				<div className="absolute top-3 left-1/2 -translate-x-1/2 z-20">
					<span className="bg-[#ceb072] text-black text-[9px] md:text-xs font-semibold tracking-wide uppercase px-2 md:px-3 py-1 rounded-full shadow-lg whitespace-nowrap">
						Award Winner
					</span>
				</div>
			)}

			{/* Image */}
			<div className="relative h-56 md:h-64 flex items-center justify-center overflow-hidden transition-colors duration-300 rounded-t-lg">
				<Image
					src={
						isHovered && product.hoverImage
							? product.hoverImage
							: product.image || "/GOLDEN MATCHA LOGO.png"
					}
					alt={product.name}
					fill
					className="object-cover rounded-t-lg transition-opacity duration-300"
				/>
			</div>

			{/* Info */}
			<div className="p-4 md:p-6 text-center">
				<h3 className="text-sm md:text-md text-[#ceb072] font-serif uppercase leading-tight">
					{firstLine}
				</h3>
				<p className="text-xs md:text-sm text-[#ceb072] font-serif uppercase mb-2 md:mb-4">
					{secondLine} {product.weight}
				</p>
				<p className="text-xs md:text-sm text-[#ceb072] font-serif">
					<span className="text-xs md:text-sm">฿</span>
					{product.price}
				</p>
			</div>
		</motion.div>
	);
};

export default MotionProductCard;
