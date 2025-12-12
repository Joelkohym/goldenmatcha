// app/wholesale/page.tsx
import { Suspense } from "react";
import WholesaleContent from "./WholesaleContent";

export default function WholesalePage() {
	return (
		<Suspense fallback={null}>
			<WholesaleContent />
		</Suspense>
	);
}
