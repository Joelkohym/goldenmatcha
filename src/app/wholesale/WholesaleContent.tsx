// src/app/wholesale/WholesaleContent.tsx
"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import ContactUsSection from "../../components/ContactUs";
import { useRouter, useSearchParams } from "next/navigation";

const wholesaleProducts = [
	{
		name: "Yame A Premium",
		imageUrl: "/Golden Matcha Logo.jpg",
		description: "",
	},
	{
		name: "Yame B Premium",
		imageUrl: "/Golden Matcha Logo.jpg",
		description: "",
	},
	{
		name: "Yame A Ceremonial (1st Harvest Okumidori)",
		imageUrl: "/Golden Matcha Logo.jpg",
		description: "",
	},
	{
		name: "Uji A Ceremonial (1st Harvest Okumidori)",
		imageUrl: "/Golden Matcha Logo.jpg",
		description: "",
	},
	{
		name: "Top 1 Ceremonial (From Zhejiang, Hangzhou)",
		imageUrl: "/Golden Matcha Logo.jpg",
		description: "",
	},
];
export default function WholesaleContent() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const scrollToSectionId = searchParams.get("scrollTo");

	useEffect(() => {
		if (!scrollToSectionId) return;
		const element = document.getElementById(scrollToSectionId);
		element?.scrollIntoView({ behavior: "smooth" });
		router.replace("/wholesale", { scroll: false });
	}, [scrollToSectionId, router]);

	return (
		<div className="min-h-screen bg-black text-yellow-400">
			<NavBar />

			<main className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
				<h1 className="text-4xl font-bold mb-12 text-center">
					Our Wholesale Collection
				</h1>

				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-20">
					{wholesaleProducts.map((product, i) => (
						<div
							key={i}
							className="bg-yellow-900 rounded-lg shadow-lg overflow-hidden flex flex-col"
						>
							<div className="relative h-64 w-full">
								<Image
									src={product.imageUrl}
									alt={product.name}
									fill
									className="object-cover"
									priority
								/>
							</div>
							<div className="p-6 flex flex-col flex-grow">
								<h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
								<p className="text-yellow-300 flex-grow">
									{product.description}
								</p>
							</div>
						</div>
					))}
				</div>

				<ContactUsSection id="get-a-quote" />
			</main>

			<Footer />
		</div>
	);
}
