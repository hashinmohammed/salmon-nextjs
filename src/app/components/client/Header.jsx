"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { House, PackageSearch } from "lucide-react";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const effectiveScrolled = scrolled;
  const containerRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);


  // watch page scroll to toggle compact white header after 90px
  useEffect(() => {
    function onScroll() {
      const y = window.scrollY || window.pageYOffset;
      setScrolled(y > 90);
      // Close aside if open and scrolled more than 10px
      if (y > 10 && mobileOpen) {
        setMobileOpen(false);
      }
    }
    // evaluate initially in case the page is already scrolled
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileOpen]);

  // expose header height as a CSS variable so other components can use calc(100vh - var(--header-height))
  useEffect(() => {
    function setHeaderHeight() {
      const h = headerRef.current?.offsetHeight ?? 64;
      document.documentElement.style.setProperty("--header-height", `${h}px`);
      // expose bottom nav height for small screens so other components can
      // account for the fixed bottom navigation (set to 64px on mobile)
      const bottomNavHeight = window.innerWidth < 768 ? 64 : 0;
      document.documentElement.style.setProperty(
        "--bottom-nav-height",
        `${bottomNavHeight}px`
      );
    }

    // initial
    setHeaderHeight();

    // update on window resize
    window.addEventListener("resize", setHeaderHeight, { passive: true });

    // update if header size changes (e.g., responsive logo size)
    let ro;
    if (typeof ResizeObserver !== "undefined" && headerRef.current) {
      ro = new ResizeObserver(setHeaderHeight);
      ro.observe(headerRef.current);
    }

    return () => {
      window.removeEventListener("resize", setHeaderHeight);
      if (ro) ro.disconnect();
    };
  }, []);

  return (
    // make the header overlay the page so hero video can be visible under it
    <>
      <header
        ref={headerRef}
        className={`w-full fixed top-0 left-0 right-0 z-50 transition-shadow duration-200 ${
          effectiveScrolled
            ? "bg-white backdrop-blur-lg py-2"
            : "bg-transparent py-4 md:py-0 md:pt-8"
        }`}
        // keep the header visually transparent so background (video) shows through when not scrolled (only on home)
        style={{
          boxShadow: effectiveScrolled ? "0 6px 16px rgba(2,6,23,0.08)" : "none",
          // Glass effect: background handled by Tailwind classes above
        }}
      >
        <div
          className="mx-auto px-4 sm:px-6 "
          ref={containerRef}
          style={{ maxWidth: "1000px" }}
        >
          <div className="flex justify-between items-center">
            {/* Left: Logo */}
            <div className="flex items-center w-full md:w-auto justify-start md:justify-start">
              <a href="#" className="flex items-center gap-3">
                <Image
                  src="/images/logo.png"
                  alt="MedService logo"
                  width={effectiveScrolled ? 120 : 220}
                  height={effectiveScrolled ? 48 : 88}
                  className={
                    'object-contain transition-all duration-200 h-10 w-[120px] ' +
                    (effectiveScrolled
                      ? 'md:h-11 md:w-[124px] mt-0'
                      : 'md:h-28 md:w-[172px] md:-mt-4 ')
                  }
                  priority
                />
              </a>
            </div>

            {/* Right: navigation + CTA + mobile menu button */}
            <div className="flex items-center justify-center gap-6">
                <nav className="hidden md:flex items-center header-nav">
                  <div className="flex items-center space-x-6">
                <a
                  href="#"
                  className={`font-semibold ${effectiveScrolled ? 'text-primary hover:text-primary' : 'text-white hover:text-white/90'}`}
                >
                  Home
                </a>
                <a
                  href="#"
                  className={`font-semibold ${effectiveScrolled ? 'text-primary hover:text-primary' : 'text-white hover:text-white/90'}`}
                >
                  Products
                </a>
                <button
                  href="#contact"
                    className="px-4 py-2 rounded bg-secondary text-white font-medium shadow transition-colors duration-200 hover:cursor-pointer hover:bg-secondary/80 no-underline hover:no-underline"
                >
                  Contact
                </button>
                  </div>
              </nav>


              {!effectiveScrolled && (
                <button
                  className={`md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-white/10 ${
                    effectiveScrolled ? "text-gray-800" : "text-white"
                  }`}
                  onClick={() => setMobileOpen((v) => !v)}
                  aria-label="Toggle menu"
                  aria-expanded={mobileOpen}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke={scrolled ? "currentColor" : "currentColor"}
                  >
                    {mobileOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile drawer (left side) */}
        {/* Backdrop */}
        <div
          className={`md:hidden fixed inset-0 z-40 transition-opacity duration-200 ${
            mobileOpen
              ? "pointer-events-auto opacity-60 bg-black"
              : "pointer-events-none opacity-0"
          }`}
          aria-hidden={!mobileOpen}
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer panel (now right side) */}
        <aside
          className={`md:hidden fixed top-0 right-0 z-50 h-full w-64 bg-white shadow-xl transform transition-transform duration-200 ease-out origin-right ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          // inline style fallback to ensure right-side translate when Tailwind classes conflict
          style={{
            transform: mobileOpen ? "translateX(0%)" : "translateX(100%)",
          }}
          role="dialog"
          aria-modal="true"
          aria-hidden={!mobileOpen}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-4 h-16 border-b border-gray-100">
            <a href="#" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="MedService logo"
                width={100}
                height={40}
                className="h-8 object-contain transition-all duration-200"
                priority
              />
            </a>
            <button
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="px-4 py-6 space-y-2 header-nav">
            <a
              href="#"
              onClick={() => setMobileOpen(false)}
              className="block px-2 py-2 text-gray-700 rounded hover:bg-gray-50"
            >
              Home
            </a>
            <a
              href="#"
              onClick={() => setMobileOpen(false)}
              className="block px-2 py-2 text-gray-700 rounded hover:bg-gray-50"
            >
              Products
            </a>

          </nav>
        </aside>
      </header>
      {/* Mobile bottom navigation (md and below) - always show below md */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 shadow-inner md:hidden flex items-center justify-around h-16 w-full px-4 pb-[env(safe-area-inset-bottom)]"
        aria-label="Mobile navigation"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <a
          href="#"
          className="flex flex-col items-center justify-center text-sm text-gray-700 w-full max-w-full"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <House className="h-6 w-6 mb-0.5" />
          <span className="text-xs">Home</span>
        </a>

        <a
          href="#"
          className="flex flex-col items-center justify-center text-sm text-gray-700 w-full max-w-full"
        >
          <PackageSearch className="h-6 w-6 mb-0.5" />
          <span className="text-xs">Products</span>
        </a>
      </nav>
    </>
  );
}

export default Header;
