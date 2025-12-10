
"use client";
import React, { useState } from "react";
import DATA from "../data/productData";
import Link from "next/link";
import { Hospital, FlaskConical, PawPrint, GraduationCap, ArrowLeft, Filter, ListFilter, SortAsc, SortDesc } from "lucide-react";

const ICONS = {
  hospital: Hospital,
  laboratory: FlaskConical,
  veterinary: PawPrint,
  academic: GraduationCap,
};

import Image from "next/image";
import debounce from "../../utils/debounce";
import WhatsAppStickyButton from "../components/client/common/WhatsAppStickyButton";

const ProductCard = React.memo(function ProductCard({ name, sub, imageUrl }) {
  const hasImage = typeof imageUrl === "string" && imageUrl.trim() !== "";
  return (
    <div className={
      hasImage
        ? "rounded-xl border border-gray-200 bg-white shadow-lg hover:shadow-xl transition p-0 flex flex-col items-center overflow-hidden group"
        : "rounded-lg border border-[#dfddddad] bg-white shadow-sm hover:shadow-md transition p-4 flex flex-col items-center group"
    }>
      {hasImage && (
        <div className="w-full aspect-4/3 bg-white flex items-center justify-center">
          <Image
            src={imageUrl}
            alt={name}
            width={220}
            height={165}
            className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
            style={{ maxHeight: 220, maxWidth: 320 }}
          />
        </div>
      )}
      <div className={hasImage ? "px-4 py-3 w-full flex flex-col items-center" : "font-semibold text-primary text-sm sm:text-base mb-1 text-center"}>
        <div className="font-bold text-primary text-sm sm:text-base mb-1 text-center group-hover:text-primary-dark transition">{name}</div>
        <div className="text-xs sm:text-sm text-gray-500 text-center">{sub}</div>
      </div>
    </div>
  );
});

