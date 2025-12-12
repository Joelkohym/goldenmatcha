"use client";

import React from "react";
import NavBar from "../../components/NavBar";
import { motion } from "framer-motion";

export default function OurStory() {
	return (
		<div className="min-h-screen bg-[url('/Background_Main2.jpeg')] bg-cover bg-center bg-no-repeat bg-fixed text-yellow-400 relative overflow-hidden">
			<NavBar />

			{/* Our Story Section */}
			<motion.section
				className="pt-32 pb-20 relative bg-black/80 min-h-screen"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-4xl font-bold text-yellow-400 mb-8 text-center">
						Our Story
					</h2>
					<div className="prose prose-lg max-w-none text-yellow-300 leading-relaxed space-y-6">
						<p className="text-xl font-semibold text-yellow-500">
							A Golden Moment with Golden Matcha
						</p>
						<p>
							Golden Matcha started off in the humble streets of Bangkok,
							founded by 2 individuals from very different backgrounds. One of
							us with a deep love of matcha since a very young age and the other
							started off his matcha journey after a simple sip which changed
							his perspective of Matcha.
						</p>
						<p>
							Intrigued by the different nodes that different varieties of
							matcha can offer, we explored matcha across Japan and China in
							search of quality products that we can share with you at an
							affordable price, in a time where Matcha has gained tremendous
							popularity.
						</p>
						<p>
							For matcha lovers, we would like to make matcha enjoyable and
							accessible for your daily ritual. At Golden Matcha, that&apos;s
							our goal and mission.
						</p>
						<p>
							We take pride in sourcing our Matcha from the tea farms and
							producers of Japan, building a relationship with them to ensure
							the high quality of matcha we promise to our community.
						</p>
						<p>
							With a mixture of creativity and expertise, we aim to serve you
							with a variety of the finest matcha that you can enjoy with your
							loved ones at the Golden Moment of your day.
						</p>
					</div>
				</div>
			</motion.section>

			{/* Footer */}
			<footer className="relative bg-black/90 py-8 px-4 sm:px-6 lg:px-8 text-center border-t border-yellow-900">
				<p className="text-lg font-semibold mb-2 text-yellow-300">
					Golden Matcha
				</p>
				<p className="text-yellow-400">Premium Japanese Matcha from Bangkok</p>
				<p className="text-yellow-600 text-sm mt-4">
					© 2024 Golden Matcha. All rights reserved.
				</p>
			</footer>
		</div>
	);
}
