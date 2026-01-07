"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export default function NavBar() {
	const router = useRouter();
	const pathname = usePathname();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// Handle hash navigation after route change
	useEffect(() => {
		if (pathname === "/" && window.location.hash) {
			const id = window.location.hash.substring(1);
			setTimeout(() => {
				const element = document.getElementById(id);
				element?.scrollIntoView({ behavior: "smooth" });
			}, 100);
		}
	}, [pathname]);

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		element?.scrollIntoView({ behavior: "smooth" });
		setIsMenuOpen(false);
	};

	const handleNavClick = (section: string) => {
		if (section === "home") {
			router.push("/");
		} else if (section === "shop") {
			router.push("/products");
		} else if (section === "our-story") {
			router.push("/our-story");
		} else if (section === "contact-us") {
			// Check if already on home page
			if (pathname === "/") {
				scrollToSection("contact-us");
			} else {
				router.push("/#contact-us");
			}
		} else if (section === "wholesale") {
			router.push("/wholesale");
		} else {
			scrollToSection(section);
		}
		setIsMenuOpen(false);
	};

	const navItems = ["home", "our-story", "shop", "wholesale", "contact-us"];

	return (
		<nav className="fixed w-full bg-black/95 backdrop-blur-sm shadow-md z-50 flex items-center h-35 px-4 sm:px-6 lg:px-8">
			{/* Logo */}
			<div
				className="flex items-center gap-2 cursor-pointer -ml-6 sm:-ml-9 lg:-ml-12"
				onClick={() => router.push("/")}
			>
				<Image
					src="/GOLDEN MATCHA LOGO.png"
					alt="Golden Matcha Logo"
					width={200}
					height={200}
					className="object-contain"
					priority
				/>
				{/* <h1 className="hidden md:flex space-x-8 mr-8 font-serif text-[#ceb072] text-2xl">
					Golden Matcha
				</h1> */}
			</div>

			<div className="flex-grow" />

			{/* Desktop navigation */}
			<div className="hidden md:flex space-x-8 mr-8 font-serif text-[#ceb072] text-xs">
				{navItems.map((section) => (
					<button
						key={section}
						onClick={() => handleNavClick(section)}
						className="text-golden-matcha hover:text-yellow-500 transition"
					>
						{section.slice(0).toUpperCase().replace("-", " ")}
					</button>
				))}
			</div>

			{/* Mobile menu toggle */}
			<div className="md:hidden">
				<button
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className="text-[#ceb072]"
					aria-label="Toggle menu"
				>
					{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			{/* Mobile navigation menu */}
			{isMenuOpen && (
				<div className="md:hidden fixed top-25 left-0 right-0 bg-black border-t border-yellow-700 shadow-md z-50 font-serif">
					<div className="px-4 pt-4 pb-6 space-y-1">
						{navItems.map((section) => (
							<button
								key={section}
								onClick={() => handleNavClick(section)}
								className="block w-full text-left px-3 py-2 text-[#ceb072] hover:bg-yellow-900 rounded font-semibold"
							>
								{section.charAt(0).toUpperCase() +
									section.slice(1).replace("-", " ")}
							</button>
						))}
					</div>
				</div>
			)}
		</nav>
	);
}
