// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Golden Matcha - Premium Japanese Matcha from Bangkok",
	description:
		"Premium Japanese matcha sourced directly from tea farms in Japan, bringing you the finest quality at an affordable price.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
