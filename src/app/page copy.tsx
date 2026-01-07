"use client";

export const dynamic = "force-dynamic";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import emailjs from "emailjs-com";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import EnquiryForm from "../components/EnquiryForm";

interface Product {
	name: string;
	weight: string;
	price: string;
	color: string;
	image?: string;
	link: string;
}

const MotionProductCard = ({ product }: { product: Product }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<motion.div
			className="rounded-lg shadow-md overflow-hidden cursor-pointer transition hover:scale-105"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			style={{ backgroundColor: isHovered ? product.color : "black" }}
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className="relative h-56 md:h-64">
				<Image
					src={
						isHovered
							? "/Hover_picture1.jpeg"
							: product.image ?? "/placeholder.jpeg"
					}
					alt={product.name}
					fill
					className="object-cover"
				/>
			</div>

			<div className="p-4 md:p-6 text-center">
				<h3
					className="
          font-serif text-lg md:text-xl 3xl:text-base
          text-[#ceb072] mb-2
        "
				>
					{product.name} {product.weight}
				</h3>

				<p
					className="
          font-serif text-lg md:text-xl 3xl:text-base
          text-[#ceb072]
        "
				>
					<span className="text-[16px] md:text-[18px] 3xl:text-[14px]">฿</span>
					{product.price}
				</p>
			</div>
		</motion.div>
	);
};

function HomeContent() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const scrollToSectionId = searchParams.get("scrollTo");

	useEffect(() => {
		if (scrollToSectionId) {
			document
				.getElementById(scrollToSectionId)
				?.scrollIntoView({ behavior: "smooth" });
			router.replace("/", { scroll: false });
		}
	}, [scrollToSectionId, router]);

	const ceremonialProducts: Product[] = [
		{
			name: "Uji Ceremonial Grade",
			weight: "25g",
			price: "699",
			color: "black",
			image: "/Background_Main.jpeg",
			link: "",
		},
		{
			name: "Kagoshima Ceremonial Grade",
			weight: "25g",
			price: "699",
			color: "black",
			image: "/Background_Main2.jpeg",
			link: "",
		},
		{
			name: "Mie Ceremonial Grade",
			weight: "25g",
			price: "699",
			color: "black",
			image: "/Golden Matcha Logo.jpg",
			link: "",
		},
	];

	const premiumProducts: Product[] = [
		{
			name: "Golden Yame",
			weight: "30g",
			price: "499",
			color: "black",
			image: "/Golden Matcha Logo.jpg",
			link: "",
		},
	];

	const wholesaleProducts = [
		"Yame A Premium",
		"Yame B Premium",
		"Yame A Ceremonial (1st Harvest Okumidori)",
		"Uji A Ceremonial (1st Harvest Okumidori)",
		"Top 1 Ceremonial (From Zhejiang, Hangzhou)",
	];

	return (
		<div className="min-h-screen bg-[url('/Background_Main2.jpeg')] bg-cover bg-fixed text-[#ceb072]">
			<NavBar />

			{/* HERO */}
			<section className="pt-20 min-h-screen flex items-center bg-black/77 px-4">
				<div className="max-w-2xl mx-auto text-center bg-black/77 p-8 rounded-3xl">
					<h2
						className="
            font-serif
            text-3xl md:text-4xl lg:text-5xl xl:text-6xl
            3xl:text-5xl
            mb-4
          "
					>
						A Golden Moment
						<br />
						with <span className="text-[#ffb31a]">Golden Matcha</span>
					</h2>

					<p
						className="
            text-base md:text-xl 3xl:text-lg
            font-['Calibri','Segoe_UI','system-ui']
            mb-8
          "
					>
						Premium Japanese matcha sourced directly from tea farms in Japan.
					</p>

					<button
						onClick={() => router.push("/our-story")}
						className="px-8 py-4 bg-[#ceb072] text-black rounded-full font-semibold
              text-sm md:text-base 3xl:text-sm
              hover:scale-105 transition"
					>
						Our Story
					</button>
				</div>
			</section>

			{/* SHOP */}
			<section className="py-24 bg-black/77">
				<h2
					className="
          text-3xl md:text-5xl 3xl:text-4xl
          font-serif text-center mb-16
        "
				>
					Our Golden Collection
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
					{ceremonialProducts.map((p, i) => (
						<MotionProductCard key={i} product={p} />
					))}
				</div>
			</section>

			{/* WHOLESALE */}
			<section className="min-h-screen flex items-center bg-black/77">
				<div className="max-w-7xl mx-auto p-8 grid md:grid-cols-2 gap-8">
					<Image
						src="/Background_Main.jpeg"
						alt="Wholesale"
						width={600}
						height={600}
						className="object-cover rounded-xl"
					/>

					<div className="flex flex-col justify-center">
						<h2
							className="
              font-serif
              text-3xl md:text-5xl 3xl:text-4xl
              mb-6
            "
						>
							Wholesale
						</h2>

						<p
							className="
              text-base md:text-xl 3xl:text-lg
              mb-6
            "
						>
							For wholesale inquiries, MOQ 1KG.
						</p>

						{wholesaleProducts.map((item, i) => (
							<div
								key={i}
								className="
                text-sm md:text-xl 3xl:text-lg
                font-serif
              "
							>
								{item}
							</div>
						))}
					</div>
				</div>
			</section>

			<EnquiryForm />
			<Footer />
		</div>
	);
}

export default function Home() {
	return (
		<Suspense
			fallback={
				<div className="min-h-screen bg-black flex items-center justify-center text-[#ceb072]">
					Loading…
				</div>
			}
		>
			<HomeContent />
		</Suspense>
	);
}