export default function Products() {

  const [activeCat, setActiveCat] = React.useState(DATA[0].key);
  const activeCategory = DATA.find((cat) => cat.key === activeCat);
  const [activeSub, setActiveSub] = React.useState("All");
  const [subDropdownOpen, setSubDropdownOpen] = useState(false);
  const [search, setSearch] = React.useState("");
  const [sort, setSort] = React.useState("");
  const [filter, setFilter] = React.useState("All");
  const searchRef = React.useRef(null);

  // Debounced search setter (stable reference)
  const debouncedSetSearch = React.useMemo(() => debounce((val) => setSearch(val), 300), []);

  React.useEffect(() => {
    setActiveSub("All");
    setFilter("All");
    setSearch("");
    setSort("");
  }, [activeCat]);

  // Memoized products to show (filters, search, sort)
  const productsToShow = React.useMemo(() => {
    const allProducts = activeCategory?.subs?.flatMap((sub) => sub.products?.map(p => ({ ...p, sub: sub.name })) ?? []) ?? [];
    let filtered =
      activeSub === "All"
        ? allProducts
        : activeCategory?.subs?.find((sub) => sub.name === activeSub)?.products?.map(p => ({ ...p, sub: activeSub })) ?? [];

    if (search?.trim()) {
      filtered = filtered.filter(p => p.name?.toLowerCase().includes(search.toLowerCase()));
    }
    if (filter !== "All") {
      filtered = filtered.filter(p => p.sub === filter);
    }
    if (sort === "name-asc") {
      filtered = [...filtered].sort((a, b) => a.name?.localeCompare(b.name));
    } else if (sort === "name-desc") {
      filtered = [...filtered].sort((a, b) => b.name?.localeCompare(a.name));
    }
    return filtered;
  }, [activeCategory, activeSub, search, filter, sort]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#f7fafd] to-[#eaf3fa] pt-6 pb-8 px-2 sm:px-4">
      {/* Top bar: Back button left */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-0 sm:px-4 mb-6 w-full">
        <div className="hidden sm:flex items-center w-full sm:w-auto mb-2 sm:mb-0">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary font-semibold text-base border border-primary px-4 py-2 rounded-lg bg-white hover:bg-primary transition-colors duration-150 shadow-sm"
            style={{ textDecoration: 'none' }}
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
        {/* Desktop filters/search */}
        <div className="hidden sm:flex flex-col sm:flex-row gap-2 sm:gap-4 items-stretch sm:items-center w-full sm:w-auto">
          {/* Sort icons */}
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition cursor-pointer ${sort === 'name-asc' ? 'bg-secondary text-white' : 'bg-white text-secondary hover:bg-secondary'} font-semibold`}
            onClick={() => setSort('name-asc')}
            aria-pressed={sort === 'name-asc'}
          >
            <SortAsc size={20} />
            A-Z
          </button>
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition cursor-pointer ${sort === 'name-desc' ? 'bg-secondary text-white' : 'bg-white text-secondary hover:bg-secondary'} font-semibold`}
            onClick={() => setSort('name-desc')}
            aria-pressed={sort === 'name-desc'}
          >
            <SortDesc size={20} />
            Z-A
          </button>
          <input
            type="text"
            placeholder="Search products..."
            defaultValue={search}
            onChange={e => debouncedSetSearch(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 w-full sm:w-[180px] bg-white focus:outline-none focus:ring-2 focus:ring-primary transition text-base"
            ref={searchRef}
          />
          <button
            type="button"
            className="bg-gray-200 hover:bg-primary text-gray-700 font-semibold px-6 py-2 rounded-lg transition whitespace-nowrap cursor-pointer"
            onClick={() => {
              setSearch("");
              setFilter("All");
              setSort("");
              setActiveSub("All");
              if (searchRef.current) searchRef.current.value = "";
            }}
          >
            Reset
          </button>
        </div>
      </div>
      {/* Category Tabs */}
      <div className="flex flex-col md:flex-row gap-2 md:gap-6 mb-6 px-0 sm:px-4">
        {DATA?.map((cat) => {
          const Icon = ICONS[cat.key];
          const isActive = cat.key === activeCat;
          return (
            <button
              key={cat.key}
              onClick={() => setActiveCat(cat.key)}
              className={`group flex-1 flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 rounded-xl shadow-md min-h-[72px] sm:min-h-[100px] md:min-h-[120px] transition-colors duration-150 focus:outline-none border-2 ${isActive ? 'bg-primary text-white border-primary' : 'bg-secondary text-white border-white hover:bg-primary hover:text-white hover:border-primary'}`}
              style={{ cursor: 'pointer' }}
            >
              <div className="mb-1 sm:mb-2">
                {Icon && <Icon size={28} className={isActive ? "transition-colors duration-150" : "transition-colors duration-150 group-hover:text-white text-white"} />}
              </div>
              <div className={isActive ? "font-bold text-xs sm:text-base text-center tracking-wide" : "font-bold text-xs sm:text-base text-center tracking-wide transition-colors duration-150 group-hover:text-white text-white"}>{cat.label}</div>
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 px-0 sm:px-4">
        {/* Subcategories dropdown (mobile) */}
        <div className="block md:hidden mb-4">
          <button
            className="w-full bg-primary text-white font-bold px-4 py-3 rounded-lg flex justify-between items-center shadow-md"
            onClick={() => setSubDropdownOpen((open) => !open)}
            aria-expanded={subDropdownOpen}
            aria-controls="subcat-dropdown"
          >
            {activeSub || 'Subcategories'}
            <svg className={`ml-2 h-5 w-5 transform transition-transform ${subDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </button>
          {subDropdownOpen && (
            <ul id="subcat-dropdown" className="mt-2 bg-primary rounded-lg shadow-md py-2 space-y-1">
              <li key="All">
                <button
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm md:text-base transition-colors font-semibold cursor-pointer ${activeSub === "All" ? 'bg-secondary text-white' : 'bg-primary hover:bg-primary-dark text-white'}`}
                  onClick={() => { setActiveSub("All"); setSubDropdownOpen(false); }}
                >
                  All
                </button>
              </li>
              {activeCategory?.subs?.map((sub) => (
                <li key={sub.name}>
                  <button
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm md:text-base transition-colors font-semibold cursor-pointer ${activeSub === sub.name ? 'bg-secondary text-white' : 'bg-primary hover:bg-primary-dark text-white'}`}
                    onClick={() => { setActiveSub(sub.name); setSubDropdownOpen(false); }}
                  >
                    {sub.name}
                  </button>
                </li>
              ))}
            </ul>
          )}

          {/* Mobile filters/search below dropdown */}
          <div className="flex flex-col gap-2 mt-4 sm:hidden">
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition cursor-pointer ${sort === 'name-asc' ? 'bg-secondary text-white' : 'bg-white text-secondary hover:bg-secondary'} font-semibold`}
              onClick={() => setSort('name-asc')}
              aria-pressed={sort === 'name-asc'}
            >
              <SortAsc size={20} />
              A-Z
            </button>
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition cursor-pointer ${sort === 'name-desc' ? 'bg-secondary text-white' : 'bg-white text-secondary hover:bg-secondary'} font-semibold`}
              onClick={() => setSort('name-desc')}
              aria-pressed={sort === 'name-desc'}
            >
              <SortDesc size={20} />
              Z-A
            </button>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search products..."
                defaultValue={search}
                className="border border-gray-300 rounded-lg px-3 py-2 w-full bg-white focus:outline-none focus:ring-2 focus:ring-primary transition text-base"
                ref={searchRef}
              />
              <button
                type="button"
                className="bg-primary text-white font-semibold px-4 py-2 rounded-lg transition whitespace-nowrap cursor-pointer"
                onClick={() => {
                  if (searchRef.current) debouncedSetSearch(searchRef.current.value);
                }}
              >
                Search
              </button>
            </div>
            <button
              type="button"
              className="bg-gray-200 hover:bg-primary text-gray-700 font-semibold px-6 py-2 rounded-lg transition whitespace-nowrap cursor-pointer mt-2"
              onClick={() => {
                setSearch("");
                setFilter("All");
                setSort("");
                setActiveSub("All");
                if (searchRef.current) searchRef.current.value = "";
              }}
            >
              Reset
            </button>
          </div>
        </div>
        {/* Subcategories sidebar (desktop) */}
        <aside className="hidden md:block col-span-1 bg-primary rounded-xl p-3 sm:p-4 md:p-6 text-white shadow-md mb-4 md:mb-0">
          <div className="font-bold text-sm sm:text-base md:text-xl mb-3 md:mb-6 tracking-wide">Subcategories</div>
          <ul className="space-y-1 md:space-y-2">
            <li key="All">
              <button
                className={`w-full text-left px-3 py-2 sm:px-4 rounded-lg text-xs sm:text-sm md:text-base transition-colors font-semibold cursor-pointer ${activeSub === "All" ? 'bg-secondary text-white' : 'bg-primary hover:bg-primary-dark text-white'}`}
                onClick={() => setActiveSub("All")}
              >
                All
              </button>
            </li>
            {activeCategory?.subs?.map((sub) => (
              <li key={sub.name}>
                <button
                  className={`w-full text-left px-3 py-2 sm:px-4 rounded-lg text-xs sm:text-sm md:text-base transition-colors font-semibold cursor-pointer ${activeSub === sub.name ? 'bg-secondary text-white' : 'bg-primary hover:bg-primary-dark text-white'}`}
                  onClick={() => setActiveSub(sub.name)}
                >
                  {sub.name}
                </button>
              </li>
            ))}
          </ul>
        </aside>
        {/* Products grid (right) */}
        <section className="col-span-1 md:col-span-3">
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {productsToShow.map((p) => (
              <ProductCard key={p.id} name={p.name} sub={activeSub === "All" ? p.sub || "" : activeSub} imageUrl={p.imageUrl} />
            ))}
          </div>
        </section>
      </div>
      <WhatsAppStickyButton />
    </div>
  );
}
