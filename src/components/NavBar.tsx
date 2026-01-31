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

	const handleNavClick = (key: string) => {
		switch (key) {
			case "home":
				router.push("/");
				break;
			case "shop":
				router.push("/products");
				break;
			case "golden-matcha":
				router.push("/golden-matcha");
				break;
			case "contact-us":
				if (pathname === "/") {
					scrollToSection("contact-us");
				} else {
					router.push("/#contact-us");
				}
				break;
			case "wholesale":
				router.push("/wholesale");
				break;
			default:
				scrollToSection(key);
		}
		setIsMenuOpen(false);
	};

	// NAV ITEMS (slug stays SEO-friendly, label is branding)
	const navItems = [
		{ key: "home", label: "HOME" },
		{ key: "golden-matcha", label: "OUR STORY" },
		{ key: "shop", label: "SHOP" },
		{ key: "wholesale", label: "WHOLESALE" },
		{ key: "contact-us", label: "CONTACT US" },
	];

	return (
		<nav className="fixed w-full bg-black/95 backdrop-blur-sm shadow-md z-50 flex items-center h-24 pl-0 pr-4 sm:pr-6 lg:pr-8">
			{/* Logo */}
			<div
				className="flex items-center gap-2 cursor-pointer -ml-12 sm:ml-0"
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
			</div>

			<div className="flex-grow" />

			{/* Desktop Navigation */}
			<div className="hidden md:flex space-x-8 mr-8 font-serif text-[#ceb072] text-xs tracking-wide">
				{navItems.map(({ key, label }) => (
					<button
						key={key}
						onClick={() => handleNavClick(key)}
						className="hover:text-yellow-500 transition"
					>
						{label}
					</button>
				))}
			</div>

			{/* Mobile Menu Toggle */}
			<div className="md:hidden">
				<button
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className="text-[#ceb072] hover:text-yellow-500 transition"
					aria-label="Toggle menu"
				>
					{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			{/* Mobile Navigation */}
			{isMenuOpen && (
				<div className="md:hidden fixed top-24 left-0 right-0 bg-black border-t border-yellow-700 shadow-md z-50 font-serif">
					<div className="px-4 pt-4 pb-6 space-y-1">
						{navItems.map(({ key, label }) => (
							<button
								key={key}
								onClick={() => handleNavClick(key)}
								className="block w-full text-left px-3 py-2 text-[#ceb072] hover:bg-yellow-900 rounded font-semibold uppercase tracking-wide"
							>
								{label}
							</button>
						))}
					</div>
				</div>
			)}
		</nav>
	);
}
