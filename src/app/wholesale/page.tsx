"use client";

import React from "react";
import Image from "next/image";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import ContactUsSection from "../../components/ContactUs";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { Suspense } from "react";
import WholesaleContent from "./WholesaleContent";

// import NavBar from "@/components/NavBar";
export default function WholesalePage() {
	return (
		<Suspense fallback={null}>
			<WholesaleContent />
		</Suspense>
	);
}
