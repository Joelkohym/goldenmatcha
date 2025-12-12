"use client";

import React from "react";
import Image from "next/image";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
// import NavBar from "@/components/NavBar";

const products = [
	{
		name: "Uji Ceremonial Grade",
		description: "Premium ceremonial grade matcha from Uji.",
		price: "THB 590",
		imageUrl: "/Golden Matcha Logo.jpg",
	},
	{
		name: "Kagoshima Ceremonial Grade",
		description: "Rich and smooth ceremonial matcha from Kagoshima.",
		price: "THB 590",
		imageUrl: "/Golden Matcha Logo.jpg",
	},
	{
		name: "Mie Ceremonial Grade",
		description: "Vibrant flavor with umami notes from Mie.",
		price: "THB 590",
		imageUrl: "/Golden Matcha Logo.jpg",
	},
];

export default function ProductsPage() {
	return (
		<div className="min-h-screen bg-black text-yellow-400">
			<NavBar />

			<main className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
				<h1 className="text-4xl font-bold mb-12 text-center">
					Our Matcha Collection
				</h1>
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-20">
					{products.map((product, i) => (
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
								<p className="text-yellow-400 font-bold mt-4 text-xl">
									{product.price}
								</p>
							</div>
						</div>
					))}
				</div>
			</main>
			<Footer />
		</div>
	);
}
