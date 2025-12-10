
"use client";
import Preloader from "./components/client/PreLoader";

export default function Loading() {
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
			<Preloader />
		</div>
	);
}
