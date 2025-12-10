// MobileBottomNav.jsx
"use client";
import Link from "next/link";
import { House, PackageSearch } from "lucide-react";

export default function MobileBottomNav() {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 shadow-inner md:hidden flex items-center justify-around h-16 w-full px-4 pb-[env(safe-area-inset-bottom)]"
      aria-label="Mobile navigation"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <Link
        href="/"
        className="flex flex-col items-center justify-center text-sm text-gray-700 w-full max-w-full"
      >
        <House className="h-6 w-6 mb-0.5" />
        <span className="text-xs">Home</span>
      </Link>
      <Link
        href="/products"
        className="flex flex-col items-center justify-center text-sm text-gray-700 w-full max-w-full"
      >
        <PackageSearch className="h-6 w-6 mb-0.5" />
        <span className="text-xs">Products</span>
      </Link>
    </nav>
  );
}
