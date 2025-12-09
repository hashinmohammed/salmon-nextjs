
"use client";
import React from "react";
import Image from "next/image";

// Local partner logos from public/images/partners
const partners = [
	{ name: "Partner 1", src: "/images/partners/1.png" },
	{ name: "Partner 2", src: "/images/partners/2.png" },
	{ name: "Partner 3", src: "/images/partners/3.png" },
	{ name: "Partner 4", src: "/images/partners/4.png" },
];

const marqueeAnimation = {
	animation: "marquee 20s linear infinite"
};

export default function OurPartners() {
	return (
		<div className="w-full  bg-white py-4 overflow-hidden" style={{ borderColor: 'var(--color-primary)' }}>
			{/* <h2 className="text-center text-xl font-bold mb-4 text-gray-700">Our Partners</h2> */}
			<div className="relative w-full overflow-hidden">
				<div
					className="flex items-center gap-12"
					style={marqueeAnimation}
				>
					{partners.concat(partners).map((partner, idx) => (
						<div key={idx} className="shrink-0 flex items-center justify-center h-16" style={{ height: 48 }}>
							<Image
								src={partner.src}
								alt={partner.name}
								height={64}
								width={128}
								style={{ objectFit: "contain", display: "block" }}
								className="mx-4"
								loading="lazy"
							/>
						</div>
					))}
				</div>
			</div>
			<style jsx>{`
				@keyframes marquee {
					0% { transform: translateX(0); }
					100% { transform: translateX(-20%); }
				}
				div[style*='marquee'] {
					width: max-content;
				}
			`}</style>
		</div>
	);
}
