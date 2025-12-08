// MotionProductCard.tsx (or wherever it lives)
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

type MotionProductCardProps = {
	product: {
		name: string;
		image: string; // existing main image path e.g. "/product1.jpeg"
		price: string;
		// ...other fields
	};
};

export function MotionProductCard({ product }: MotionProductCardProps) {
	const [hover, setHover] = useState(false);

	return (
		<motion.div
			className="bg-black/70 border border-[#ceb072]/30 rounded-2xl p-6 shadow-lg cursor-pointer"
			whileHover={{ scale: 1.03 }}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<div className="relative w-full h-64 mb-4">
				<Image
					src={hover ? "/Hover_picture1.jpeg" : product.image}
					alt={product.name}
					fill
					className="object-cover rounded-xl transition-opacity duration-300"
				/>
			</div>

			<h3 className="text-xl font-semibold text-[#ceb072] mb-2">
				{product.name}
			</h3>
			<p className="text-yellow-300 font-medium">{product.price}</p>
		</motion.div>
	);
}
